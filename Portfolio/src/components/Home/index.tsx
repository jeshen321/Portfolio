import s from "./index.module.scss";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <div className={s.hero}>
      <div className={s.HeroLeft}>
        <img src="src/assets/me.jpg" className={s.image} />
      </div>
      <div className={s.HeroRight}>
        <p className={s.name}>
          Hi, I am <strong>Jesh</strong>!
        </p>
        <p className={s.title}>Frontend Developer</p>
        <h4 className={s.tagline}>
          Delivering seamless digital experiences with modern front-end
          technologies.
        </h4>

        <div className={s.socialIcons}>
          <a
            href="https://www.linkedin.com/in/jessa-concepcion-64b184284"
            target="_blank"
            rel="noopener noreferrer"
            className={s.iconLink}
          >
            <FaLinkedin className={s.icon} />
          </a>
          <a
            href="https://github.com/jeshen321"
            target="_blank"
            rel="noopener noreferrer"
            className={s.iconLink}
          >
            <FaGithub className={s.icon} />
          </a>
          <a
            href="https://www.instagram.com/_jeshen"
            target="_blank"
            rel="noopener noreferrer"
            className={s.iconLink}
          >
            <FaInstagram className={s.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
