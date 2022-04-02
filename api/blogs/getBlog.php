<?php
    require("./functions.php");
    require("../index.php");

    $res = [
        'blogs' => [],
        'status' => 500,
    ];

    $blogs = getBlogs();

    if (!empty($blogs)) {
        $res['blogs'] = $blogs;
        $res['status'] = 200;
    }

    echo json_encode($res);

?>