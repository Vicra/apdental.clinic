import { Layout } from "antd";
import Banner from "../common/Banner";
import LocationMap from "../common/LocationMap/LocationMap";
import OurServices from "../components/OurServices";
// import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const Home: React.FC = () => {
  // const FIRST_IMAGE = {
  //   imageUrl: "/beforeNafter/blanqueamiento2.png",
  // };
  // const SECOND_IMAGE = {
  //   imageUrl: "/beforeNafter/blanqueamiento1.png",
  // };

  return (
    <>
      <Layout style={{ margin: "2rem", backgroundColor: "white" }}>
        <h1 style={{ display: "none" }}>Servicios</h1>
        <Banner imageUrl="/services/banner.png" />
        <br />
        <OurServices />
        <LocationMap latitude={15.5024} longitude={-88.040876} />

        <Layout
          style={{
            margin: "2rem",
            backgroundColor: "white",
            maxWidth: "500px",
          }}
        >
          {/* <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
            delimiterColor="black"
          /> */}
        </Layout>
      </Layout>
      {/* <YoutubeEmbed /> */}
    </>
  );
};

export default Home;
