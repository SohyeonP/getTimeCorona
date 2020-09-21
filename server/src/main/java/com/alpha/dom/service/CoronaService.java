package com.alpha.dom.service;

import com.alpha.dom.dto.CMDTO;
import com.alpha.dom.repository.CoronaMapper;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@AllArgsConstructor
@Service
public class CoronaService {
    private CoronaMapper coronaMapper;


}

