package com.alpha.dom;

import com.alpha.dom.dto.CMDTO;
import com.alpha.dom.repository.CoronaMapper;
// import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.List;

@Slf4j
@RestController
public class MainController {

	@Autowired
	// CoronaService coronaService;
	private CoronaMapper coronaM;

	@RequestMapping(value = "/test", method = { RequestMethod.GET, RequestMethod.POST })
	public String callapihttp() {

		return null;

	}

	@GetMapping("/api/hello")
	public String hello() {
		SimpleDateFormat format = new SimpleDateFormat("yyyy년 MM일 dd일 HH시mm분ss초");
		String format_time = format.format(System.currentTimeMillis());
		return "최종 업데이트 시간-" + format_time + "깃 수정";

	}

	@GetMapping("/update")
	public String updateData() {

		RESTAPI restapi = new RESTAPI();
		restapi.Parsing();

		CMDTO dto = new CMDTO();
		dto.setSeq(restapi.seq);
		dto.setState_date(restapi.stateDt);
		dto.setDecide_cnt(restapi.decideCnt);
		dto.setClear_cnt(restapi.clearCnt);
		dto.setExam_cnt(restapi.examCnt);
		dto.setDeath_cnt(restapi.deathCnt);
		dto.setCare_cnt(restapi.careCnt);
		dto.setResult_neg_cnt(restapi.resultNegCnt);
		dto.setAcc_exam_cnt(restapi.accExamCnt);

		coronaM.save(dto);

		return "마지막 업데이트 날짜:"+restapi.stateDt;

	}

	@GetMapping("/list")
	public List<CMDTO> showlist(){
		return coronaM.findAll();
	}

}
