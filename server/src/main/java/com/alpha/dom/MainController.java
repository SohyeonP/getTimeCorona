package com.alpha.dom;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
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
        return "안녕하세요. 현재 시간은 1시입니다.- 서버에서 넘어오는 시간 \n";

    }
}
