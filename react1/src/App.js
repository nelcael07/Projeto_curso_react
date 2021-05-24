import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Modal from './components/Modal'
function App() {

  const [ModalVisible, setModalVisible] = useState(false);

  function handleBottonClick() {
    setModalVisible(true);
  }
  return (
    <>
      {/* botão que apresenta o modal na tela */}
      <butto onClick={handleBottonClick}>Abrir Modal</butto>
      <Modal visible={ModalVisible} setVisible={setModalVisible}>
          <h1>testando 1,2,3</h1>
          <h1>teste sendo realizado</h1>
      </Modal>    
    </>  
  );
}
export default App;
