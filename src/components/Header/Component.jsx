import styles from './Styles.module.css';

function Header() {
  return (
    <header class={styles.header}>
      <img src="/images/logo.svg" class={styles.logo} alt="logo" />
    </header>
  );
}

export default Header;
