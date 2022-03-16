<?php
    require("../utils/handleText.php");

    $res = [
        'blog1' => null,
        'blog2' => null,
        'blog3' => null,
    ];

    // Blog 1
    $blog1 = new Text();

    $heading1 = "Title one hey..";
    $content1 = "blog content 1";

    $blog1->setHeading($heading1);
    $blog1->setContent($content1);

    // Blog 2
    $blog2 = new Text();

    $heading2 = "Title two hey..";
    $content2 = "blog content 2";

    $blog2->setHeading($heading2);
    $blog2->setContent($content2);

    // Blog 3
    $blog3 = new Text();

    $heading3 = "Title three hey..";
    $content3 = "blog content 3";

    $blog3->setHeading($heading3);
    $blog3->setContent($content3);

    $res['blog1'] = $blog1;
    $res['blog2'] = $blog2;
    $res['blog3'] = $blog3;

    echo json_encode($res);

?>
