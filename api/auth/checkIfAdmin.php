<?php
    $res = [
        'status' => 403,
        'msg' => '',
    ];

    function validatePass($pass) {
        if ($pass) {
            return true;
        }
        if (!$pass) {
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