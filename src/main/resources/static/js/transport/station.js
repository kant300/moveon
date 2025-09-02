// 엘리베이터에서 승강기 번호만 가져와 html에 올리기
const getNumberTest = async () => {
    const sKey = "NM5zfvdFgH9DFan%2B%2BUniPqtncI36YA5jxHqzi02c4UIZja3JTiGq4iherjyUWk6%2BD7YuNbf%2B23UBd5J%2B2OLkIA%3D%3D";
    const url = "https://api.odcloud.kr/api/15083478/v1/uddi:d6f39f13-aeaf-40cb-9894-9f9950d3ea36?page=9&perPage=10&serviceKey=";
    
    const option = { method : "GET" };
    const response = await fetch(url+sKey, option);
    const data = await response.json();

    const testDiv = document.querySelector("#testDiv");
    let html = '';
    let html2 = '';
    const dataArray = [];
    for (let i=0; i<data.data.length; i++) {
        let obj = data.data[i].승강기번호;
        html += `<div>${obj}</div>`;

        obj = obj.replace("-", "");
        console.log(obj);

        const fullData = await getDataViaNumbers(obj);
        const obj2 = fullData.response.body.item;
        html2 += `<div>
                    <span class="address">${obj2.address1} ${obj2.address2}</span>
                    <span class="status">${obj2.elvtrStts}</span>
                </div>`;
        dataArray[i] = obj2;
    }

    const fullDiv = document.querySelector("#fullDiv");

    testDiv.innerHTML = html;
    fullDiv.innerHTML = html2;

    return dataArray;
}

const getDataViaNumbers = async (obj) => {
    const url = "http://openapi.elevator.go.kr/openapi/service/ElevatorInformationService/getElevatorViewM?serviceKey=";
    const sKey = "NM5zfvdFgH9DFan%2B%2BUniPqtncI36YA5jxHqzi02c4UIZja3JTiGq4iherjyUWk6%2BD7YuNbf%2B23UBd5J%2B2OLkIA%3D%3D";
    const elevatorNo = "&elevator_no="+obj;

    const option = {
        method : "GET",
        headers : {"Accept": "application/json"}
    };
    const response = await fetch(url+sKey+elevatorNo, option);
    const data = await response.json();

    return data;
}

const createMap = async () => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.4903117, 126.7226046), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    const dataArray = await getNumberTest();

    for (let i=0; i<dataArray.length; i++) {
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(`${dataArray[i].address1}`, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            console.log(coords);
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
            var iwContent = `<div style="width:150px;text-align:center;padding:6px 0;">${dataArray[i].elvtrStts}</div>`
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: iwContent,
                removable: iwRemoveable
            });
            kakao.maps.event.addListener(marker, 'click', function() {
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.open(map, marker);  
            });

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } else {
            console.log("not found");
        }
    });    
    }
    
}
createMap();