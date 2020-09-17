package com.alpha.corona19.demo;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.omg.PortableInterceptor.SYSTEM_EXCEPTION;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class RESTAPI extends Thread {
    private String xml;
    List<String> data = new ArrayList<String>();

    int stateDt,stateTime,decideCnt,clearCnt,deathCnt,examCnt,careCnt,accExamCnt,resultNegCnt,seq;

    private static String getTagValue(String tag, Element ele) {

        NodeList nodeList = ele.getElementsByTagName(tag).item(0).getChildNodes();

        Node nValue = (Node) nodeList.item(0);

        if (nValue == null) {

            return null;

        }

        return nValue.getNodeValue();
    }

    public List<String> Parsing() {
        StringBuffer result = new StringBuffer();


        SimpleDateFormat date = new SimpleDateFormat("yyyyMMdd");
        Calendar cal = Calendar.getInstance();
        
        cal.add(cal.DATE,0);
        String Yesterday =date.format(cal.getTime());
        System.out.println(Yesterday);
        cal.add(cal.DATE,-1);
        String Today =date.format(cal.getTime());
        System.out.println(Today);
        /*------------------------------------------*/
        try {
            String urlstr = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?" +
                    "&serviceKey=Xfdt8Gl%2B2MrsGlqYpaDuwrXn5%2B5IHh3FNeg%2BcTRm7GGK8Ww1ex8bLWX9ySv4jKatXJAXm%2FKRVaqLNFfWhsvm%2Bw%3D%3D" +
                    "&pageNo=1" +
                    "&numOfRows=10" +
                    "&startCreateDt="+Yesterday+
                    "&endCreateDt="+Today+
                    "&type=JSON";
            URL url = new URL(urlstr);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setRequestMethod("GET");
            BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            StringBuilder sb = new StringBuilder();
            while (true) {
                String line = br.readLine();
                if (line == null)
                    break;
                sb.append(line);
            }
            xml = sb.toString();
            /*  System.out.println("xml============="+xml);*/
            br.close();
            urlConnection.disconnect();


        } catch (Exception e) {
            System.out.println("다운로드 에러" + e.getMessage());
        }
        try {
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();

            DocumentBuilder builder = dbFactory.newDocumentBuilder();
            InputStream is = new ByteArrayInputStream(xml.getBytes());
            Document doc = builder.parse(is);
            Element element = doc.getDocumentElement();

            /*doc.getDocumentElement().normalize();
            System.out.println("Root Element:"+doc.getDocumentElement().getNodeName());
*/


            NodeList nodeList = element.getElementsByTagName("item");
            System.out.println("파싱할 리스트 수 : " + nodeList.getLength());

          /*  for (int i = 0;i < nodeList.getLength(); i++) {
                Node nNode = nodeList.item(i);

               *//* System.out.println("엔노드+++++++++++++++++++++"+nNode);*//*
             *//*                if (nNode.getNodeType() == Node.ELEMENT_NODE) {

                    Element element = (Element) nNode;
                }*//*
                Node temp = nNode.getFirstChild();

                String value = temp.getNodeValue();
                *//*System.out.println(value);*//*
             *//*data.add(value);*//*
                System.out.println(data);
            }*/

            // 데이터값 Json 형식으로 전달
            JSONObject jsonObject = new JSONObject();
            JSONObject data = new JSONObject();
            JSONArray req_array = new JSONArray();
            req_array.add(data);
            jsonObject.put("REQ_DATA",req_array);

            /*  return jsonObject.toJSONString();*/


           /* System.out.print("기준일:"+getTagValue("stateDt",element));

            System.out.println("기준시간"+getTagValue("stateTime",element));

            System.out.println("확진자 수: "+getTagValue("decideCnt", element));

            System.out.println("격리해제 수"+getTagValue("clearCnt",element));

            System.out.println("사망자 수"+getTagValue("deathCnt",element));

            System.out.println("검사진행수"+getTagValue("examCnt",element));

            System.out.println("치료중 환자 수"+getTagValue("careCnt",element));

            System.out.println("누적 검사 수"+getTagValue("accExamCnt",element));

            System.out.println("누적결과 음성 수"+getTagValue("resutlNegCnt",element));
*/

        } catch (Exception e) {
            e.printStackTrace();
        }
        /*for(String Cnt : data){
            System.out.println(Cnt);
        }*/
        return data;
    }

}



    /*JSONObject jsonObject = new JSONObject();
               JSONObject data = new JSONObject();
    int stateDt,stateTime,decideCnt,clearCnt,deathCnt,examCnt,careCnt,accExamCnt,resultNegCnt,seq;*/
/*
                    stateDt = Integer.parseInt(getTagValue("stateDt",element));
                    stateTime = Integer.parseInt(getTagValue("stateTime",element));
                    decideCnt =Integer.parseInt(getTagValue("decideCnt", element));
                    clearCnt=Integer.parseInt(getTagValue("clearCnt",element));
                    deathCnt=Integer.parseInt(getTagValue("deathCnt",element));
                    examCnt =Integer.parseInt(getTagValue("examCnt",element));
                    careCnt = Integer.parseInt(getTagValue("careCnt",element));
                    accExamCnt = Integer.parseInt(getTagValue("accExamCnt",element));
                    resultNegCnt= Integer.parseInt(getTagValue("resutlNegCnt",element));
                    seq= Integer.parseInt(getTagValue("seq",element));*/

                   /*System.out.print("기준일:"+getTagValue("stateDt",element));

                    System.out.println("기준시간"+getTagValue("stateTime",element));

                    System.out.println("확진자 수: "+getTagValue("decideCnt", element));

                    System.out.println("격리해제 수"+getTagValue("clearCnt",element));

                    System.out.println("사망자 수"+getTagValue("deathCnt",element));

                    System.out.println("검사진행수"+getTagValue("examCnt",element));

                    System.out.println("치료중 환자 수"+getTagValue("careCnt",element));

                    System.out.println("누적 검사 수"+getTagValue("accExamCnt",element));

                    System.out.println("누적결과 음성 수"+getTagValue("resutlNegCnt",element));*/

                 /*   jsonObject.put("게시글 번호",seq);
                    jsonObject.put("기준 일",stateDt);
                    jsonObject.put("기준 시간",stateTime);



                    data.put("확진자 수",decideCnt);
                    data.put("격리헤제 수",clearCnt);
                    data.put("사망자 수",deathCnt);
                    data.put("검사진행 수",examCnt);
                    data.put("치료중 환자 수",careCnt);
                    data.put("누적 검사 수",accExamCnt);
                    data.put("누적 결과 음성 수",resultNegCnt);*/