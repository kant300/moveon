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
    <jsp:include page="/header.jsp"></jsp:include>

    <div id="wrap">
        <div id="container">
            <!-- 지도 -->
            <div id="map" style="width:420px;height:790px;"></div>
        </div>
    </div>

    <jsp:include page="/footer.jsp"></jsp:include>

    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=473cf3e9725a8ab5ab5f7b3c73d0a328&libraries=services"></script>
    <script src="/js/transport/station.js"></script>
</body>
</html>