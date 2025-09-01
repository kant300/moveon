package web.service;

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

@Service
public class StationService {
    public String getElNum() {
        try {
            StringBuilder urlBuilder = new StringBuilder("https://api.odcloud.kr/api/15083478/v1/uddi:d6f39f13-aeaf-40cb-9894-9f9950d3ea36");
            urlBuilder.append("?page=1").append("&perPage=5").append("&serviceKey=");
            urlBuilder.append("NM5zfvdFgH9DFan%2B%2BUniPqtncI36YA5jxHqzi02c4UIZja3JTiGq4iherjyUWk6%2BD7YuNbf%2B23UBd5J%2B2OLkIA%3D%3D");
            URL url = new URL(urlBuilder.toString());
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());
            BufferedReader rd;
            if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();
            conn.disconnect();
            return sb.toString();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public String getElSpec() {
        try {
            StringBuilder urlBuilder = new StringBuilder("http://openapi.elevator.go.kr/openapi/service/ElevatorInformationService/getElevatorViewM"); /*URL*/
            urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=NM5zfvdFgH9DFan%2B%2BUniPqtncI36YA5jxHqzi02c4UIZja3JTiGq4iherjyUWk6%2BD7YuNbf%2B23UBd5J%2B2OLkIA%3D%3D"); /*Service Key*/
            urlBuilder.append("&" + URLEncoder.encode("elevator_no", "UTF-8") + "=" + URLEncoder.encode("0007001", "UTF-8")); /*승강기번호*/
            URL url = new URL(urlBuilder.toString());
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());
            BufferedReader rd;
            if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();
            conn.disconnect();
            return sb.toString();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
