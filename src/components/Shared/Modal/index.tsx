import React from 'react';

interface ModalProps {
    children: any;
    setOpen: (open: boolean) => void;
    open: boolean;
}
const InfoProductModal: React.FC<ModalProps> = ({ children, open, setOpen }) => {


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div >
                {children}
            </div>
        </div>
    );
}

export default InfoProductModal;