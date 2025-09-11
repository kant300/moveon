// 전역변수 선언
let map; // 지도 객체
let circle = null; // 2km 반경 원
let clickMarker = null; // 클릭, 검색시 생성되는 마커
let myMarker = null; // 나의 현재 위치 마커
let myInfoWindow = null; // 나의 현위치 인포윈도우
let criminalMarkers = []; // 성범죄자 마커들 배열에 모든 성범죄자 마커저장 -> 기존 마커 제거용이
// let myLocation = null; // 나의 현재위치 좌표

// 지도 기본옵션
const mapContainer = document.querySelector('#map');
  const mapOption = {
    center: new kakao.maps.LatLng(37.4123326, 126.6878251), // 지도의 중심좌표 (원인재역)
    level: 3 // 지도의 확대레벨
  };

map = new kakao.maps.Map(mapContainer, mapOption); // 지도생성

// 현재 위치 버튼 생성
function addCurrentLocationControl() {
  const controlDiv = document.createElement('div');
  const controlUI = document.createElement('button');
  controlUI.innerText = '내 위치로';
  controlUI.style.cssText = `
    background-color: #fff;
    border: 1px solid #888;
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;
    font-weight: bold;
  `;
  controlDiv.appendChild(controlUI);
}
  

// 기존 마커와 원 제거 함수
// function clearMarkers(){
//   if (clickMarker){
//     clickMarker.setMap(null);
//     clickMarker = null;
//   }
//   if( circle ){
//     circle.setMap(null);
//     circle = null;
//   }
//   if( criminalMarkers.length > 0 ){
//     criminalMarkers.forEach( m => m.setMap( null ) );
//     criminalMarkers = [];  
//     }
//   }


// 1. 카카오맵 초기화
const createMap = async () => {
  // 지도 클릭 이벤트
  kakao.maps.event.addListener(map, 'click', async (mouseEvent) => {
    if (clickMarker) {
      clickMarker.setMap(null); // 기존 마커와 원 제거
    }

    const latlng = mouseEvent.latLng;
    const clickLocation = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
    
    // 새로운 클릭 마커 생성
    clickMarker = new kakao.maps.Marker({
      position: clickLocation,
      map: map
    });

    if (circle) { 
      circle.setMap(null); 
    }

    // 2km 반경의 원 생성
    circle = new kakao.maps.Circle({
      center: clickLocation,
      radius: 2000,
      strokeWeight: 5,
      strokeColor: '#75B8FA',
      strokeOpacity: 0.8,
      strokeStyle: 'dashed',
      fillColor: '#CFE7FF',
      fillOpacity: 0.5
    });
    circle.setMap(map);

    // 지도 중심 이동
    map.setCenter(clickLocation);
    map.setLevel(5);

    await loadCriminals(map, clickLocation);
  });

  // 2. 사용자의 현재 위치 가져오기
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async position => {
        const myLat = position.coords.latitude;
        const myLon = position.coords.longitude;
        const myLocation = new kakao.maps.LatLng(myLat, myLon);
        // 현재위치 마커생성
        myMarker = new kakao.maps.Marker({
          position: myLocation,
          map: map
        });
        myMarker.setMap(map);

        // 사용자의 현재위치 인포윈도우 
        myInfoWindow = new kakao.maps.InfoWindow( {
            map:map,
            position:myLocation,
            content: `<div style="padding:3px; font-family: 'NanumGothic';">현재 위치입니다.</div>`,
            removable : true
        } );
        myInfoWindow.open(map, myMarker);

        if (circle) { circle.setMap(null); }// 원삭제
        // clearMarkers();

        // 2km 반경의 원 생성
        circle = new kakao.maps.Circle({
          center: myLocation,
          radius: 2000,
          strokeWeight: 5,
          strokeColor: '#75B8FA',
          strokeOpacity: 0.8,
          strokeStyle: 'dashed',
          fillColor: '#CFE7FF',
          fillOpacity: 0.5
        });
        circle.setMap(map);

        map.setCenter(myLocation);
        map.setLevel(5);

        await loadCriminals(map, myLocation);
      },
      error => {
        console.error('위치 정보를 가져오는 데 실패했습니다.', error);
        alert('위치 정보를 가져올 수 없어 기본 위치로 지도를 표시합니다.');
        loadCriminals(map, null);
      }
    );
  } else {
    alert('이 브라우저는 위치 정보를 지원하지 않습니다.');
    loadCriminals(map, null);
  }
};

