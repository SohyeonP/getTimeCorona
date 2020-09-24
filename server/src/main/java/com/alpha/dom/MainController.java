package com.alpha.dom;

import com.alpha.dom.dto.CMDTO;
import com.alpha.dom.service.CoronaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
@Slf4j
@RestController
public class MainController {

    @Autowired
    CoronaService coronaService;

    @RequestMapping(value = "/test", method = {RequestMethod.GET, RequestMethod.POST})
    public String callapihttp() {

        return null;

    }

    @GetMapping("/api/hello")
    public String hello(){
        SimpleDateFormat format = new SimpleDateFormat("yyyy년 MM일 dd일 HH시mm분ss초");
        String format_time = format.format (System.currentTimeMillis());
        return "최종 업데이트 시간-"+format_time+"깃 수정";

    }

    @GetMapping("/update")
    public String updateData(){

        RESTAPI restapi = new RESTAPI();
        restapi.Parsing();
        return restapi.data;

    }

}
