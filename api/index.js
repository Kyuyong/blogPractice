import express from "express";
import cors from "cors";

import { loginOpark } from "./opark.js";

const app = express();

// CORS 설정 추가
app.use(
  cors({
    origin: "http://localhost:3000", // 클라이언트 도메인 허용
    methods: ["GET", "POST"], // 허용할 HTTP 메서드
    credentials: true, // 쿠키 허용 (필요한 경우)
  })
);

app.use(express.json());

// 기본 라우트 설정
app.get("/", (req, res) => {
  res.send("API 서버가 실행 중입니다!");
});

app.post("/api/login", async (req, res) => {
  console.log("요청 본문 데이터:", req.body);
  const { username, password } = req.body;

  console.log(`로그인 시도: ${username}`);

  try {
    // 로그인 인증 로직
    const loginResult = await loginOpark(username, password);

    if (loginResult.success && loginResult.authUserValue === "Y") {
      // 로그인 성공
      console.log(`로그인 성공: ${username}`);
      return res
        .status(200)
        .json({ success: true, message: "로그인 성공", data: loginResult });
    } else {
      // 로그인 실패
      console.log(`로그인 실패: ${username}`);
      return res
        .status(401)
        .json({ success: false, message: "로그인 인증 실패" });
    }
  } catch (error) {
    // 로그인 처리 중 에러
    console.error(`로그인 처리 중 에러: ${error.message}`);
    return res
      .status(500)
      .json({ success: false, message: "로그인 실패", error: error.message });
  }
});

// 서버 시작
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`서버 ${PORT}번 포트에서 실행 중입니다!`);
});
