package com.alpha.dom.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;


public class CMS {
    @XmlElement(name="item")
    private List<CMDTO> cmdto;


}
