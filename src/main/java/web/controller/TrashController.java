package web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import web.model.dto.TrashDto;
import web.service.TrashService;

import java.util.List;

@RestController // 1. HTTP 요청/응답 자료 매핑 기술
@RequestMapping("/living/trash") // 2. HTTP URL 매핑 기술
@RequiredArgsConstructor // 3. final 변수에 대한 자동 생성자 주입
public class TrashController {

    // @RequiredArgsConstructor 사용함으로 @Autowired 생략 한다.
    public final TrashService trashService;

    // [1] 쓰레기 배출정보 등록 // 쓰레기 배출정보를 입력받아 저장한다.
    @PostMapping("")
    public boolean trashAdd(@RequestBody TrashDto trashDto){
        System.out.println("trashDto = " + trashDto);
        return trashService.trashAdd( trashDto );
    }

    // [2] 쓰레기 배출정보 전체조회	//	모든 쓰레기 배출정보(dto)를  출력한다.
    @GetMapping("")
    public List<TrashDto> trashPrint(){
        return trashService.trashPrint();
    }

    // [3] 쓰레기 배출정보 개별조회 // 특정한 쓰레기 번호로 쓰레기 배출정보 출력한다.
    @GetMapping("/find") // http:localhost:8080/living/trash/find?=tNo
    public TrashDto trashfind(@RequestParam int tNo){
        return trashService.trashfind( tNo );
    }

}//class end
