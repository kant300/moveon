console.log("criminal.js open");


var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.4123326, 126.6878251 ), //지도의 중심좌표. 원인재역
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// // 전역 변수 선언
// let map;
// let allMarkers = []; // 모든 마커를 담을 배열
// let circle;
// const geocoder = new kakao.maps.services.Geocoder();
// const countDisplay = document.getElementById('criminal-count'); // HTML 요소는 전역에서 한 번만 가져옵니다.


// // [1] 인천 성범죄자 현황 데이터 준비 및 fetch 실행
// const criminalData = () => {
//     const URL = "http://localhost:8080/safety/criminal";
// }
    

// criminalData();