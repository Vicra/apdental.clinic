import React from "react";
import { Button, Result } from "antd";

const App: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Lo sentimos, esta página no existe."
    extra={<Button type="primary">Regresa al inicio</Button>}
  />
);

export default App;
