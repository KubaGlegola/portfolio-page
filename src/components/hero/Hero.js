import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        <span>Cześć! Jestem Kuba</span>
        <span>Junior front-end developer</span>
      </h1>
    </div>
  );
};

export default Hero;
