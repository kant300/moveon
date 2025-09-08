// console.log("criminal.js open");



// // 1. 카카오맵 초기화
const createMap = async () => {
    var mapContainer = document.querySelector('#map');
    var mapOption = { 
        center: new kakao.maps.LatLng( 37.4123326, 126.6878251 // 지도의 중심좌표, 원인재역
    ),  level: 3 //지도의확대레벨
    };
        

        
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도생성

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({ 
        // 지도 중심좌표에 마커를 생성합니다 
        position: map.getCenter() 
    }); 
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    kakao.maps.event.addListener(map, 'click', async (mouseEvent) =>  {        
        
        // 클릭한 위도, 경도 정보를 가져옵니다 
        var latlng = mouseEvent.latLng; 
        
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);
   
        const clickLocation = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());

                    // 2km 반경의 원생성
            const circle = new kakao.maps.Circle({
                center: clickLocation,
                radius: 2000,
                strokeWeight: 5,
                strokeColor: '#75B8FA',
                strokeOpacity: 0.8,
                strokeStyle: 'dashed',
                fillColor: '#CFE7FF',
                fillOpacity: 0.5
            });
            circle.setMap(null);
            circle.setMap(map);
            
            // 지도의 중심을 내 위치로 이동하고 줌 레벨 조정
            map.setCenter(clickLocation);
            map.setLevel(5);

        await loadCriminals(map, clickLocation);

    });


    
    // 2. 사용자의 현재 위치 가져오기
    const myLocation = null;
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
            
            circle.setMap(null);
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


createMap();

const loadCriminals = async (map, myLocation) => {
     // 데이터를 가져와 필요한 데이터를 삽입합니다
    const response = await fetch("/safety/criminal", {method : "GET"});
    const criminalList = await response.json();
    console.log( criminalList )

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



        // 인포윈도우에 표출될 내용으로 HTML 문자열
        let iwContent = `<div style="padding:5px;font-size:12px;"> ${criminal.cAddress}</div>`;
        var iwRemoveable = true;

        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });



                // myLocation이 null이 아닐 때만 거리 계산 및 카운트
                console.log(myLocation )
                console.log(criminalLocation )
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
                console.log(criminalCount )
                        // 마커를 생성합니다
                let marker = new kakao.maps.Marker({
                    map: map,
                    position: criminalLocation,
                    image : markerImage
                });

                        // 마커에 클릭 이벤트를 등록합니다
                kakao.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
                });
            }
        }
    }
    // 최종 인원수 업데이트
    document.getElementById('criminal_count').innerText = criminalCount;
}





// // 1. 카카오맵 초기화
// const createMap = async () => {
//     var mapContainer = document.querySelector('#map');
//     var mapOption = { 
//         center: new kakao.maps.LatLng( 37.4123326, 126.6878251 // 지도의 중심좌표, 원인재역
//  ),
//         level: 3 //지도의확대레벨
//     };
    
//     var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
//     message += '경도는 ' + latlng.getLng() + ' 입니다';
    
//     var map = new kakao.maps.Map(mapContainer, mapOption); // 지도생성

//     function setCenter() {            
//     // 이동할 위도 경도 위치를 생성합니다 
//     var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
    
//     // 지도 중심을 이동 시킵니다
//     map.setCenter(moveLatLon);
// }

//     function panTo() {
//         // 이동할 위도 경도 위치를 생성합니다 
//         var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);
        
//         // 지도 중심을 부드럽게 이동시킵니다
//         // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
//         map.panTo(moveLatLon);            
//     }    


//     // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
//     function zoomIn() {
//         map.setLevel(map.getLevel() - 1);
//     }

//     // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
//     function zoomOut() {
//         map.setLevel(map.getLevel() + 1);
//     }

    
    
