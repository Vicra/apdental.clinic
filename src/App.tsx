import "./App.css";
import React, { useState } from "react";
import { Layout, Space, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import TopMenu from "./common/TopMenu/TopMenu";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <div
          style={{ height: 60, paddingLeft: 12, paddingTop: 12 }}
          className="sideMenu"
        >
          <MenuOutlined
            style={{ color: "black", fontSize: 30 }}
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </div>
        <span className="headerMenu">
          <TopMenu />
        </span>
        <Drawer
          placement="left"
          open={openMenu}
          closable={false}
          onClose={() => {
            setOpenMenu(false);
          }}
        >
          <TopMenu isInline={true} />
          {/* router */}
        </Drawer>
      </Layout>
      <Layout>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter> */}
      </Layout>
    </Space>
  );
};

export default App;
