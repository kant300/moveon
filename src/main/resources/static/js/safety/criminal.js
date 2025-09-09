const mapContainer = document.querySelector('#map');
  const mapOption = {
    center: new kakao.maps.LatLng(37.4123326, 126.6878251), // 지도의 중심좌표 (원인재역)
    level: 3 // 지도의 확대레벨
  };

  const map = new kakao.maps.Map(mapContainer, mapOption); // 지도생성

// 1. 카카오맵 초기화
const createMap = async () => {
    let circle = null;
  let clickMarker = null; // 클릭으로 생성된 마커 저장용

  // 지도 클릭 이벤트
  kakao.maps.event.addListener(map, 'click', async (mouseEvent) => {
    if (clickMarker) {
      clickMarker.setMap(null); // 기존 마커 제거
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

        new kakao.maps.Marker({
          position: myLocation,
          map: map
        });

        if (circle) {
          circle.setMap(null);
        }

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

// 범죄자 마커들을 저장할 배열
let criminalMarkers = [];

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

        const iwContent = `<div style="padding:5px;font-size:12px;"> ${criminal.cAddress}</div>`;
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

const addressSearchBtn = () => {
  const tf_keyword = document.querySelector(".tf_keyword").value;

  // 주소-좌표 변환 객체를 생성합니다
  var geocoder = new kakao.maps.services.Geocoder();

  // 주소로 좌표를 검색합니다
  geocoder.addressSearch(tf_keyword, function(result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {

          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          console.log(coords);

          

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
      }
  });   
}