import styles from './Styles.module.css'; // Import the CSS module

function Footer() {
  return (
    <div class={styles.container}>
      <img src="/images/logo-white.svg" class={styles.logo} alt="logo" />
      <div class={styles.textContainer}>
        <div class={styles.copyright}>© 2023 Studio Prime (Minor IUXD 23/24)</div>
        <a class={styles.bronnenlijst}>Bronnenlijst</a>
      </div>
    </div>
  );
}

export default Footer;
