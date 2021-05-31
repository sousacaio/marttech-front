import React from "react";
import "./Modal.css";
interface ModalProps {
    className: string;
    modalRef: any
}
const Modal: React.FC<ModalProps> = (props): JSX.Element => {
    const { className, modalRef } = props;

    return (
        <div ref={modalRef} className={`${className} modal`}>
            <p>Meu modal!</p>
        </div>
    )
}

export default Modal;