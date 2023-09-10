import './Styles.css';

function ImageWithText() {
  return (
    <div className="ImageWithText-container">
      <img src="/images/Image1.png" className="ImageWithText-image" alt="foto" />
      <div className="ImageWithText-text-container">
        <h2 className="ImageWithText-title">About us</h2>
        <p className="ImageWithText-text">Eerst waren we Team 13, een priemgetal, en noemden onszelf Team Prime. Toen werden we Team 12, maar besefte dat we nog steeds in onze prime waren. Gedreven door onze passie voor toegankelijkheid, met leden uit verschillende achtergronden (CMD en CMGT) die samenwerken voor innovatie zonder een verleden, en een sterke focus op de toekomst.
        
        Onze missie is duidelijk: bevorder inclusie. Onze waarden zijn diversiteit en openheid, en onze Unique Selling Points zijn expertise en toewijding aan inclusie. Bij Studio Prime streven we vastberaden naar een inclusieve wereld met gelijke kansen en toegankelijkheid voor iedereen.</p>
      </div>
    </div>
  );
}

export default ImageWithText;
