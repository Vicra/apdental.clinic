import { Layout } from "antd";
import Banner from "../common/Banner";
import OurServices from "../components/OurServices/OurServices";
import YoutubeEmbed from "../components/YoutubeEmbed";

const Home: React.FC = () => {
  return (
    <>
      <Layout style={{ margin: "2rem", backgroundColor: "white" }}>
        <Banner imageUrl="/services/banner.png" />
        <br />
        <OurServices />
      </Layout>
      {/* <YoutubeEmbed /> */}
      {/* <Slider /> */}
    </>
  );
};

export default Home;
