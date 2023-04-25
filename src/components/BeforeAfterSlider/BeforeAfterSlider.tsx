// import "./BeforeAfterSlider.scss";

const BeforeAfterSlider = () => {
  return (
    <>
      <div className="container">
        <div className="img background-img"></div>
        <div className="img foreground-img"></div>
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          className="slider"
          name="slider"
          id="slider"
        ></input>
        <div className="slider-button"></div>
      </div>
    </>
  );
};

export default BeforeAfterSlider;
