package com.alpha.dom;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

@RestController
public class MainController {
    @RequestMapping(value = "/test", method = {RequestMethod.GET, RequestMethod.POST})
    public List<String> callapihttp() {

        RESTAPI restapi = new RESTAPI();
        restapi.Parsing();

        return restapi.data;

    }

    @GetMapping("/api/hello")
    public String hello(){
        SimpleDateFormat format = new SimpleDateFormat("yyyy년 MM일 dd일 HH시mm분ss초");
        String format_time = format.format (System.currentTimeMillis());
        return "최종 업데이트 시간-"+format_time+"깃 수정";

    }
}
