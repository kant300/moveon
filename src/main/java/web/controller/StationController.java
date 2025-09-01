package web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import web.service.StationService;

@RestController
@RequestMapping("/station")
@RequiredArgsConstructor
public class StationController {
    private final StationService stationService;

    @GetMapping("/elevator/number")
    public String getElNum() {
        return stationService.getElNum();
    }

    @GetMapping("/elevator/spec")
    public String getElSpec() {
        return stationService.getElSpec();
    }
}
