<?php

      $data=$_POST;
      // // 把PHP数组转成JSON字符串
      $json_string = json_encode($data);
      // 写入文件
      file_put_contents('test.json', $json_string);

?>
