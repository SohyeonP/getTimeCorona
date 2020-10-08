package com.alpha.dom.dto;


// import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

// @Data @Getter @Setter @ToString
@Entity
public class CMDTO {
    @Id
    private String seq;

    private String state_date;
    private String decide_cnt;
    private String clear_cnt;
    private String exam_cnt;
    private String death_cnt;
    private String care_cnt;
    private String result_neg_cnt;
    private String acc_exam_cnt;

	public String getSeq() {
		return this.seq;
	}

	public void setSeq(String seq) {
		this.seq = seq;
	}

	public String getState_date() {
		return this.state_date;
	}

	public void setState_date(String state_date) {
		this.state_date = state_date;
	}

	public String getDecide_cnt() {
		return this.decide_cnt;
	}

	public void setDecide_cnt(String decide_cnt) {
		this.decide_cnt = decide_cnt;
	}

	public String getClear_cnt() {
		return this.clear_cnt;
	}

	public void setClear_cnt(String clear_cnt) {
		this.clear_cnt = clear_cnt;
	}

	public String getExam_cnt() {
		return this.exam_cnt;
	}

	public void setExam_cnt(String exam_cnt) {
		this.exam_cnt = exam_cnt;
	}

	public String getDeath_cnt() {
		return this.death_cnt;
	}

	public void setDeath_cnt(String death_cnt) {
		this.death_cnt = death_cnt;
	}

	public String getCare_cnt() {
		return this.care_cnt;
	}

	public void setCare_cnt(String care_cnt) {
		this.care_cnt = care_cnt;
	}

	public String getResult_neg_cnt() {
		return this.result_neg_cnt;
	}

	public void setResult_neg_cnt(String result_neg_cnt) {
		this.result_neg_cnt = result_neg_cnt;
	}

	public String getAcc_exam_cnt() {
		return this.acc_exam_cnt;
	}

	public void setAcc_exam_cnt(String acc_exam_cnt) {
		this.acc_exam_cnt = acc_exam_cnt;
	}

}
