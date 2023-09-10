import Front from './components/Front/Component';
import Footer from './components/Footer/Component';
import ImageWithText from './components/ImageWithText/Component';
import TeamSection from './components/TeamSection/Component';
import Deliverables from './components/Deliverables/Component';
import './App.css';
import './fonts.css';

function App() {
  return (
    <div className="App">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
        />

      <header className="App-header">
        <img src="/src/assets/images/logo.svg" className="App-logo" alt="logo" />
      </header>
      <Front />
      <div className="content">
        <ImageWithText />
        <TeamSection />
        <Deliverables />
      </div>
      <Footer />
    </div>
  );
}

export default App;

