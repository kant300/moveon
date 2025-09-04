
console.log('add.js open');

// [*] 썸머노트 실행
$(document).ready(function() {
            $('#summernote').summernote({
                lang: 'ko-KR', // 썸머노트 메뉴들을 한글화 속성
                minHeight: 300, // 썸머노트 구역 최소높이    
                placeholder : '여기에 내용 입력해주세요.' // 가이드 라인
            });
        });

// [1] 쓰레기 정보 등록
const addTrash = async() => {
    let tno = '';
    let tday = '';
    let tcity = document.querySelector('.tCity').value;
    let tgu = document.querySelector('.tGu').value;
    let tinfo = document.querySelector('.tInfo').value;

    // 유효성 검사 (시,구,배출정보 미입력 시)
    if( !tcity || !tgu || !tinfo ){
        alert('지역 시(군), 구(읍), 배출 정보를 모두 입력해 주세요.');
        return;
    }

    let obj = { tno, tcity , tgu , tinfo , tday }; console.log(obj);

    let option = {
        method : "POST",
        headers : { "content-type" : "application/json" },
        body : JSON.stringify(obj)
    }
    try{ 
        const response = await fetch( "/living/trash" , option ); 
        const data = await response.json(); 
        console.log(response);
        console.log(data);
        if( data == true ){
            alert('등록성공');
        }else{
            alert('등록실패');
        }
    }catch(e){console.log(e);}

}



















// // [1] 쓰레기 정보 등록 ??
// const addTrash = async() => {
//     // 1. 전송할 폼 가져오기
//     const trashForm = document.querySelector('#trashForm');
//     // 2. 대용량 첨부파일 폼 전환
//     const trashFormData = new FormData( trashForm );
//     const option = { 
//         method : "POST", // header 생략 가능
//         body : trashFormData 
//     }
//     const response = await fetch( "/living/trash" , option );
//     const data = await response.json();
//     //
//     if( data == true ){ alert('등록 성공'); }
//     else{alert('등록 실패'); }
    
// } // func end


















    