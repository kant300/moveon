package web.model.dao;

import org.springframework.stereotype.Repository;
import web.model.dto.TrashDto;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
public class TrashDao extends Dao{

    // [1] 쓰레기 배출정보 등록 // 쓰레기 배출정보를 입력받아 저장한다.
    public boolean trashAdd(TrashDto trashDto){
        try{// 1. SQL 작성
            String sql = "insert into trash( tCity , tGu , tInfo ) values (? ,? ,?)";
            // 2. SQL 기재
            PreparedStatement ps = conn.prepareStatement(sql);
            // 3. SQL 매개변수 대입
            ps.setString(1,trashDto.getTCity());
            ps.setString(2,trashDto.getTGu());
            ps.setString(3,trashDto.getTInfo());
            System.out.println(trashDto.getTCity());
            // 4. SQL 실행
            int count = ps.executeUpdate();
            // 5. SQL 결과에 따른 로직/리턴/확인
            if( count == 1 )return true;
        }catch (Exception e){System.out.println(e);}
        return false;
    } // m end

    // [2] 쓰레기 배출정보 전체조회	//	모든 쓰레기 배출정보(dto)를  출력한다.
    public List<TrashDto> trashPrint(){
        List<TrashDto> list = new ArrayList<>();
        try{// 1. SQL 작성
            String sql = "select * from trash";
            // 2. SQL 기재
            PreparedStatement ps = conn.prepareStatement(sql);
            // 3. SQL 매개변수 대입 // 매개변수 없음
            // 4. SQL 실행
            ResultSet rs = ps.executeQuery();
            // 5. SQL 결과에 따른 로직/리턴/확인
            while ( rs.next() ){
                TrashDto trashDto = new TrashDto();
                trashDto.setTNo(rs.getInt("tNo"));
                trashDto.setTCity(rs.getString("tCity"));
                trashDto.setTGu(rs.getString("tGu"));
                trashDto.setTInfo(rs.getString("tInfo"));
                trashDto.setTDay(rs.getString("tDay"));
                list.add(trashDto);
            }
        }catch (Exception e){System.out.println(e);}
        return list;
    } // m end

    // [3] 쓰레기 배출정보 개별조회 // 특정한 쓰레기 번호로 쓰레기 배출정보 출력한다.
    public TrashDto trashfind(int tNo){
        try{// 1. SQL 작성
            String sql = "select * from trash where tNo = ?";
            // 2. SQL 기재
            PreparedStatement ps = conn.prepareStatement(sql);
            // 3. SQL 매개변수 대입
            ps.setInt(1,tNo);
            // 4. SQL 실행
            ResultSet rs = ps.executeQuery();
            // 5. SQL 결과에 따른 로직/리턴/확인
            if( rs.next() ){
                TrashDto trashDto = new TrashDto();
                trashDto.setTNo(rs.getInt("tNo"));
                trashDto.setTCity(rs.getString("tCity"));
                trashDto.setTGu(rs.getString("tGu"));
                trashDto.setTInfo(rs.getString("tInfo"));
                trashDto.setTDay(rs.getString("tDay"));
                return trashDto;
            }
        }catch (Exception e){System.out.println(e);}
        return null;
    }
} // class end
