import React from "react";
import { Parallax } from "rc-scroll-anim";
import { Button } from "antd";
import "./ParallaxImage.css";

interface Props {
  imageUrl: string;
  buttonText: string;
}

const ParallaxImage: React.FC<Props> = ({ imageUrl, buttonText }) => {
  return (
    <div className="parallax-container">
      <Parallax
        animation={{ translateY: "-50%" }}
        style={{ transform: "translateY(50%)" }}
      >
        <div className="parallax-content">
          <h2>Parallax Image Component</h2>
          <p>
            This is a parallax image component created using Ant Design and RC
            Scroll Anim.
          </p>
          <Button type="primary">{buttonText}</Button>
        </div>
      </Parallax>
      <div
        className="parallax-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
};

export default ParallaxImage;
