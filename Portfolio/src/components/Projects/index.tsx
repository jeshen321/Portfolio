import s from "./index.module.scss";
const ProjectSection: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div className="wrapper">
        <div className={s.item}>
          <div className={s.polaroid}>
            <img src="src/assets/me.jpg" />
            <div className={s.caption}>jeshen_</div>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.polaroid}>
            <img src="src/assets/me.jpg" />
            <div className={s.caption}>jeshen_</div>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.polaroid}>
            <img src="src/assets/me.jpg" />
            <div className={s.caption}>jeshen_</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
