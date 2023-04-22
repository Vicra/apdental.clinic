import React from "react";
import { Layout } from "antd";

interface Props {
  imageUrl: string;
}

const { Header } = Layout;

const Banner: React.FC<Props> = ({ imageUrl }) => {
  return (
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
  );
};

export default Banner;
