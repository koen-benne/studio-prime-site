import styles from './Styles.module.css';

function Modal({ isOpen, close }) {
  return (
    <div class={styles.container} onClick={close} style={{ display: isOpen() ? "flex" : "none" }}>
      <div class={styles.content} onclick={(e) => e.stopPropagation()}>
        <img src="/images/styleguide-doc.png" alt="styleguide" class={styles.image} />
        <a class={styles.closeButton} onClick={close}>X</a>
      </div>
    </div>
  );
}

export default Modal;
