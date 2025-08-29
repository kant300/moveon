<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
    <div id="testDiv">
        
    </div>

    <div id="fullDiv">

    </div>

    <div id="map" style="width:100%;height:350px;"></div>
    <p><em>지도를 클릭해주세요!</em></p> 
    <p id="result"></p>

    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=473cf3e9725a8ab5ab5f7b3c73d0a328&libraries=services"></script>
    <script src="/js/station.js"></script>
</body>
</html>