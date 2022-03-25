<?php
    require("../index.php");

    $res = [
        'status' => 403,
        'msg' => '',
    ];

    function validatePass($pass) {
        global $conn;

        $u = 'Lach';
        $sql = '
            SELECT user_name, password 
            FROM user 
            WHERE user_name = :u
        ';

        $stmt = $conn->prepare($sql);
        $stmt->execute(array(
            ':u' => $u
        ));

        $row = $stmt->fetch();
        if ($row['password'] === $pass) {
            return true;
        } else {
            return false;
        }
    }

    if (!empty($_POST)) {
        $pass = $_POST['pass'];
        if (validatePass($pass)) {
            $res['status'] = 202;
        }
    }

    echo json_encode($res);

?>