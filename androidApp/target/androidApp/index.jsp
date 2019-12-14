<%--
  Created by IntelliJ IDEA.
  User: 大东哥
  Date: 2019/12/12
  Time: 22:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录测试</title>
    <script src="js/jquery.min.js"></script>
    <script type="text/javascript">

        $(function () {
            $("#btn").click(function () {
                alert("发送ajax1");
                $.ajax({
                    url:"/androidApp/User/Login",
                    contentType:"application/json;charset=UTF-8",
                    data: '{"userId":"001","password":"123456"}',
                    dataType:"json",
                    type:"post",
                    success:function (data) {
                        //data为后端传回的数据，类型为dataType
                        alert(data);
                    }
                })
            })
        })

        $(function () {
            $("#btn1").click(function () {
                alert("发送ajax2");
                $.ajax({
                    url:"/androidApp/User/Register",
                    contentType:"application/json;charset=UTF-8",
                    data: '{"userId":"007","userName":"胡雪莹","password":"112233","sex":"女","address":"贵州","phone":"15360","qq":"9527"}',
                    dataType:"json",
                    type:"post",
                    success:function (data) {
                        //data为后端传回的数据，类型为dataType
                        alert(data);
                    }
                })
            })
        })
        $(function () {
            $("#btn2").click(function () {
                alert("发送ajax3");
                $.ajax({
                    url:"/androidApp/Goods/FindAllGoods",
                    contentType:"application/json;charset=UTF-8",
                    dataType:"json",
                    type:"get",
                    success:function (data) {
                        //data为后端传回的数据，类型为dataType
                        var jsonData = JSON.stringify(data)
                        alert(jsonData)
                    }
                })
            })
        })
        $(function () {
            $("#btn3").click(function () {
                alert("发送ajax4");
                $.ajax({
                    url:"/androidApp/Goods/FindGoodsByName",
                    contentType:"application/json;charset=UTF-8",
                    dataType:"json",
                    data:'{"goodName":"脑"}',
                    type:"post",
                    success:function (data) {
                        //data为后端传回的数据，类型为dataType
                        var jsonData = JSON.stringify(data)
                        alert(jsonData)
                    }
                })
            })
        })
    </script>
</head>
<body>
    <button id="btn">登录</button>
    <button id="btn1">注册</button>
    <button id="btn2">商品</button>
    <button id="btn3">查找货物</button>

</body>
</html>
