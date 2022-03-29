<?php
    require("../index.php");
    require("./functions.php");

    $res = [
        'status' => 401,
        'msg' => 'Rejected'
    ];

    if(!empty($_POST)) {
        $form_data = [
            'title' => $_POST['title_input_blog'],
            'content' => $_POST['content_input_blog'],
        ];

        if (validateBlog($form_data)) {
            insertNewBlog($form_data);
            $res['status'] = 202;
            $res['msg'] = "Success";
        }

        echo json_encode($res);
    }

?>