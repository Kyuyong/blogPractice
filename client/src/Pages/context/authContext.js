import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );

  const login = async ({ username, password }) => {
    try {
      // 로그인 요청
      const response = await axios.post("http://localhost:3001/api/login", {
        username,
        password,
      });
      const { data } = response;

      if (data.success && data.data.authUserValue === "Y") {
        // 로그인 성공
        const userDetails = {};
        data.data.keyValuePairs.forEach((pair) => {
          switch (pair[0]) {
            case "USER_ID":
              userDetails.userId = pair[1];
              break;
            case "Name":
              userDetails.name = pair[1];
              break;
            case "PrntDeptName":
              userDetails.prntDeptName = pair[1];
              break;
            case "DeptName":
              userDetails.deptName = pair[1];
              break;
            default:
              break;
          }
        });

        // 사용자 데이터 설정
        setCurrentUser(userDetails);
        sessionStorage.setItem("user", JSON.stringify(userDetails));

        console.log("로그인 성공 : ", response.data);
      } else {
        console.error("로그인 인증 실패");
        throw new Error("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 처리 중 오류 발생:", error);
      throw error; // 에러를 상위 호출자로 전달
    }
  };

  const logout = () => {
    try {
      setCurrentUser(null);
      sessionStorage.removeItem("user");
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
