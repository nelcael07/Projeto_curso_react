import React,{useState} from 'react';
import styled from 'styled-components'

const ModalBackground = styled.div`
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index: 90;
    background-color:rgba(0,0,0,0.7);
    display:flex;
    justify-content:center;
    aling-items:center
`;
const ModalArea = styled.div`
    background-color: white;
    padding:100px ;
    
`
function Modal(props) {
    function handleBackgroundClick() {
        props.setVisible(false)
    }

    return(
        <>
            {props.visible &&
                <ModalBackground onClick={handleBackgroundClick}>
                    <ModalArea>
                        {props.children}
                    </ModalArea>  
                </ModalBackground>
            }
        </>
    )
}
export default Modal;