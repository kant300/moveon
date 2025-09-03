
console.log('trash.js open');


// [1] 카카오맵 API을 이용하여 현재 위치좌표 => 현재 위치 지역 시,구 정보얻기 

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
                console.log(lat,lon);
                geocoder.coord2RegionCode(lon , lat, callback);
        });
    } 
// [2] 좌표를 주소로 변환, 화면에 출력
var geocoder = new kakao.maps.services.Geocoder();
var callback = function(result, status) {
    if (status === kakao.maps.services.Status.OK) {
        console.log(`지역 명칭 : ${result[0].region_1depth_name} ${result[0].region_2depth_name}`); 
        // region_1depth_name : 시도 단위 , region_2depth_name : 구 단위
        // https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-district // 추후 커스텀시 지역정보코드모음
    }
    
};


