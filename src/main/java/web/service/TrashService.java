package web.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import web.model.dao.TrashDao;
import web.model.dto.TrashDto;

import java.util.List;

@Service
@RequiredArgsConstructor // 롬복제공 : final 변수에 대한 생성자 자동 제공
public class TrashService {
    // (*)RequiredArgsConstructor 사용시 ( @Autowired 생략해도 자동으로 의존성이 처리된다. )
    private final TrashDao trashDao;

    // [1] 쓰레기 배출정보 등록 // 쓰레기 배출정보를 입력받아 저장한다.
    public boolean trashAdd(TrashDto trashDto){
        System.out.println("trashDto = " + trashDto);
        return trashDao.trashAdd( trashDto );
    }
    // [2] 쓰레기 배출정보 전체조회	//	모든 쓰레기 배출정보(dto)를  출력한다.
    public List<TrashDto> trashPrint(){
        return trashDao.trashPrint();
    }
    // [3] 쓰레기 배출정보 개별조회 // 특정한 쓰레기 번호로 쓰레기 배출정보 출력한다.
    public TrashDto trashfind(int tNo){
        return trashDao.trashfind( tNo );
    }
}
