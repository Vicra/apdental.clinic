import { Layout } from "antd";
import OurServices from "../components/OurServices/OurServices";
import YoutubeEmbed from "../components/YoutubeEmbed";

const Home: React.FC = () => {
  return (
    <>
      <Layout style={{ margin: "2rem", backgroundColor: "white" }}>
        <OurServices />
      </Layout>
      {/* <YoutubeEmbed /> */}
      {/* <Slider /> */}
    </>
  );
};

export default Home;
