import { Card, Row, Col } from "antd";
import {
  RocketOutlined,
  AntDesignOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const services = [
  {
    title: "Service 1",
    icon: <RocketOutlined />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sem et quam dictum euismod.",
  },
  {
    title: "Service 2",
    icon: <AntDesignOutlined />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sem et quam dictum euismod.",
  },
  {
    title: "Service 3",
    icon: <AppstoreOutlined />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sem et quam dictum euismod.",
  },
];

const OurServices = () => {
  return (
    <div style={{ padding: "50px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
        Our Services
      </h2>
      <Row gutter={[32, 32]}>
        {services.map((service) => (
          <Col xs={24} sm={12} md={8} key={service.title}>
            <Card
              hoverable
              cover={service.icon}
              title={service.title}
              bordered={false}
            >
              <Card.Meta description={service.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurServices;
