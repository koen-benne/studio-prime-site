import './Styles.css';
import Modal from '../Modal/Component';
import { createSignal } from 'solid-js';

function Deliverables() {
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  return (
    <>
      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}/>
      <h2 className="Deliverables-title">Deliverables</h2>
      <div className="Deliverables-container">
        <div className="Deliverables-subcontainer">
          <a onClick={() => setIsModalOpen(true)} className="Deliverables-item Deliverables-styleguide-button">
            <img src="/src/assets/images/styleguide.svg" className="Deliverables-styleguide-image" alt="Styleguide image" />
          </a>
          <div className="Deliverables-item"></div>
        </div>
        <div className="Deliverables-subcontainer">
          <div className="Deliverables-item"></div>
          <div className="Deliverables-item"></div>
        </div>
      </div>
    </>
  );
}

export default Deliverables;
