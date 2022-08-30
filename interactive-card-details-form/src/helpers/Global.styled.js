import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        font-family: 'Space Grotesk';
    }

    p {
        font-size: 18px;
    }

    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
    }
`;
