import styles from './Styles.module.css';
import Modal from '../Modal/Component';
import { createSignal } from 'solid-js';

function Deliverables() {
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  return (
    <>
      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}/>
      <h2 class={styles.title}>Deliverables</h2>
      <div class={styles.container}>
        <div class={styles.subcontainer}>
          <a onClick={() => setIsModalOpen(true)} class={`${styles.item} ${styles.styleguideButton}`}>
            <img src="/images/styleguide.svg" class={styles.styleguideImage} alt="Styleguide image" />
          </a>
          <div class={styles.item}></div>
        </div>
        <div class={styles.subcontainer}>
          <div class={styles.item}></div>
          <div class={styles.item}></div>
        </div>
      </div>
    </>
  );
}

export default Deliverables;
