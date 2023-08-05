<?php
    session_start();

    // Remove all session variable
    session_unset();

    // destroy
    session_destroy();
?>