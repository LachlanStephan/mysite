<?php
    function insertNewBlog($data)
    {
        global $conn;

        $sql = "INSERT INTO blog (title, content)
        VALUES
        (:t, :c) ";
        
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ':t' => $data['title'],
            ':c' => $data['content'],
        ]);

        if (!empty($conn->lastInsertId())) {
            return true;
        } else {
            return false;
        }
    }

    function getBlogs()
    {
        global $conn;

        $sql = "SELECT * FROM blog"; // will need to limit at some point

        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $rows = $stmt->fetchAll();

        return $rows;
    }

?>