<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- 부트스트랩 -->
    <!-- 제이쿼리 -->
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <!-- 썸머노트 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.1/summernote-lite.min.css" integrity="sha512-ySljI0ZbsJxjJIpfsg+7ZJOyKzBduAajCJpc4mBiVpGDPln2jVQ0kwYu3e2QQM5fwxLp6VSVaJm8XCK9uWD4uA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.1/summernote-lite.min.js" integrity="sha512-sIOi8vwsJpzCHtHd06hxJa2umWfY1FfEEE0nGAaolGlR73EzNnQaWdijVyLueB0PSnIp8Mj2TDQLLHTiIUn1gw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.1/lang/summernote-ko-KR.min.js" integrity="sha512-npFeJw8MO1QVbeFuD7rqVR1CpAbOnUMoYnZIxDbz58biKU52Unq7Av3cn+SZ2KD4yOLWj4bOcjIV1+d4aEXAyg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
    <jsp:include page="/header.jsp"></jsp:include>

    <div class="container">
        <input class="title" />
        <textarea class="content" id="summernote" name="editordata"></textarea>

    </div>


    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b594c9ba2d5a4fcb4a34dffa19dd7a11"></script>
    <script src="/js/living/trash.js"></script>
</body>
</html>