createMap();

// 범죄자 데이터를 로드하고 마커를 그리는 함수
const loadCriminals = async (map, myLocation) => {
  // 기존 마커 제거
  if (criminalMarkers.length > 0) {
    for (let i = 0; i < criminalMarkers.length; i++) {
      criminalMarkers[i].setMap(null);
    }
    criminalMarkers = [];
  }

  const response = await fetch("/safety/criminal", { method: "GET" });
  const criminalList = await response.json();
  console.log(criminalList);

  let criminalCount = 0;

  for (let i = 0; i < criminalList.length; i++) {
    const criminal = criminalList[i];
    const criminalLocation = new kakao.maps.LatLng(criminal.latitude, criminal.longitude);

    const imageSrc = "/img/마커_red.png";
    const imageSize = new kakao.maps.Size(25, 34);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    if (myLocation) {
      const linePath = [myLocation, criminalLocation];
      const polyline = new kakao.maps.Polyline({ path: linePath });
      const distance = polyline.getLength();

      if (distance <= 2000) {
        criminalCount++;

        const marker = new kakao.maps.Marker({
          map: map,
          position: criminalLocation,
          image: markerImage
        });

        criminalMarkers.push(marker);

        const iwContent = `
          <div style="font-size:12px;max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"> 
            ${criminal.cAddress}
          </div>`;
        const infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: true
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
      }
    }
  }

  document.getElementById('criminal_count').innerText = criminalCount;
};

// 검색 실행 함수
const searchAddressOrPlace = (keyword) => {
  if (clickMarker) clickMarker.setMap(null);
  const geocoder = new kakao.maps.services.Geocoder();
  const places = new kakao.maps.services.Places();

  // 주소 검색 시도
  geocoder.addressSearch(keyword, async (result, status) => {
    if (status === kakao.maps.services.Status.OK && result.length > 0) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      setSearchMarker(coords);
    } else {
      // 주소 검색 실패 → 장소 키워드 검색
      places.keywordSearch(keyword, async (data, status) => {
        if (status === kakao.maps.services.Status.OK && data.length > 0) {
          const coords = new kakao.maps.LatLng(data[0].y, data[0].x);
          setSearchMarker(coords);
        } else {
          alert("검색 결과가 없습니다.");
        }
      });
    }
  });
};

// 마커 찍고 2km반경 원 + 성범죄자 로드
const setSearchMarker = async (latlng) => {
  if (clickMarker != null) 
    clickMarker.setMap(null);

  console.log(clickMarker)
  clickMarker = new kakao.maps.Marker({
    position: latlng,
    map: map
  });

  if (circle) circle.setMap(null);

  circle = new kakao.maps.Circle({
    center: latlng,
    radius: 2000,
    strokeWeight: 5,
    strokeColor: '#75B8FA',
    strokeOpacity: 0.8,
    strokeStyle: 'dashed',
    fillColor: '#CFE7FF',
    fillOpacity: 0.5
  });
  circle.setMap(map);

  map.setCenter(latlng);
  map.setLevel(5);

  await loadCriminals(map, latlng);
};

// 버튼 클릭이벤트
document.querySelector('.box_search button').addEventListener('click',() => {
  const keyword = document.getElementById('innerQuery').value.trim();
  if(!keyword){
    alert("검색어를 입력하세요");
    return;
  }
  searchAddressOrPlace(keyword);
} );

// 엔터키 이벤트
document.querySelector('.tf_keyword').addEventListener('keydown', (event) => {
  console.log(event);
    if (event.key == "Enter") {
    event.preventDefault(); // 기본 엔터 동작 막기
    const keyword = event.target.value.trim();
    if (!keyword) {
      alert("검색어를 입력하세요.");
      return;
    }
    searchAddressOrPlace(keyword);
  }
});