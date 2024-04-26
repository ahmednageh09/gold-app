import React from 'react';

const Modal = ({ children }: any) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {children}
        </div>
    );
};

export default Modal;
