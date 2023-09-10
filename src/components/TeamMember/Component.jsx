import './Styles.css';

function TeamMember(props) {
  return (
    <div className="TeamMember-container">
      <div className="TeamMember-content">
        <h3 className="TeamMember-name">{props.name}</h3>
        <p className="TeamMember-study">CMD</p>
        <img className="TeamMember-image" src={"/images/" + props.name + ".png"} alt="Team member" />
      </div>
    </div>
  );
}

export default TeamMember;
