<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>무브온 : 생활편의통합 플랫폼</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <style>
            #container{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
    </style>

</head>
<body>

    <div id="wrap">
        <jsp:include page="/header.jsp"></jsp:include>
            <div id="container">
                    <!-- 각자가 들어갈 html 들 -->
                    <div id="textBox"> 위치 엑세스가 거부되었습니다. 엑세스를 허용해주세요. </div> </br></br>

                    <div id="infoBox"> 쓰레기 정보 </div>
            </div>
        <jsp:include page="/footer.jsp"></jsp:include>
    </div>

    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b594c9ba2d5a4fcb4a34dffa19dd7a11&libraries=services"></script>
    <script src="/js/living/trash.js"></script>
</body>
</html>