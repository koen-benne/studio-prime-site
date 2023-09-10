import './Styles.css';


function Footer() {
  return (
    <div className="Footer-container">
      <img src="/images/logo-white.svg" className="Footer-logo" alt="logo" />
      <div className="Footer-text-container">
        <div className="Footer-copyright">© 2023 Studio Prime (Minor IUXD 23/24)</div>
        <a className= "Footer-bronnenlijst">Bronnenlijst</a>
      </div>
    </div>
  );
}

export default Footer;

