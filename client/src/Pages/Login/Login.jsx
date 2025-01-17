import "./login.scss";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("전송 데이터:", { username, password }); // 디버깅용 로그
    try {
      await login({ username, password }); // ✅ 올바른 호출
      // console.log("로그인 요청 완료");
      navigate("/"); // ✅ 로그인 성공 시
    } catch (error) {
      console.error("로그인 실패:", error.message);
    }
  };

  return (
    <div className="login">
      <Box className="input">
        <h1 className="title">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            name="id"
            label="사번"
            placeholder="사번을 입력하세요."
            variant="outlined"
            fullWidth
            required
            /// 추가항목
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <TextField
            name="password"
            label="비밀번호"
            placeholder="i-net 비밀번호를 입력하세요."
            type="password"
            variant="outlined"
            fullWidth
            required
            /// 추가항목
            autoComplete="password" // 경고가 발생해서 추가했음
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Login;
