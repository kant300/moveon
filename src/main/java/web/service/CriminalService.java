package web.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import web.model.dao.CriminalDao;
import web.model.dto.CriminalDto;

import java.util.List;

@Service
@RequiredArgsConstructor // 롬복제공 : final 변수에 대한 생성자 자동 제공
public class CriminalService {
    // @RequiredArgsConstructor 사용시 ( @Autowired 생략해도 자동으로 의존성이 처리된다.)
    private final CriminalDao criminalDao;

    // [1] 성범죄자 정보 등록
    public boolean criminalAdd(CriminalDto criminalDto ){
        System.out.println("criminalDto = " + criminalDto);
        return criminalDao.criminalAdd( criminalDto );
    }

    // [2] 성범죄자 실제거주지 전체조회
    public List< String  > criminalPrint() { return  criminalDao.criminalPrint(); }

    // [3] 성범죄자 정보삭제

    // [4] 성범죄자 정보수정
}
