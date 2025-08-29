// 엘리베이터에서 승강기 번호만 가져와 html에 올리기
const getNumberTest = async () => {
    const sKey = "NM5zfvdFgH9DFan%2B%2BUniPqtncI36YA5jxHqzi02c4UIZja3JTiGq4iherjyUWk6%2BD7YuNbf%2B23UBd5J%2B2OLkIA%3D%3D";
    const url = "https://api.odcloud.kr/api/15083478/v1/uddi:d6f39f13-aeaf-40cb-9894-9f9950d3ea36?page=1&perPage=10&serviceKey=";
    
    const option = { method : "GET" };
    const response = await fetch(url+sKey, option);
    const data = await response.json();
    console.log(data);

    const testDiv = document.querySelector("#testDiv");
    let html = '';
    let html2 = '';
    for (let i=0; i<data.data.length; i++) {
        let obj = data.data[i].승강기번호;
        console.log(obj);
        html += `<div>${obj}</div>`;

        obj = obj.replace("-", "");
        console.log(obj);

        const fullData = await getDataViaNumbers(obj);
        console.log(fullData);
        const obj2 = fullData.response.body.item;
        html2 += `<div>
                    <span id="address">${obj2.address1}</span>
                    <span id="status">${obj2.elvtrStts}</span>
                </div>`;
    }

    const fullDiv = document.querySelector("#fullDiv");

    testDiv.innerHTML = html;
    fullDiv.innerHTML = html2;
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
    console.log(data);

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

    await getNumberTest();

    const dataAddress = document.querySelector("#address").value;
    const dataStatus = document.querySelector("#status").value;

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(`${dataAddress}`, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${dataStatus}</div>`
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } else {
            console.log("not found");
        }
    });    
}
createMap();