//     // 2. 사용자의 현재 위치 가져오기
//     if( navigator.geolocation ){
//         // 위치 정보를 성공적으로 가져왔을 때 실행될 콜백 함수
//         navigator.geolocation.getCurrentPosition( async position => {
//             const myLat = position.coords.latitude;
//             const myLon = position.coords.longitude;
//             const myLocation = new kakao.maps.LatLng(myLat, myLon);
            
//             // 내 위치에 마커 생성
//             const userMarker = new kakao.maps.Marker({
//                 position: myLocation,
//                 map: map
//             });
            
//             // 2km 반경의 원생성
//             const circle = new kakao.maps.Circle({
//                 center: myLocation,
//                 radius: 2000,
//                 strokeWeight: 5,
//                 strokeColor: '#75B8FA',
//                 strokeOpacity: 0.8,
//                 strokeStyle: 'dashed',
//                 fillColor: '#CFE7FF',
//                 fillOpacity: 0.5
//             });
//             circle.setMap(map);
            
//             // 지도의 중심을 내 위치로 이동하고 줌 레벨 조정
//             map.setCenter(myLocation);
//             map.setLevel(5);

//             // myLocation이 할당된 후에 loadCriminals 함수 호출
//             await loadCriminals(map, myLocation);
//         },
//         // 위치 정보를 가져오는 데 실패했을 때 실행될 콜백 함수
//         error => {
//             console.error('위치 정보를 가져오는 데 실패했습니다.', error);
//             alert('위치 정보를 가져올 수 없어 기본 위치로 지도를 표시합니다.');
//             // 위치 정보를 가져오지 못한 경우에도 범죄자 데이터는 로드
//             loadCriminals(map, null);
//         });
//     } else {
//         alert('이 브라우저는 위치 정보를 지원하지 않습니다.');
//         // Geolocation을 지원하지 않는 경우에도 범죄자 데이터는 로드
//         loadCriminals(map, null);
//     }
// }

// // 범죄자 데이터를 로드하고 마커를 그리는 함수
// const loadCriminals = async (map, myLocation) => {
//     // 데이터를 가져와 필요한 데이터를 삽입합니다
//     const response = await fetch("/safety/criminal", {method : "GET"});
//     const criminalList = await response.json();

//     let criminalCount = 0;

//     for( let i = 0; i < criminalList.length; i++){
//         const criminal = criminalList[i];
        
//         const criminalLocation = new kakao.maps.LatLng(criminal.latitude, criminal.longitude);
        
//         // 마커 이미지의 이미지 주소입니다
//         var imageSrc = "/img/마커_red.png";
//         // 마커 이미지의 이미지 크기 입니다
//         var imageSize = new kakao.maps.Size(25, 34);

//         // 마커 이미지를 생성합니다
//         var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

//         // 마커를 생성합니다
//         let marker = new kakao.maps.Marker({
//             map: map,
//             position: criminalLocation,
//             image : markerImage
//         });

//         // 인포윈도우에 표출될 내용으로 HTML 문자열
//         let iwContent = `<div style="padding:5px;font-size:12px;"> ${criminal.cAddress}</div>`;
//         var iwRemoveable = true;

//         // 인포윈도우를 생성합니다
//         let infowindow = new kakao.maps.InfoWindow({
//             content : iwContent,
//             removable : iwRemoveable
//         });

//         // 마커에 클릭 이벤트를 등록합니다
//         kakao.maps.event.addListener(marker, 'click', function() {
//             infowindow.open(map, marker);
//         });
        
//         // myLocation이 null이 아닐 때만 거리 계산 및 카운트
//         if (myLocation) {   
//             // 두 좌표를 Polyline의 path로 넣기
//             const linePath = [
//                 myLocation,
//                 criminalLocation
//             ];

//             const polyline = new kakao.maps.Polyline({
//                 path: linePath
//             });

//             const distance = polyline.getLength(); // 미터 단위 거리 반환
//             if (distance <= 2000) { 
//                 criminalCount++; 
//             }
//         }

//     }
    
//     // 최종 인원수 업데이트
//     document.getElementById('criminal_count').innerText = criminalCount;
// }

// createMap();


