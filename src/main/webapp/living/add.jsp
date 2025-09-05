<%@ page language = "java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- 부트스트랩 -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script> -->
    <!-- 제이쿼리 -->
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <!-- 썸머노트 -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.1/summernote-bs5.min.js" integrity="sha512-qTQLA91yGDLA06GBOdbT7nsrQY8tN6pJqjT16iTuk08RWbfYmUz/pQD3Gly1syoINyCFNsJh7A91LtrLIwODnw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.1/summernote-bs5.min.css" integrity="sha512-rDHV59PgRefDUbMm2lSjvf0ZhXZy3wgROFyao0JxZPGho3oOuWejq/ELx0FOZJpgaE5QovVtRN65Y3rrb7JhdQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.1/summernote-lite.min.js" integrity="sha512-sIOi8vwsJpzCHtHd06hxJa2umWfY1FfEEE0nGAaolGlR73EzNnQaWdijVyLueB0PSnIp8Mj2TDQLLHTiIUn1gw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.1/summernote-lite.min.css" integrity="sha512-ySljI0ZbsJxjJIpfsg+7ZJOyKzBduAajCJpc4mBiVpGDPln2jVQ0kwYu3e2QQM5fwxLp6VSVaJm8XCK9uWD4uA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- 썸머노트 한글패치 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.1/lang/summernote-ko-KR.min.js" integrity="sha512-npFeJw8MO1QVbeFuD7rqVR1CpAbOnUMoYnZIxDbz58biKU52Unq7Av3cn+SZ2KD4yOLWj4bOcjIV1+d4aEXAyg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <style>
        #wrap{
            display: flex;
            justify-content: center;
        }
        #container{
            width: 420px;
            height: 900px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    </style>
</head>
<body>
    <div id="wrap">
        <div id="container">
            <h3> 쓰레기 정보 등록 </h3> </br>
            <form id="trashForm">
            지역시 :
            <select class="tCity" id="tCitySelect">
            <option value="">시/도를 선택하세요.</option>
            <option value="서울특별시">서울특별시</option>
            <option value="인천광역시">인천광역시</option>
            <option value="경기도 부천시">경기도 부천시</option>
            </select> <br><br>
            지역구 :
            <select class="tGu" id="tGuSelect">
            <option value="">시/군/구를 선택하세요.</option>
            </select> <br><br>
            배출 정보 : <textarea class="tInfo" id="summernote" name="editoradata"></textarea> </br>
            <span><button type="button" onclick="addTrash()">등록</button></span>
            </form>
        </div>    
    </div>

    <script src="/js/living/add.js"></script>
</body>
</html>