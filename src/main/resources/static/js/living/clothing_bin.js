console.log("clothing_bin.js open");

const clothing_binCreateMap = async () => {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.4123326, 126.6878251 ), //지도의 중심좌표. 원인재역
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
}
clothing_binCreateMap();

// [1] 인천 연수구 의류수거함 현황
const dataAPI1 = async ()=>{
    // (1) 요청 URL 
    const URL = 'https://api.odcloud.kr/api/15141554/v1/uddi:574fcc84-bcb8-4f09-9588-9b820731bf19?page=1&perPage=368&serviceKey=lxvZMQzViYP1QmBRI9MrdDw5ZmsblpCAd5iEKcTRES4ZcynJhQxzAuydpechK3TJCn43OJmweWMoYZ10aspdgQ%3D%3D'
    try{
    // (2) fetch 공공데이터 API 요청
        const option = { method : "GET"}
        const response = await fetch( URL , option );
        const data = await response.json();
        console.log(data) ; // 요청 결과값을 console **출력후 분석**하여 사용한다.
        // perPage : 페이지당 가져올 데이터 수
        // data : 실질적인 데이터가 들어오는 속성명
        console.log( data.data );
    // (3) JSP(html) 표에 출력하기
        // 1. 어디에
        const dataTbody = document.querySelector('#dataTbody');
        // 2. 무엇을 , array.forEach( ( value ) => {} ) : 리스트내 요소를 하나씩 변수(value)에 반복대입
        let html = "";
        data.data.forEach( ( value )=>{ // for ( let i = 0 ; i< data.data.length ; i++) { let value = data.data[i];}
            html +=`<tr>
                    <td> ${value.연번}</td>
                    <td> ${value.경도}</td>
                    <td> ${value.위도}</td>
                    <td> ${value.관리번호}</td>
                    <td> ${value["도로명 주소"]}</td>
            </tr>`
        } );
        // 3. 출력
        dataTbody.innerHTML = html;
   }catch (error){console.log(error);}
    
} // func end 
dataAPI1(); // JSP 열릴때 최초 1번 실행