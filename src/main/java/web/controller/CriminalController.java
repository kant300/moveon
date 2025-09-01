package web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import web.model.dto.CriminalDto;
import web.service.CriminalService;

import java.util.List;

@RestController // 1. HTTP 요청/응답 자료 매핑 기술
@RequestMapping("/safety/criminal") // 2. HTTP URL 매핑 기술
@RequiredArgsConstructor    // 3. final 변수에 대한 자동 생성자 주입
public class CriminalController {
    // @RequiredArgsConstructor 사용함으로 @Autowired 생략 한다.
    public final CriminalService criminalService;

    // [1] 성범죄자 정보 등록
    @PostMapping("")
    public boolean criminalAdd(@RequestBody CriminalDto criminalDto){
        System.out.println("criminalDto = " + criminalDto);
        return criminalService.criminalAdd( criminalDto );
    }

    // [2] 성범죄자 실제거주지 전체조회
    @GetMapping("")
    public List< String > criminalPrint() { return criminalService.criminalPrint(); }

    // [3] 성범죄자 정보삭제

    // [4] 성범죄자 정보수정


}// class end
