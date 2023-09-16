import styles from './Styles.module.css'; // Import the CSS module

function Front() {
  return (
    <div class={styles.container}>
      <h1 class={styles.title}>Making the future accessible</h1>
      <p class={styles.text}>Wij hebben gevarieerde expertise en een toewijding aan inclusie. Bij Studio Prime zijn we vastbesloten om een inclusieve en toegankelijke wereld te bouwen, waar iedereen gelijke kansen heeft.</p>
      <img src="/images/crown.svg" class={styles.crown} alt="crown" />
    </div>
  );
}

export default Front;
