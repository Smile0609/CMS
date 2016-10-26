'use strict';
$(function() {
  //接收Ajax发回的数据
  $.ajax({
                url: "./php/home.php",
                type: "POST",
                success: function (data) {
                    $('#manger').html(data);
                },
                error: function () {
                    alert('获取数据异常,请重试！');
                }
            })

  //左侧边栏，点击大类，下面对应小类显示
  //获取所有的li然后遍历
  var $liArr = $('.nav>li');
  $liArr.each(function(index, ele) {
    $liArr.eq(index).on('click',function(event) {
      //再给每个li添加active之前，先清除其原有的active;
      $(this).parent().children().removeClass('active');
      $(this).addClass('active');
      $(this).children('div').slideDown(500);
      $(this).siblings(this).children('div').slideUp(500);
    }) 
  });
})

