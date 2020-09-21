package com.alpha.dom;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;


public class RESTAPI extends Thread {
    private String xml;
    String data;
    String stateDt, stateTime, decideCnt, clearCnt, deathCnt, examCnt, careCnt, accExamCnt, resultNegCnt, seq;
    public static int INDENT_FACTOR = 4;

    private static String getTagValue(String tag, Element ele) {

        NodeList nodeList = ele.getElementsByTagName(tag).item(0).getChildNodes();

        Node nValue = (Node) nodeList.item(0);

        if (nValue == null) {
            return null;
        }
        return nValue.getNodeValue();
    }

    public String Parsing() {

        Map<String, String> map = new HashMap<>();
        ObjectMapper mapper = new ObjectMapper();


        SimpleDateFormat date = new SimpleDateFormat("yyyyMMdd");
        Calendar cal = Calendar.getInstance();

        cal.add(cal.DATE, 0);
        String Today = date.format(cal.getTime());
        System.out.println(Today);
        cal.add(cal.DATE, -1);
        String Yesterday = date.format(cal.getTime());

        System.out.println(Yesterday);
        /*------------------------------------------*/
        try {
            String urlstr = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?" +
                    "&serviceKey=Xfdt8Gl%2B2MrsGlqYpaDuwrXn5%2B5IHh3FNeg%2BcTRm7GGK8Ww1ex8bLWX9ySv4jKatXJAXm%2FKRVaqLNFfWhsvm%2Bw%3D%3D" +
                    "&pageNo=1" +
                    "&numOfRows=10" +
                    "&startCreateDt=" + Yesterday +
                    "&endCreateDt=" + Today +
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

            element.normalize();
            NodeList nodeList = element.getElementsByTagName("item");
            System.out.println("파싱할 리스트 수 : " + nodeList.getLength());


            for (int i = 0; i < nodeList.getLength(); i++) {

                Node nNode = nodeList.item(i);
                Element eElement = (Element) nNode;
                stateDt = getTagValue("stateDt", element);
                stateTime = getTagValue("stateTime", element);
                decideCnt = getTagValue("decideCnt", element);
                clearCnt = getTagValue("clearCnt", element);
                deathCnt = getTagValue("deathCnt", element);
                examCnt = getTagValue("examCnt", element);
                careCnt = getTagValue("careCnt", element);
                accExamCnt = getTagValue("accExamCnt", element);
                resultNegCnt = getTagValue("resutlNegCnt", element);
                seq = getTagValue("seq", element);

                /*String jsonObject= "stateDt : "+stateDt+","+
                        "stateTime : "+stateTime+","+
                        "decideCnt : "+decideCnt+","+
                        "clearCnt : "+clearCnt+","+
                        "deathCnt : "+deathCnt+","+
                        "examCnt : "+examCnt+","+
                        "careCnt : "+careCnt+","+
                        "accExamCnt : "+accExamCnt+","+
                        "resultNegCnt : "+resultNegCnt+","+
                        "seq: "+seq+
                        "}";*/
                map.put("seq",seq);
                map.put("stateDt",stateDt);
                map.put("stateTime",stateTime);
                map.put("decideCnt",decideCnt);
                map.put("clearCnt",clearCnt);
                map.put("deathCnt",deathCnt);
                map.put("examCnt",examCnt);
                map.put("careCnt",careCnt);
                map.put("accExamCnt",accExamCnt);
                map.put("resultNegCnt",resultNegCnt);

                String json = mapper.writeValueAsString(map);

                json = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(map);

                System.out.println("json=========================="+json);
                data = json;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return data;
    }

}





