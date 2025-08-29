DROP DATABASE IF EXISTS moveon;
CREATE DATABASE moveon;
USE moveon;

CREATE TABLE Criminal(
cNo     INT AUTO_INCREMENT,                    -- 성범죄자번호 (기본키)
cName     VARCHAR(50) NOT NULL ,           -- 성범죄자이름
cAddress    VARCHAR(100) NOT NULL,        -- 성범죄자 실제거주지
cAddress2   varchar(100) not null,                 --  성범죄자 등본주소
cDay datetime default now(),					-- 정보 등록일
CONSTRAINT PRIMARY KEY (cNo)
);

create table trash(
tNo int auto_increment,        -- 쓰레기 배출 정보 번호
tCity varchar(50) not null , -- 배출지역시
tGu varchar(50) not null , -- 배출지역구
tInfo longtext ,  -- 배출 정보
tDay datetime default now(), -- 정보 등록일
constraint primary key (tNo)
);

insert into trash(tCity,tGu, tInfo) values ('인천광역시' , '부평구' , '정보'),('인천광역시' , '연수구' , '정보');


INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('강두환', '인천광역시 연수구 함박안로134번길 7-14 (연수동)', '인천광역시 연수구 함박안로134번길 7-14 (연수동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('김지훈', '인천광역시 연수구 비류대로437번길 15 (연수동)', '인천광역시 연수구 비류대로437번길 15 (연수동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('노광욱', '인천광역시 연수구 솔샘로 77-3 (청학동)', '인천광역시 연수구 솔샘로 77-3 (청학동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('맹순도', '인천광역시 연수구 청학로28번길 19 (청학동)', '인천광역시 연수구 청학로28번길 19 (청학동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('서복환', '인천광역시 연수구 함박로35번길 20-11 (연수동)', '인천광역시 연수구 함박로35번길 20-11 (연수동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('윤재일', '인천광역시 연수구 함박로25번길 16 (연수동)', '인천광역시 연수구 함박로25번길 16 (연수동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('이강복', '인천광역시 연수구 청학로12번길 13 (청학동)', '인천광역시 연수구 청학로12번길 13 (청학동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('이종환', '인천광역시 연수구 비류대로529번길 23 (선학동)', '인천광역시 연수구 비류대로529번길 23 (선학동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('이형만', '인천광역시 연수구 새말로 134 (연수동)', '인천광역시 연수구 새말로 134 (연수동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('장명직', '인천광역시 연수구 청학로12번길 34-6 (청학동)', '인천광역시 연수구 청학로12번길 34-6 (청학동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('주만성', '인천광역시 연수구 독배로90번길 14 (옥련동)', '인천광역시 연수구 독배로90번길 14 (옥련동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('최순일', '인천광역시 연수구 먼우금로 194 (연수동)', '인천광역시 연수구 먼우금로 194 (연수동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('최효민', '인천광역시 연수구 랜드마크로 113 (송도동)', '인천광역시 계양구 경명대로1029번길 5-13 (계산동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('황춘선', '인천광역시 연수구 함박뫼로4번길 13-7 (청학동)', '인천광역시 연수구 함박뫼로4번길 13-7 (청학동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('강정우', '인천광역시 부평구 동수북로120번길 18 (부평동)', '인천광역시 부평구 동수북로120번길 18 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('금용주', '인천광역시 부평구 경인로 1051-3 (부개동)', '인천광역시 부평구 경인로 1051-3 (부개동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('김동근', '인천광역시 부평구 수변로 8 (부개동)', '인천광역시 부평구 수변로 8 (부개동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('김명중', '인천광역시 부평구 부평대로 153 (부평동)', '인천광역시 부평구 부평대로 153 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('김원국', '인천광역시 부평구 대정로 37 (부평동)', '인천광역시 부평구 대정로 37 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('김윤동', '인천광역시 부평구 경인로1009번길 24 (부개동)', '인천광역시 부평구 경인로1009번길 24 (부개동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('김재인', '인천광역시 부평구 아트센터로74번길 11 (십정동)', '인천광역시 부평구 아트센터로74번길 11 (십정동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('김준현', '인천광역시 부평구 경원대로 1425-1 (부평동)', '인천광역시 부평구 경원대로 1425-1 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('마하무드칸', '인천광역시 부평구 마장로13번길 16 (십정동)', '인천광역시 부평구 마장로13번길 16 (십정동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('문성현', '인천광역시 부평구 부흥로303번길 18-3 (부평동)', '인천광역시 부평구 부흥로303번길 18-3 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('박영웅', '인천광역시 부평구 체육관로 111 (삼산동)', '인천광역시 부평구 체육관로 111 (삼산동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('박헌복', '인천광역시 부평구 동수북로60번길 32 (부평동)', '인천광역시 부평구 동수북로60번길 32 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('백운삼', '인천광역시 부평구 대정로 32 (부평동)', '인천광역시 부평구 대정로 32 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('손인랑', '인천광역시 부평구 동암광장로14번길 7 (십정동)', '인천광역시 부평구 동암광장로14번길 7 (십정동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('오동훈', '인천광역시 부평구 부평문화로115번길 17-8 (부평동)', '인천광역시 부평구 부평문화로115번길 17-8 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('이상욱', '인천광역시 부평구 안남로409번길 35 (청천동)', '인천광역시 부평구 안남로409번길 35 (청천동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('이석호', '인천광역시 부평구 부흥로333번길 8 (부평동)', '인천광역시 부평구 부흥로333번길 8 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('이승열', '인천광역시 부평구 배곶로 4 (십정동)', '인천광역시 부평구 배곶로 4 (십정동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('이용문', '인천광역시 부평구 부영로4번길 31-9 (부평동)', '인천광역시 부평구 부영로4번길 31-9 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('이종훈', '인천광역시 부평구 동수북로120번길 18 (부평동)', '인천광역시 부평구 동수북로120번길 18 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('이충희', '인천광역시 부평구 경인로1002번길 10-6 (부평동)', '인천광역시 부평구 경인로1002번길 10-6 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('임형수', '인천광역시 부평구 길주남로113번길 12 (부개동)', '인천광역시 부평구 길주남로113번길 12 (부개동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('정시온', '인천광역시 부평구 부평문화로39번길 42 (부평동)', '인천광역시 부평구 부평문화로39번길 42 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('조현우', '인천광역시 부평구 부흥로 249-16 (부평동)', '인천광역시 부평구 부흥로 249-16 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('주상훈', '인천광역시 부평구 경인로834번길 14-6 (부평동)', '인천광역시 부평구 경인로834번길 14-6 (부평동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('최용운', '인천광역시 부평구 백범로456번길 10-8 (십정동)', '인천광역시 부평구 백범로456번길 10-8 (십정동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('현영환', '인천광역시 부평구 동암광장로8번길 8 (십정동)', '인천광역시 부평구 동암광장로8번길 8 (십정동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('홍성오', '인천광역시 부평구 화랑로105번길 25 (산곡동)', '인천광역시 부평구 화랑로105번길 25 (산곡동)');
INSERT INTO Criminal (cName, cAddress, cAddress2) VALUES ('황유진', '인천광역시 부평구 장제로195번길 33 (부평동)', '인천광역시 부평구 장제로195번길 33 (부평동)');



select * from trash;
select * from criminal;