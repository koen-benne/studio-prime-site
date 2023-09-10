import './Styles.css';
import TeamMember from '../TeamMember/Component';

function TeamSection() {
  return (
    <>
      <h2 className="TeamSection-title">Meet the Team</h2>
        <div className="TeamSection-container">
          <div className="TeamSection-grid">
            <TeamMember name="Jorick" />
            <TeamMember name="Roy" />
            <TeamMember name="Danny" />
            <TeamMember name="Koen" />
          </div>
        </div>
    </>
  );
}

export default TeamSection;
