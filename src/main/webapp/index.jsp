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
        <div id="container">
            <div id="menuBox"><img src="img/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" class="menu"> </div>
            <div id="headerBox">
                <img src="favicon.ico" class="logo"><span class="title"> mOveOn </span>
            </div>

            <div class="content"><a href="#"><img src="img/weather.png" class="weather"></a></div>

            <div class="infoBox">
                <div class="btnBox1">
                    <div><a href="/living/trash.jsp"> <img src="img/recycling_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" class="sample"><br/>쓰레기 배출정보 </a></div>
                    <div><a href="/living/clothing_bin.jsp"> <img src="img/apparel_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" class="sample"><br/>의류수거함 위치정보 </a></div>
                </div>
                <div class="btnBox2">
                    <div><a href="/safety/criminal.jsp"> <img src="img/crisis_alert_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" class="sample"><br/>성범죄자 알리미 </a></div>
                    <div><a href="/transport/station.jsp"> <img src="img/elevator_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" class="sample"><br/>지하철 엘리베이터 </a></div>
                </div>

            </div>
        </div>

    </div>
    <script src='/index.js'></script>
</body>
</html>