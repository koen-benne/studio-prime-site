import styles from './Styles.module.css'; // Import the CSS module

function ImageWithText() {
  return (
    <div class={styles.container}> {/* Use class without "ImageWithText-" prefix */}
      <img src="/images/Image1.png" class={styles.image} alt="foto" />
      <div class={styles.textContainer}> {/* Use brackets for hyphenated class name */}
        <h2 class={styles.title}>About us</h2>
        <p class={styles.text}>Eerst waren we Team 13, een priemgetal, en noemden onszelf Team Prime. Toen werden we Team 12, maar besefte dat we nog steeds in onze prime waren. Gedreven door onze passie voor toegankelijkheid, met leden uit verschillende achtergronden (CMD en CMGT) die samenwerken voor innovatie zonder een verleden, en een sterke focus op de toekomst.

        Onze missie is duidelijk: bevorder inclusie. Onze waarden zijn diversiteit en openheid, en onze Unique Selling Points zijn expertise en toewijding aan inclusie. Bij Studio Prime streven we vastberaden naar een inclusieve wereld met gelijke kansen en toegankelijkheid voor iedereen.</p>
      </div>
    </div>
  );
}

export default ImageWithText;
