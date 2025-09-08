<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title> 무브온 : 생활편의통합 플랫폼 </title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <div id="wrap">
        <jsp:include page="/header.jsp"></jsp:include>
        <div id="container">
            <div id="headerBox">
                <img src="favicon.ico" class="logo"><span id="title"> mOveOn </span>
            </div>

            <div class="weatherBox">
                <div class="weather">
                    <div class="location">인천 부평구 (테스트)</div>
                    <div class="t1h">기온 : 30.2도</div>
                    <div class="reh">습도 : 86%</div>
                    <div class="pty">날씨 : 맑음</div>
                    <div class="vec">풍향 : 동서쪽</div>
                    <div class="wsd">풍속 : 12m/s</div>
                </div>
            </div>

            <div class="infoBox">
                <div class="btnBox1">
                    <div><a href="/living/trash.jsp"> <img src="img/recycling_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" class="sample"><br/>쓰레기 배출정보 </a></div>
                    <div><a href="/living/clothing_bin.jsp"> <img src="img/apparel_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" class="sample"><br/>의류수거함 위치정보 </a></div>
                </div>
                <div class="btnBox2">
                    <div><a href="/safety/criminal.jsp"> <img src="img/crisis_alert_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" class="sample"><br/>성범죄자 위치정보 </a></div>
                    <div><a href="/transport/station.jsp"> <img src="img/elevator_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" class="sample"><br/>지하철 엘리베이터 </a></div>
                </div>

            </div>
        </div>
    </div>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b594c9ba2d5a4fcb4a34dffa19dd7a11&libraries=services"></script>
    <script src='/js/index.js'></script>
</body>
</html>