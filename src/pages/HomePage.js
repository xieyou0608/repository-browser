import React from "react";
import Search from "../components/Search";
import Populars from "../components/Populars";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Github Repository 查詢</h1>
      <p>請輸入想要查詢的 github 帳號</p>
      <Search />
      <Populars />
    </div>
  );
};

export default HomePage;
