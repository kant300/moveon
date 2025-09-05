console.log("criminal.js open");

// 1. 카카오맵 초기화
const createMap = async () => {
    var mapContainer = document.getElementById('map');
    var mapOption = { 
        center: new kakao.maps.LatLng( 37.412337188, 126.687830508 ),
        level: 3
    };
    
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    
    
    // 2. 사용자의 현재 위치 가져오기
    if( navigator.geolocation ){
        // 위치 정보를 성공적으로 가져왔을 때 실행될 콜백 함수
        navigator.geolocation.getCurrentPosition( async position => {
            const myLat = position.coords.latitude;
            const myLon = position.coords.longitude;
            const myLocation = new kakao.maps.LatLng(myLat, myLon);
            
            // 내 위치에 마커 생성
            const userMarker = new kakao.maps.Marker({
                position: myLocation,
                map: map
            });
            
            // 2km 반경의 원생성
            const circle = new kakao.maps.Circle({
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
            
            // 지도의 중심을 내 위치로 이동하고 줌 레벨 조정
            map.setCenter(myLocation);
            map.setLevel(5);

            // myLocation이 할당된 후에 loadCriminals 함수 호출
            await loadCriminals(map, myLocation);
        },
        // 위치 정보를 가져오는 데 실패했을 때 실행될 콜백 함수
        error => {
            console.error('위치 정보를 가져오는 데 실패했습니다.', error);
            alert('위치 정보를 가져올 수 없어 기본 위치로 지도를 표시합니다.');
            // 위치 정보를 가져오지 못한 경우에도 범죄자 데이터는 로드
            loadCriminals(map, null);
        });
    } else {
        alert('이 브라우저는 위치 정보를 지원하지 않습니다.');
        // Geolocation을 지원하지 않는 경우에도 범죄자 데이터는 로드
        loadCriminals(map, null);
    }
}

// 범죄자 데이터를 로드하고 마커를 그리는 함수
const loadCriminals = async (map, myLocation) => {
    // 데이터를 가져와 필요한 데이터를 삽입합니다
    const response = await fetch("/safety/criminal", {method : "GET"});
    const criminalList = await response.json();

    let criminalCount = 0;

    for( let i = 0; i < criminalList.length; i++){
        const criminal = criminalList[i];
        
        const criminalLocation = new kakao.maps.LatLng(criminal.latitude, criminal.longitude);
        
        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "/img/마커_red.png";
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(25, 34);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            map: map,
            position: criminalLocation,
            image : markerImage
        });

        // 인포윈도우에 표출될 내용으로 HTML 문자열
        let iwContent = `<div style="padding:5px;font-size:12px;"> ${criminal.cAddress}</div>`;
        var iwRemoveable = true;

        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });

        // 마커에 클릭 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
        
        // myLocation이 null이 아닐 때만 거리 계산 및 카운트
        if (myLocation) {   
            // 두 좌표를 Polyline의 path로 넣기
            const linePath = [
                myLocation,
                criminalLocation
            ];

            const polyline = new kakao.maps.Polyline({
                path: linePath
            });

            const distance = polyline.getLength(); // 미터 단위 거리 반환
            if (distance <= 2000) { 
                criminalCount++; 
            }
        }

    }
    
    // 최종 인원수 업데이트
    document.getElementById('criminal_count').innerText = criminalCount;
}

createMap();