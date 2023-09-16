import styles from './Styles.module.css';

function TeamMember(props) {
  return (
    <div class={styles.container}>
      <div class={styles.content}>
        <div class={styles.textContainer}>
          <h3 class={styles.name}>{props.name}</h3>
          <p class={styles.study}>{props.course}</p>
        </div>
        <img class={styles.image} src={"/images/" + props.name + ".png"} alt="Team member" />
      </div>
    </div>
  );
}

export default TeamMember;
