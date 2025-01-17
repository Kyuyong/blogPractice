import "./main.scss";
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";

const Main = () => {
  // users 변수 선언
  const [users, setUsers] = useState([]);

  // user 불러오기 함수
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/getusers/getuser"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  // 컴포넌트가 처음 렌더링될 때 데이터를 가져옴
  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("DB에서 불러온 내가 처음만든 users : ", users);

  return (
    <div className="main">
      <div className="container">
        <Navbar />
      </div>

      <div className="mainContents">
        <div className="left">
          <h1>Welcome to the Show</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            beatae voluptatum, in illum voluptas ex ducimus debitis dolorum quae
            quisquam adipisci sed recusandae ipsum optio fuga soluta laudantium
            facere quod.
          </p>
        </div>
        <div className="right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            porro reiciendis quam earum, vero officia. Explicabo sint, fugiat
            iusto earum rem officiis expedita architecto sapiente laborum,
            perspiciatis porro obcaecati sed?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
