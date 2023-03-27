import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const YouTubeVideo = () => {
  return (
    <Card bordered={false}>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          title="YouTube Video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/pKF_doN3Tz8"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div style={{ marginTop: 20, textAlign: "center" }}>
        <Title level={2}>Video Title</Title>
        <p>Video Description</p>
      </div>
    </Card>
  );
};

export default YouTubeVideo;
