import { Layout, Row, Col, Typography, Divider } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text } = Typography;

const DentalFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#f8f8f8" }}>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "45vh" }}
      >
        <div style={{ flex: 1 }}>
          <Row justify="space-around">
            <Col xs={24} sm={8} md={6}>
              <div style={{ textAlign: "center" }}>
                <img
                  src="/logo.png"
                  alt="Dental Logo"
                  style={{ height: "50px" }}
                />
                <Divider />
                <Text strong>Our Address</Text>
                <br />
                <Text>
                  <EnvironmentOutlined /> 123 Main St. Anytown, USA 12345
                </Text>
              </div>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <div style={{ textAlign: "center" }}>
                <Text strong>Office Hours</Text>
                <br />
                <Text>Mon - Fri: 9am - 5pm</Text>
                <br />
                <Text>Sat - Sun: Closed</Text>
              </div>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <div style={{ textAlign: "center" }}>
                <Text strong>Contact Us</Text>
                <br />
                <Text>
                  <PhoneOutlined /> (123) 456-7890
                </Text>
                <br />
                <Text>
                  <MailOutlined /> info@dentalwebsite.com
                </Text>
              </div>
            </Col>
          </Row>
          <Divider style={{ margin: "20px 0" }} />
        </div>
        {/* <div style={{ flexShrink: 0 }}> */}
        <div style={{ textAlign: "center" }}>
          <Text>&copy; 2023 Dental Website. All rights reserved.</Text>
        </div>
        {/* </div> */}
      </div>
    </Footer>
  );
};

export default DentalFooter;
