import { Layout } from "antd";
import Banner from "../common/Banner";
import LocationMap from "../common/LocationMap/LocationMap";
import OurServices from "../components/OurServices/OurServices";
import YoutubeEmbed from "../components/YoutubeEmbed";

const Home: React.FC = () => {
    return (
        <>
            <Layout style={{ margin: "2rem", backgroundColor: "white" }}>
                <Banner imageUrl="/services/banner.png" />
                <br />
                <OurServices />
                <LocationMap latitude={15.5024} longitude={-88.040876} />
            </Layout>
            {/* <YoutubeEmbed /> */}
            {/* <Slider /> */}
        </>
    );
};

export default Home;
