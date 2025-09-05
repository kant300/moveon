package web.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class WeatherService {
    // 기상청 API를 활용하여 데이터 가져오기
    public List<Map<String, String>> getData() {
        try {
            // 현재 시간 구하기
            LocalDateTime now = LocalDateTime.now();
            // 현재 날짜 (ex : 20251225)
            DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyyMMdd");
            // 현재 시간, 시 단위 (ex : 1200, 0600)
            DateTimeFormatter timeFormat = DateTimeFormatter.ofPattern(now.getHour()>=10?"HH00":"0H00");

            // 기상청 API 주소
            StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst"); /*URL*/
            urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=NM5zfvdFgH9DFan%2B%2BUniPqtncI36YA5jxHqzi02c4UIZja3JTiGq4iherjyUWk6%2BD7YuNbf%2B23UBd5J%2B2OLkIA%3D%3D"); /*Service Key*/
            urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /*페이지번호*/
            urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("10", "UTF-8")); /*한 페이지 결과 수*/
            urlBuilder.append("&" + URLEncoder.encode("dataType","UTF-8") + "=" + URLEncoder.encode("JSON", "UTF-8")); /*요청자료형식(XML/JSON) Default: XML*/
            urlBuilder.append("&" + URLEncoder.encode("base_date","UTF-8") + "=" + URLEncoder.encode(now.format(dateFormat), "UTF-8")); /*‘21년 6월 28일 발표*/
            urlBuilder.append("&" + URLEncoder.encode("base_time","UTF-8") + "=" + URLEncoder.encode(now.format(timeFormat), "UTF-8")); /*06시 발표(정시단위) */
            // TODO: 예보지점의 x, y 좌표값은 JS 의 Geolocation 을 통해 얻은 위도, 경도 좌표값을 대입해야 함 (현재 위치에 따른 기상 정보 요청)
            urlBuilder.append("&" + URLEncoder.encode("nx","UTF-8") + "=" + URLEncoder.encode("55", "UTF-8")); /*예보지점의 X 좌표값*/
            urlBuilder.append("&" + URLEncoder.encode("ny","UTF-8") + "=" + URLEncoder.encode("123", "UTF-8")); /*예보지점의 Y 좌표값*/
            URL url = new URL(urlBuilder.toString());

            // API 요청
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());
            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            // 필요한 데이터로 정제
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }

            Map<String, String> map = new LinkedHashMap<>();
            JSONObject obj = new JSONObject(rd);
            JSONArray array = obj.getJSONObject("items").getJSONArray("item");

            String baseDate = array.getJSONObject(0).getString("baseDate");
            String baseTime = array.getJSONObject(0).getString("baseTime");
            int nx = array.getJSONObject(0).getInt("nx");
            int ny = array.getJSONObject(0).getInt("ny");
            String category = array.getJSONObject(0).getString("category");

            System.out.println(baseDate);
            System.out.println(baseTime);
            System.out.println(nx);
            System.out.println(ny);
            System.out.println(category);


            rd.close();
            conn.disconnect();
            System.out.println(sb.toString());

            return null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
