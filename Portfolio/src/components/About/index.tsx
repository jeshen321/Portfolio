import s from "./index.module.scss";
const AboutSection: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "60%",
          padding: "20px",
        }}
      >
        <h1 className={s.WhoIAm}>Who I am</h1>
        <h5 className={s.definition}>
          A passionate and results-driven Front-End Developer with a
          comprehensive understanding of modern web technologies, including
          HTML, CSS, JavaScript, React, and TypeScript. Skilled in crafting
          responsive, user-friendly interfaces that prioritize both
          functionality and aesthetics. Proficient in version control using Git
          and experienced in UI design, particularly with Ant Design, to create
          visually appealing and consistent user experiences.
        </h5>
        <h5 className={s.definition}>
          Adept at collaborating with cross-functional teams to bring creative
          concepts to life, while maintaining a strong focus on performance and
          scalability. Known for writing clean, efficient, and maintainable
          code, and consistently delivering high-quality results on time, even
          under tight deadlines. Committed to continuous learning and staying
          up-to-date with the latest industry trends to enhance development
          practices and push the boundaries of web design and functionality.
        </h5>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "40%",
          padding: "20px",
        }}
      >
        <img src="src/assets/me1.png" className={s.image} />
      </div>
    </div>
  );
};

export default AboutSection;
