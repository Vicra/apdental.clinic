import { Card, Row, Col } from "antd";
import {
  RocketOutlined,
  AntDesignOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

interface Service {
  title: string;
  icon: JSX.Element;
  description: string;
}

const services: Service[] = [
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

const AnimatedCard = animated(Card);

const OurServices: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.9, triggerOnce: true });
  const fade = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(0)",
  });

  return (
    <div style={{ padding: "50px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
        Our Services
      </h2>
      <Row gutter={[32, 32]}>
        {services.map((service: Service) => (
          <Col xs={24} sm={12} md={8} key={service.title} ref={ref}>
            <AnimatedCard
              hoverable
              cover={service.icon}
              title={service.title}
              bordered={false}
              style={fade}
            >
              <Card.Meta description={service.description} />
            </AnimatedCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurServices;
