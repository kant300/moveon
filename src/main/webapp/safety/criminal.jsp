<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %><!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>무브온 : 생활편의통합 플랫폼</title>
    <link rel='stylesheet' href='/css/safety/criminal.css'>
    
</head>
<body>
    
   
<div id="wrap">

        <jsp:include page="/header.jsp"></jsp:include>

        <div id="container">

        <div id="criminal_container">
            내 위치 반경 2km 내 등록된 성범죄자 인원수 : <span id="criminal_count"> 0 </span> 명
        </div>
        <div class="box_search">
        <input type="text" id="innerQuery" class="tf_keyword" value title="검색어 입력"
        placeholder="장소, 주소, 버스검색" name autocomplete="off" autocorrect="off" autocapitalize="off"
        spellcheck="false" maxlength="100">
        <button type="button" onclick="addressSearchBtn()"> 주소검색 </button>
        </div>
        

        <div id="map"></div>
        <jsp:include page="/footer.jsp"></jsp:include>

    </div>
    <!-- 카카오지도 API -->
    <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9eb4f86b6155c2fa2f5dac204d2cdb35&libraries=services,geometry"></script>
    <script src='/js/safety/criminal.js'></script>
</body>
</html>