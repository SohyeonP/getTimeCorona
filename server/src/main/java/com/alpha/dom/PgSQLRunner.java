package com.alpha.dom;

import ch.qos.logback.core.encoder.EchoEncoder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.Statement;
@Slf4j
@Component
public class PgSQLRunner implements ApplicationRunner {


    @Autowired
    DataSource dataSource;

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Connection connection = dataSource.getConnection();
        Statement statement = connection.createStatement();
        // String sql = "CREATE TABLE public.corona19 (ID serial NOT NULL PRIMARY KEY, JSON json NOT NULL)";
        String sql = "CREATE TABLE public.corona19 (ID serial NOT NULL PRIMARY KEY, state_date DATE,  decide_cnt integer, clear_cnet integer, exam_cnt integer,death_cnt integer,care_cnt integer,result_neg_cnt integer,acc_exam_cnt integer)";
        statement.execute(sql);
    }


}
