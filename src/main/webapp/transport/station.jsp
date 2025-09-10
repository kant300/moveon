<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title> 무브온 : 생활편의통합 플랫폼 </title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
    <div id="wrap">
        <jsp:include page="/header.jsp"></jsp:include>
        <div id="container">
            <div>지하철 내 에스컬레이터/엘리베이터 위치 정보</div>
            <div id="map"></div>
        </div>
        <jsp:include page="/footer.jsp"></jsp:include>
    </div>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9eb4f86b6155c2fa2f5dac204d2cdb35&libraries=services,clusterer"></script>
    <script src="/js/transport/station.js"></script>
</body>
</html>

