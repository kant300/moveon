console.log("clothing_bin.js open");

// [2] 카카오맵 
const kakaomap = async () => {
 var map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
        center : new kakao.maps.LatLng(37.4178, 126.67897), // 지도의 중심좌표
        level : 3 // 지도의 확대 레벨
    });

    
    const URL = 'https://api.odcloud.kr/api/15141554/v1/uddi:574fcc84-bcb8-4f09-9588-9b820731bf19?page=1&perPage=368&serviceKey=lxvZMQzViYP1QmBRI9MrdDw5ZmsblpCAd5iEKcTRES4ZcynJhQxzAuydpechK3TJCn43OJmweWMoYZ10aspdgQ%3D%3D'
    const response = await fetch( URL , { method : "GET" } );
    const data = await response.json();
    console.log(data); // 의류수거함 정보

    
    // 반복문을 이용하여 마커를 하나씩 생성하여 retrun 한 마커를 makers 변수에 대입한다.
    let makers = data.data.map( (value) =>{

        // 마커 이미지의 주소 입니다.
        var imageSrc = "/img/마커.png";
        // 마커 이미지의 크기 입니다.
        var imageSize = new kakao.maps.Size(25, 34);
        // 마커 이미지 생성합니다.
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        // 마커 생성
        let marker = new kakao.maps.Marker({
                position : new kakao.maps.LatLng(value.위도,value.경도),
                image : markerImage
        });

        marker.setMap(map);
        // 3. positions 배열에 삽입한 데이터를 꺼내옵니다
        kakao.maps.event.addListener( marker, 'click' , () => {
            var iwContent= `<div style="width:150px;text-align:center;padding:6px 0;padding-top:18px;">${value["도로명 주소"]}</div>`,
                iwRemoveable = true;

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                content : iwContent,
                removable : iwRemoveable
            });
            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener( marker, 'click', function(){
                // 마커 위에 인포윈도우를 표시합니다
                infowindow.open(map, marker);
                
                
            });
        })
    })

    
}
kakaomap();

