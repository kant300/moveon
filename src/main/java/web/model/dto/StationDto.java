package web.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class StationDto {
    private int sNo; // 승강기 번호
    private String sStatus; // 승강기 상태
    private String sAddress; // 소재지
}
