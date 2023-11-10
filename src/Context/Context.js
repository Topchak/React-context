import { useContext, createContext,useState, useEffect } from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [showModal ,setShowModal] = useState(false);
  const [modalTitle , setModalTitle] = useState('');
  const [modalContent , setModalContent] = useState('');

useEffect(() => {
  setModalTitle('set Title from Context')
  setModalContent('set Content from Context')
  
}, [])


  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  return (
    <ModalContext.Provider value={{showModal, modalTitle, modalContent, openModal,closeModal}}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext);
}