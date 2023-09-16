import styles from './Styles.module.css'; // Import the CSS module
import TeamMember from '../TeamMember/Component';

function TeamSection() {
  return (
    <>
      <h2 class={styles.title}>Meet the Team</h2>
      <div class={styles.container}>
        <div class={styles.grid}>
          <TeamMember name="Jorick" course="CMD" />
          <TeamMember name="Roy" course="CMD" />
          <TeamMember name="Danny" course="CMGT" />
          <TeamMember name="Koen" course="CMGT" />
        </div>
      </div>
    </>
  );
}

export default TeamSection;

