import React from "react";
import { Col, Row, Button } from "antd";
import YoutubeEmbed from "./YoutubeEmbed";

const App: React.FC = () => (
  <>
    <Row>
      <Col span={10}>
        <h1>Titulo principal</h1>
        <h1>Titulo secundario mas largo</h1>
        <Button>Agenda</Button>
      </Col>
      <Col span={14}>
        <YoutubeEmbed />
      </Col>
    </Row>
  </>
);

export default App;
