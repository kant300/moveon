<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>의류수거함 위치</title>
    <link rel='stylesheet' href='css/living/clothing_bin.css'>
</head>
<body>
    <jsp:include page="/header.jsp"></jsp:include>

    <!-- 카카오지도 담을 영역 -->
    <div id="map" style="width:420px;height:790px;"></div>

    <!-- 카카오지도 API -->
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9eb4f86b6155c2fa2f5dac204d2cdb35"></script>
    <script src="/js/living/clothing_bin.js"></script>
</body>
</html>