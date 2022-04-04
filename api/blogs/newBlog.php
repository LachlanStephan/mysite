<?php
    require("../index.php");
    require("./functions.php");
    require("../utils/sanitize.php");

    $res = [
        'status' => 401,
        'msg' => 'Rejected'
    ];

    if(!empty($_POST)) {

        $form_data = [
            'title' => sanitizeData($_POST['title_input_blog']),
            'content' => sanitizeData($_POST['content_input_blog']),
        ];

        if (insertNewBlog($form_data)) {
            $res['status'] = 202;
            $res['msg'] = "Success";
        }

        echo json_encode($res);
    }

?>