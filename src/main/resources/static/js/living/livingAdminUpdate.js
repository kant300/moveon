
console.log('livingAdminUpdate.js open');

// [*] 썸머노트 실행
$(document).ready(function() {
            $('#summernote').summernote({
                lang: 'ko-KR', // 썸머노트 메뉴들을 한글화 속성
                minHeight: 300, // 썸머노트 구역 최소높이    
                placeholder : '배출정보를 입력해주세요.' // 가이드 라인
            });
        });


const trashFind = async ( tno ) =>{
    try{// 1. 어디에 // fetch로 부터 출력할 게시물 조회 요청
        const response = await fetch( `/living/trash?tNo=${tno}`); // GET은 옵션생략 가능
        const data = await response.json();
        // 2. 무엇을 // 응답받은 자료를 특정한 html에 출력한다
        document.querySelector('.tCity').innerHTML = data.tcity;
        document.querySelector('.tGu').innerHTML = data.tgu;
        document.querySelector('.tInfo').innerHTML = data.tinfo;
        // 3. 출력 // 내가 쓴글이면 삭제버튼과 수정버튼 만들기

    }catch(e){console.log(e)}
    
}
