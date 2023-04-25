import React from "react";
import { Layout } from "antd";

import "./Banner.css";

interface Props {
  imageUrl: string;
}

const { Header } = Layout;

const Banner: React.FC<Props> = ({ imageUrl }) => {
  return (
    <>
      <div className="desktopBanner">
        <Header
          style={{
            background: `url(${imageUrl}) no-repeat center center`,
            backgroundSize: "cover",
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Header>
      </div>
      <img className="mobileBanner" src={imageUrl} alt="" />
    </>
  );
};

export default Banner;
