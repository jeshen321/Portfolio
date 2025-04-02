import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import s from "./index.module.scss";

const { Header } = Layout;

const items = [
  { key: "1", label: "Home", to: "hero" },
  { key: "2", label: "About", to: "about" },
  { key: "3", label: "Projects", to: "projects" },
  { key: "4", label: "Contact", to: "contact" },
];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState("1");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    items.forEach((item) => {
      const section = document.getElementById(item.to);
      if (section) {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;
        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          setCurrent(item.key);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          zIndex: 100,
          backgroundColor: isScrolled ? "#9E339F" : "#BF94E4",
          transition: "background-color 0.3s ease",
          boxShadow: isScrolled ? "0 2px 5px rgba(0, 0, 0, 0.5)" : "none",
        }}
      >
        <div className="demo-logo">
          <img
            src="./src/assets/logo.png"
            alt="Logo"
            style={{ width: "50%", padding: "25px 0 0 0" }}
          />
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[current]}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: "flex-end",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          {items.map((item) => (
            <Menu.Item key={item.key}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                activeClass={s.active}
                onSetActive={() => setCurrent(item.key)}
              >
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </Layout>
  );
};

export default NavBar;
