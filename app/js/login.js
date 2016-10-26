//输入框JS
$(document).ready(function () {
    //得到焦点时事件
    $('.form>input').focus(function () {
        $(this).css('background', '#fff').animate({
            width: '300px',
            translation: 'all 0.5s',
        }).val(function () {
            $(this).css('color', '#53e3a6');
        })
    })
    //失去焦点时事件
    $('.form>input').blur(function () {
        $(this).css('background', 'rgba(255,255,255,0.2)').animate({
            width: '250px',
            translation: 'all 0.5s'
        }).css('color', '#fff');
    })

    //ajax请求服务器
    var $btn = $("button");
    $btn.on(
        "click", function () {
            //获取input值
            var $username = $("#text").val();
            var $password = $("#pass").val();
            //序列化
            //var data = $("#ajaxForm").serialize();

            $.ajax({
                url: "./php/login.php",
                type: "POST",
                data: {
                    username:$username,

                    password:$password
                },
                //dataType:'html',
                beforeSend:function(){
                    // console.log("请求发送之前调用.");
                    /* return false;*/
                    if ($('.sp1').text() !== '' || $('.sp2').text() !== '') {
                        alert('用户名或密码错误，请重新输入!');
                        return false;
                    }
                    console.log('true');
                },
                success: function (data) {
                    console.log(data);
                    window.location.href="home.html";
                },
                error: function () {
                    alert('向服务器发送请求失败,请重试！');
                }
            })
        })
});