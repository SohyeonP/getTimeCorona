package com.alpha.dom;

import com.alpha.dom.dto.NewsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestTemplate;


@RequiredArgsConstructor
@Service
public class NewsApiClient{

//    private final RestTemplate restTemplate;

    @Value("${CLIENT.ID}")
    static String CLIENT_ID;
    @Value("${CLIENT.SECRET}")
    static String CLIENT_SECRET;


//    private final String OpenNaverNewsUrl_getNews = "https://openapi.naver.com/v1/search/news.json?query={keyword}&sort=date";

    public static NewsResponseDto requestNews(String keyword){
        final HttpHeaders headers = new HttpHeaders();
        headers.set("X-Naver-Client-Id", CLIENT_ID);
        headers.set("X-Naver-Client-Secret", CLIENT_SECRET);

        final HttpEntity<String> entity = new HttpEntity<>(headers);

        /*return  restTemplate.exchange(OpenNaverNewsUrl_getNews,HttpMethod.GET,entity,NewsResponseDto.class,keyword).getBody();*/
        return null;
    }
}
