import { Layout } from "antd";
import ContactForm from "../common/ContactForm";

const Contact: React.FC = () => {
  return (
    <>
      <Layout style={{ margin: "2rem", backgroundColor: "white" }}>
        <h1>Ponte en Contacto</h1>
        <ContactForm />
      </Layout>
    </>
  );
};

export default Contact;
