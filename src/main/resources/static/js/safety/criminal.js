console.log("criminal.js open");
/*

criminalCreateMap();


 // [1] 인천 성범죄자 현황 데이터 준비 및 fetch 실행
 const criminalData = () => {
     const URL = "http://localhost:8080/safety/criminal";
 }
*/

const createMap = async () => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng( 37.4123326, 126.6878251 ), // 지도의 중심좌표, 원인재역
        level: 3 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    