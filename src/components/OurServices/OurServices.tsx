import { Card, Row, Col, Button } from "antd";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

interface Service {
  title: string;
  img: JSX.Element;
  description: string;
  moreInfo?: string;
}

const services: Service[] = [
  {
    title: "Limpieza con Ultrasonido",
    img: <img src="/services/cleaning.jpeg" alt="" />,
    description:
      "Elimina la placa y el sarro de los dientes y las encías. Eliminar manchas, mantener la salud bucal y prevenir enfermedades dentales. ",
  },
  {
    title: "Blanqueamiento dental",
    img: <img src="/services/blanqueamiento.jpeg" alt="" />,
    description:
      "Procedimiento estético que se utiliza para aclarar el color de los dientes y mejorar su apariencia. Se realiza mediante la aplicación de un agente blanqueador, peróxido de hidrógeno.",
    moreInfo: `El blanqueamiento dental es un procedimiento estético que se utiliza para aclarar el color de los dientes y mejorar su apariencia. Se realiza mediante la aplicación de un agente blanqueador, generalmente peróxido de hidrógeno o carbamida, que actúa sobre las manchas y la decoloración en la superficie del esmalte dental.
    Existen diferentes métodos de blanqueamiento dental, incluyendo el blanqueamiento en consultorio, que se realiza en la oficina del dentista y utiliza una luz especial para activar el agente blanqueador, y el blanqueamiento en el hogar, que se lleva a cabo con una bandeja dental personalizada y un gel blanqueador.
    Es importante tener en cuenta que el blanqueamiento dental no es un procedimiento permanente y puede requerir retoques periódicos para mantener los resultados. Además, no es adecuado para todas las personas y puede causar sensibilidad dental en algunos casos. Por lo tanto, es recomendable consultar con un dentista antes de someterse a cualquier procedimiento de blanqueamiento dental.`,
  },
  {
    title: "Tratamiento de Caries",
    img: <img src="/services/caries.png" alt="" />,
    description:
      "Eliminar la caries o la cavidad en el diente y restaurar la estructura dental afectada. Es importante tratar las caries de manera temprana para evitar la progresión y posibles complicaciones, como infecciones o pérdida dental.",
  },
  {
    title: "Diseño de sonrisa",
    img: <img src="/services/disenio.jpeg" alt="" />,
    description:
      "El objetivo es lograr una sonrisa más atractiva y armoniosa, que se adapte a las características faciales y personales de cada individuo.",
    moreInfo:
      "La colocación de carillas o coronas dentales para mejorar la forma y el tamaño de los dientes, y la reconstrucción de la sonrisa completa mediante prótesis dentales.",
  },
  {
    title: "Protesis",
    img: <img src="/services/protesis.jpeg" alt="" />,
    description:
      "Las prótesis dentales pueden ser removibles o fijas y se utilizan para reemplazar uno o varios dientes o para restaurar la dentadura completa.",
  },
  {
    title: "Extracciones",
    img: <img src="/services/extracciones.jpeg" alt="" />,
    description:
      "Caries avanzada, la enfermedad periodontal, la fractura del diente, la falta de espacio para la dentición adecuada o la necesidad de una extracción previa al tratamiento ortodóntico.",
  },
];

const AnimatedCard = animated(Card);

const OurServices: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.9, triggerOnce: true });

  return (
    <div style={{}}>
      <h2 style={{ textAlign: "center" }}>Servicios</h2>
      <Row gutter={[32, 32]}>
        {services.map((service: Service) => (
          <Col xs={24} sm={12} md={8} key={service.title} ref={ref}>
            <AnimatedCard
              hoverable
              cover={service.img}
              title={service.title}
              bordered={false}
            >
              <Card.Meta description={service.description} />
              {/* <Button type="link">Mas Información</Button> */}
            </AnimatedCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurServices;
