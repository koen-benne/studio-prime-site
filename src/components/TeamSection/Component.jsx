import './Styles.css';
import TeamMember from '../TeamMember/Component';

function TeamSection() {
  return (
    <>
      <h2 className="TeamSection-title">Meet the Team</h2>
        <div className="TeamSection-container">
          <div className="TeamSection-grid">
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
