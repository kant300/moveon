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
    public TrashDto trashFind(int tNo){
        return trashDao.trashFind( tNo );
    }

    // [4] 쓰레기 배출정보 삭제	 // 삭제할 쓰레기 번호(tNo)를 입력받아 삭제한다.
    public boolean trashDelete(int tNo){ return trashDao.trashDelete(tNo);}

    // [5] 쓰레기 배출정보 수정	// 수정할 쓰레기번호 와 배출지역, 배출정보를 수정한다.
    public boolean trashUpdate(TrashDto trashDto){ return trashDao.trashUpdate(trashDto); }
}





















