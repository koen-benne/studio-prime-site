import Front from './components/Front/Component';
import Footer from './components/Footer/Component';
import ImageWithText from './components/ImageWithText/Component';
import TeamSection from './components/TeamSection/Component';
import Deliverables from './components/Deliverables/Component';
import Header from './components/Header/Component';
import styles from './App.module.css';
import './fonts.module.css';

function App() {
  return (
    <div class={styles.App}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
        />

      <Header />
      <Front />
      <div class={styles.content}>
        <ImageWithText />
        <TeamSection />
        <Deliverables />
      </div>
      <Footer />
    </div>
  );
}

export default App;

