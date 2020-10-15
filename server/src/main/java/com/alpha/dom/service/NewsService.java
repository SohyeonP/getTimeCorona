package com.alpha.dom.service;

import com.alpha.dom.NewsApiClient;
import com.alpha.dom.dto.NewsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
public class NewsService {
    private final NewsApiClient newsApiClient;

    /*@Transactional(readOnly = true)
    public NewsResponseDto findByKeyword(String keyword){
        return NewsApiClient.requestNews(keyword);
    }*/
}
