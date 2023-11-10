import { useRef, useEffect } from 'react'
import styles from './Modal.module.css'
import { useModal } from '../../../../Context/Context'
function ModalContent() {
  const {modalTitle, closeModal, showModal, modalContent } = useModal()

  const modalRef = useRef();
  


  useEffect(() => {
    if(showModal){
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      modalRef.current.style.backgroundColor = 'white';
    }else{
      document.body.style.overflow = 'unset';
      document.body.style.backgroundColor = '';

    }
  })


  return showModal &&  (
    <div ref={modalRef} className={styles.modal}>
      <div className={styles.modal__content}>
        <h2>{modalTitle}</h2>
        <p>{modalContent}</p>
        <button onClick={closeModal}>&times;</button>
      </div>
    </div>
  )
}
export default ModalContent