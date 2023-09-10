import './Styles.css';

function Modal({ isOpen, close }) {
  return (
    <div className="Modal-container" onClick={close} style={{ display: isOpen() ? "flex" : "none" }}>
      <div className="Modal-content" onclick={(e) => e.stopPropagation()}>
        <img src="/src/assets/images/styleguide-doc.png" alt="styleguide" className="Modal-image" />
        <a className="Modal-close-button" onClick={close}>X</a>
      </div>
    </div>
  );
}

export default Modal;
