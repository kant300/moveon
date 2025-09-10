<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>무브온 : 생활편의통합 플랫폼</title>
    <link rel='stylesheet' href='css/living/clothing_bin.css'>
</head>
<body>
    <div id="wrap">
        <jsp:include page="/header.jsp"></jsp:include>
        <div id="container">
            
            <div id="map"><div class="mapText">의류수거함 위치정보</div></div>
        </div>
        <jsp:include page="/footer.jsp"></jsp:include>
    </div>




    


    <!-- 카카오지도 API -->
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9eb4f86b6155c2fa2f5dac204d2cdb35&libraries=services,clusterer"></script>
    <script src="/js/living/clothing_bin.js"></script>
</body>
</html>