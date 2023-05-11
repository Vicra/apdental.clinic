import { Layout, Row, Col, Typography, Divider } from "antd";
import {
  MailOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

import "./Footer.css";

const { Footer } = Layout;
const { Text } = Typography;

const DentalFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#f8f8f8" }}>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "10vh" }}
      >
        <div style={{ flex: 1 }}>
          <Row justify="space-around">
            <Col xs={24} sm={8} md={6} style={{ marginBottom: "10px" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  src="/logo/full_logo_transparent.png"
                  alt="company logo"
                  style={{ height: "150px" }}
                />
              </div>
            </Col>
            <Col>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Text>
                  <strong>Horario</strong>
                  <br />
                  Lunes - Domingo
                  <br />
                  8am - 5pm <br />
                  Atención con cita previa <br />
                  <a href="/schedule">Agenda una cita</a>
                  <br />
                  <br />
                  <EnvironmentOutlined /> 7 calle 20 avenida, Bo. Rio Piedras
                </Text>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Text>
                  <strong>Contáctanos</strong>
                  <br />
                  <a
                    href={`http://api.whatsapp.com/send?phone=+50495501103&text=Buenas`}
                  >
                    <WhatsAppOutlined /> (504) 9550-1103
                  </a>
                  <br />
                  <a href="mailto:apdentalclinichn@gmail.com">
                    <MailOutlined /> apdentalclinichn@gmail.com
                  </a>
                  <Divider />
                  <strong>Redes Sociales</strong>
                  <br />
                  <a href="https://www.instagram.com/apdentalclinic/">
                    <InstagramOutlined /> Instagram
                  </a>
                  <br />
                  <a href="https://www.facebook.com/profile.php?id=100092343660450">
                    <FacebookOutlined /> Facebook
                  </a>
                </Text>
              </div>
            </Col>
          </Row>
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Text>&copy; {new Date().getFullYear()} Guacamayan Software.</Text>
        </div>
      </div>
    </Footer>
  );
};

export default DentalFooter;
