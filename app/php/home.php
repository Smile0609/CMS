<?php

    $data=file_get_contents("test.json");
    // // 把JSON字符串转成PHP数组
    $data = json_decode($data, true);
    echo $data['username'];
?>