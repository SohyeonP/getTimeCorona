package com.alpha.dom.dto;


import lombok.*;

@Data @Getter @Setter @ToString
public class CMDTO {
    private String state_date;
    private String decide_cnt;
    private String clear_cnt;
    private String exam_cnt;
    private String death_cnt;
    private String care_cnt;
    private String result_neg_cnt;
    private String acc_exam_cnt;
}
