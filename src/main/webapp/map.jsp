<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Page Title</title>
</head>
<body>
    <jsp:include page="/header.jsp"></jsp:include>

    <!-- 지도 -->
    <div id="map" style="width:420px;height:790px;"></div>
    
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=473cf3e9725a8ab5ab5f7b3c73d0a328&libraries=services"></script>
    <script src="js/map.js"></script>
</body>
</html>