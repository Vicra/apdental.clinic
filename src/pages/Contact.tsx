import { Layout } from "antd";
import ContactForm from "../common/ContactForm";
import LocationMap from "../common/LocationMap/LocationMap";

const Contact: React.FC = () => {
  return (
    <>
      <Layout
        style={{
          marginLeft: "2rem",
          marginRight: "2rem",
          marginBottom: "3em",
          backgroundColor: "white",
        }}
      >
        <h1>Ponte en Contacto</h1>
        <ContactForm />
        <LocationMap latitude={15.5024} longitude={-88.040876} />
      </Layout>
    </>
  );
};

export default Contact;
