
console.log('trash.js open');

// [*] 썸머노트 실행
$(document).ready(function() {
            $('#summernote').summernote({
                lang: 'ko-KR' // 한국어 설정
            });
        });


// [1] 카카오맵 API을 이용하여 현재 위치좌표 얻기 

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
                console.log(lat,lon);
        });
    } 

        