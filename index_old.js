//const express = require('express')   babel 을 통해 ES6 문법으로 작성가능 
import express from "express";
import morgan from "morgan"; //logging
import helmet from "helmet"; //nodejs 의 보안을 강화 시켜줌
import bodyParser from "body-parser"; // 바디에 존재하는 것 읽기 위해서 사용
import cookieParser from "cookie-parser"; // 쿠키 세션 관리

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Server is listing ${PORT} port`);

const handleHome = (req, res) => res.send("Hello form home");

const handelProfile = (req, res) => res.send("You are on my profile");

// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };
// app.use(betweenHome);    // app.use 로 글로벌하게 사용하며 순서가 중요 라우터 앞에 사용, 이하 코드에 미들웨어가 모두  적용

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome); // 라우터,  사용자가 root 로 들어오면  다음 함수를 실행
// app.get("/", betwwnHome, handleHome);   미들웨어를  옆 코드처럼 중간에 넣어 사용할 수도 있다

app.get("/profile", handelProfile);

app.listen(PORT, handleListening);
