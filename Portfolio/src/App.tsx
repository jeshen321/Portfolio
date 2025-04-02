import { UpOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import HeroSection from "./components/Home";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/Projects";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const [isButtonFixed, setIsButtonFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= scrollHeight - 50) {
        setIsButtonFixed(true);
      } else {
        setIsButtonFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <NavBar />
      <Content style={{ padding: "0 50px" }}>
        <section
          id="hero"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <HeroSection />
        </section>

        <hr />

        <section
          id="about"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AboutSection />
        </section>

        <hr />

        <section
          id="projects"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            background: "#9E339F",
          }}
        >
          <ProjectSection />
        </section>

        <hr />

        <section
          id="contact"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ContactSection />
        </section>
      </Content>

      <div style={{ position: "relative" }}>
        <Link to="hero" smooth={true} duration={500} activeClass="active">
          <Button
            icon={<UpOutlined />}
            size="large"
            style={{
              position: isButtonFixed ? "fixed" : "absolute",
              bottom: isButtonFixed ? "20px" : "20px",
              right: "20px",
              color: "#9E339F",
              backgroundColor: "#f5f5f5",
              borderRadius: "50%",
              boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.5)",
              zIndex: 9999,
            }}
          />
        </Link>
      </div>

      <Footer style={{ textAlign: "center", backgroundColor: "#9e339f" }}>
        Jessa Concepcion ©{new Date().getFullYear()}
        <div
          style={{
            display: "flex",
            gap: "50px",
            marginTop: "15px",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.linkedin.com/in/jessa-concepcion-64b184284"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaLinkedin
              style={{
                fontSize: "30px",
                color: " #fff",
                transition: "color 0.3s;",
              }}
            />
          </a>
          <a
            href="https://github.com/jeshen321"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaGithub
              style={{
                fontSize: "30px",
                color: " #fff",
                transition: "color 0.3s;",
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/_jeshen"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaInstagram
              style={{
                fontSize: "30px",
                color: " #fff",
                transition: "color 0.3s;",
              }}
            />
          </a>
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
