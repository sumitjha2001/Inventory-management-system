<?php
    $data = $_POST;
    $user_id = (int) $data['user_id'];;
    $first_name = $data['f_name'];
    $last_name = $data['l_name'];
    $email = $data['email'];

    // adding the record.
    try{
        $sql = "UPDATE users SET email = ?, first_name=?, last_name=?, updated_at=? WHERE id=?";
        include('connection.php');
        $conn ->prepare($sql)->execute([$email, $first_name, $last_name, date('Y-m-d h:i:s'), $user_id]);
        echo json_encode([
            'success' => true,
            'message' => $first_name . ' ' . $last_name . ' Successfully Updated.'
        ]);
    }catch (PDOException $e) {
        echo json_encode([
            'success' => false,
            'message' => ' Error Processing Your Request.'
        ]);
    }