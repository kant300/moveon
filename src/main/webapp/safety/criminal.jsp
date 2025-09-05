<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %><!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title> 성범죄자 실거주지 조회 </title>
    <link rel='stylesheet' href='/css/safety/criminal.css'>
    
</head>
<body>
    
    <jsp:include page="/header.jsp"></jsp:include>

    <div id="wrap">
        <h1> 성범죄자 지도 </h1>
        <!-- 카카오지도 담을 영역 -->
        <div id="map" style="width:420px;height:790px;"></div>

        <div id="criminal_container">
            내 위치 반경 2km 내 인원수 : <span id="criminal_count"> 0 </span> 명
        </div>
    </div>
    <!-- 카카오지도 API -->
    <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9eb4f86b6155c2fa2f5dac204d2cdb35&libraries=services,geometry"></script>
    <script src='/js/safety/criminal.js'></script>
</body>
</html>