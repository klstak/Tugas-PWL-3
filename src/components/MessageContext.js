// MessageContext.js
import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export const useMessageContext = () => {
    return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
    const [pesan, setPesan] = useState('');

    const value = {
        pesan,
        setPesan,
    };

    return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};
