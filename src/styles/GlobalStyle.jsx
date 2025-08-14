import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #919191;
    border-radius: 0; 
  }

  ::-webkit-scrollbar-track {
    background-color: #b1b1b1;
    border-radius: 0;
  }
  ::-webkit-scrollbar-thumb:hover {
  background-color: #222;
}
  .mobile-br {
    display: none;
    @media (max-width: 768px) {
      display: inline;
    }
  }
`;

export default GlobalStyle;
