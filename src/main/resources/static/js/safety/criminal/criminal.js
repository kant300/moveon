console.log("criminal.js open");

// [1] 공공데이터 , 인천시 연수구 성범죄자
const dataAPI = async() => {
    // 1. 공공데이터 준비
    const serviceKey ="uipPeoMCsO4%2BVMADQY3GvlH0o%2F5quShFdxh8JqDmORpPz4jcUgxyft482xScplb1wBKYW7QSjSEaNxDLOyBUAQ%3D%3D";
    const URL ="https://api.odcloud.kr/api/15051492/v1/uddi:852bbc11-63ed-493e-ab09-caaaf54fd144?page=1&perPage=34&serviceKey="
    // 2. fetch 실행
    const reponse = await fetch( URL+serviceKey , { method : "GET" } );
    const data = await reponse.json();
    console.log( data );
    // 3. 사이드바 정보 출력하기(위도/경도 제외한-> 지도에서 사용), 소재지도로명주소/약국명/전화번호
    const sidebar = document.querySelector('#sidebar');
    let html ='';
        data.data.forEach( (value) => {
            html += `<div id="stroe">
                        <div> 약국명 : ${ value.약국명 } </div>
                        <div> 전화번호 : ${ value.전화번호 } </div>
                        <div> 주소 : ${ value.소재지도로명주소 } </div>
                    </div>`
        });
    sidebar.innerHTML = html;
}
dataAPI();