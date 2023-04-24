import React, { useEffect, useState } from "react";
// import { HomeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
    {
        label: (
            <a href="/">
                <img
                    src="./logo/logo_transparent_black.png"
                    alt=""
                    width={40}
                />
            </a>
        ),
        key: "/",
        // icon: <HomeOutlined />,
    },
    // {
    //   label: <a href="/about">Quienes Somos</a>,
    //   key: "/about",
    // },
    // {
    //   label: <a href="/contact">Contacto</a>,
    //   key: "/contact",
    // },
];

const TopMenu: React.FC<{ isInline?: boolean }> = ({ isInline = false }) => {
    const [current, setCurrent] = useState(window.location.pathname);

    useEffect(() => {
        if (current !== window.location.pathname)
            setCurrent(window.location.pathname);
    }, [current]);

    const onClick: MenuProps["onClick"] = (e) => {
        console.log(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode={isInline ? "inline" : "horizontal"}
            items={items}
        />
    );
};

export default TopMenu;
