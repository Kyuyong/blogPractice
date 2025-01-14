import "./main.scss";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="mainNavbar">
          <div className="logo">LOGO</div>
          <div className="controls">
            <Link>Menu 01</Link>
            <Link>Menu 02</Link>
          </div>
        </div>
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
