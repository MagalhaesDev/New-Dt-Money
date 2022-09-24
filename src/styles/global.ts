import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #4d4d57;
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  :focus {
          outline: 0;
          box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
      background-color: ${(props) => props.theme['gray-800']};
      color: ${(props) => props.theme['gray-100']};
      -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
      font: 400 1rem Roboto, sans-serif;
  }

  html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        } 

        @media (max-width: 720px) {
            font-size:  87.5%;
        }
    }
`
