import { createGlobalStyle } from 'styled-components';
import { offWhite, darkGray } from './colors';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Sora';
        src: url('/fonts/Sora-VariableFont_wght.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Manrope';
        src: url('/fonts/Manrope-VariableFont_wght.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    body {
        margin: 0;
        font-family: Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${offWhite};
        color: ${darkGray};
        
        overflow-x: hidden;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    * {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        // overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
`;