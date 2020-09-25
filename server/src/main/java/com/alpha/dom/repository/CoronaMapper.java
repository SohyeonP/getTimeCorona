package com.alpha.dom.repository;

import com.alpha.dom.dto.CMDTO;
// import org.apache.ibatis.annotations.Mapper;
// import org.apache.ibatis.annotations.Select;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// import java.util.List;

// @Mapper
// public interface CoronaMapper {

// }

@Repository
public interface CoronaMapper extends JpaRepository<CMDTO, String>{

}