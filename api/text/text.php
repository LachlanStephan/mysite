<?php
    require("../utils/handleText.php");

    $res = [
        'section1' => null,
        'section2' => null,
        'section3' => null,
    ];

    // Section 1
    $section1 = new Text();

    $heading1 = "A heading...";
    $content1 = "Hey some content here";

    $section1->setHeading($heading1);
    $section1->setContent($content1);

    // Section 2
    $section2 = new text();

    $heading2 = "Another heading okie";
    $content2 = "How would you like more?";

    $section2->setHeading($heading2);
    $section2->setContent($content2);

    // Section 3
    $section3 = new text();

    $heading3 = "Moooore headings";
    $content3 = "Even more content!";

    $section3->setHeading($heading3);
    $section3->setContent($content3);

    $res['section1'] = $section1;
    $res['section2'] = $section2;
    $res['section3'] = $section3;

    echo json_encode($res);

?>
