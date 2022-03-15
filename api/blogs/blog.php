<?php
    $res = [
        'blog1' => null,
        'blog2' => null,
        'blog3' => null,
    ];

    class blog {
        public $title;
        public $content;

        // funcs
        function setTitle($title) {
            $this->title = $title;
        }
        function setContent($content) {
            $this->content = $content;
        }
    }

    // Blog 1
    $blog1 = new blog();

    $title1 = "Title one hey..";
    $content1 = "blog content 1";

    $blog1->setTitle($title1);
    $blog1->setContent($content1);

    // Blog 2
    $blog2 = new blog();

    $title2 = "Title two hey..";
    $content2 = "blog content 2";

    $blog2->setTitle($title2);
    $blog2->setContent($content2);

    // Blog 3
    $blog3 = new blog();

    $title3 = "Title three hey..";
    $content3 = "blog content 3";

    $blog3->setTitle($title3);
    $blog3->setContent($content3);

    $res['blog1'] = $blog1;
    $res['blog2'] = $blog2;
    $res['blog3'] = $blog3;

    echo json_encode($res);

?>
