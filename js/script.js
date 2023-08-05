var sideBarIsOpen = true;

toggleBtn.addEventListener( 'click', (event) => {
    event.preventDefault();

    if(sideBarIsOpen)
    {
        dashboard_sidebar.style.width = '11%';
        dashboard_sidebar.style.transition = '0.3s all';            
        dashboard_content_container.style.width = '90%';
        dashboard_logo.style.fontSize = '40px';
        userImage.style.width = '40px';


        menuIcons = document.getElementsByClassName('MenuText');
        for(var i=0; i < menuIcons.length;i++){
        menuIcons[i].style.display = 'none';
        }

        document.getElementsByClassName('dashboard_menu_list')[0].style.textAlign = 'center';
        sideBarIsOpen = false;
    } 
    else
    {
        
        dashboard_sidebar.style.width = '20%';
        dashboard_content_container.style.width = '80%';
        dashboard_logo.style.fontSize = '70px';
        userImage.style.width = '80px';


        menuIcons = document.getElementsByClassName('MenuText');
        for(var i=0; i < menuIcons.length;i++){
        menuIcons[i].style.display = 'inline-block';
        }

        document.getElementsByClassName('dashboard_menu_list')[0].style.textAlign = 'left';
        sideBarIsOpen = true;
    }
});

// SubMenu show

document.addEventListener('click',function(e){
    let clickedE1 = e.target;

    if(clickedE1.classList.contains('showHideSubMenu')){
        let subMenu = clickedE1.closest('li').querySelector('.subMenus');
        let mainMenuIcon = clickedE1.closest('li').querySelector('.mainMenuIconArrow');

        // Close all submenus
        let subMenus = document.querySelectorAll('.subMenus');
        subMenus.forEach((sub) => {
            if(subMenu != sub) sub.style.display = 'none';
        });


            showHideSubMenu(subMenu,mainMenuIcon);

    }
});  

function showHideSubMenu(subMenu,mainMenuIcon ){

    // check if there is submenu
    if(subMenu != null){
        if(subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
            mainMenuIcon.classList.remove('fa-angle-down');
            mainMenuIcon.classList.add('fa-angle-left');
        }else {
            subMenu.style.display = 'block'; 
            mainMenuIcon.classList.remove('fa-angle-left');
            mainMenuIcon.classList.add('fa-angle-down');

        }
    }
}
// Add/Hide Active Class to menu
// Get the current page
// the selector to get the current menu or submenu
// add the active class

const pathArray = window.location.pathname.split( '/' );
let curFile = pathArray[pathArray.length - 1];

let curNav = document.querySelector('a[href="./'+ curFile + '"]');
let mainNav = curNav.closest('li.liMainMenu');
mainNav.style.background = '#000000';

let subMenu = curNav.closest('.subMenus');


let mainMenuIcon = mainNav.querySelector('i.mainMenuIconArrow');
console.log(subMenu);

// call function to hide/show submenu.
showHideSubMenu(subMenu,mainMenuIcon);


console.log(mainNav);


 