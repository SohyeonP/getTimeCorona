package com.alpha.dom.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class CMdto {
    private int seq ;
    private String state_date;
    private String decide_cnt;
    private String clear_cnt;
    private String exam_cnt;
    private String death_cnt;
    private String cate_cnt;
    private String result_neg_cnt;
    private String acc_exam_cnt;
    private String acc_exam_comp_cnt;
    private String def_rate;
    private String insert_dt;
}
