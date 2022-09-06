import React, { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {

    const [cardName, setCardName] = useState("XXXXXX XXXXXXX");
    const [cardNumber, setCardNumber] = useState("0000000000000");
    const [cvc, setCvc] = useState("000");
    const [mm, setMM] = useState("09");
    const [yy, setYY] = useState("00")
    const [isSubmitted, setIsSubmitted] = useState(false);


    const data = { cardName, setCardName, cardNumber, setCardNumber, cvc, setCvc, mm, setMM, yy, setYY, isSubmitted, setIsSubmitted };

    return <FormContext.Provider value={ data } >{ children }</FormContext.Provider>;
};

export default FormContext;