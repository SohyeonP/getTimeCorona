package com.alpha.dom.dto;

import  lombok.Data;
import java.util.Date;

@Data
public class NewsResponseDto {
    private int display;
    private Item[] items;

    @Data
    static class Item{
        public String title;
        public String originallink;
        public String link;
        public String pubDate;
    }
}
