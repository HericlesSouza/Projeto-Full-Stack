import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #FF577F; 
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #f8f9fa;
        --white: #ffffff;

        --title-1: 1rem;
        --title-2: 1.125rem;
        --title-3: 1.5rem;
        --title-4: 1.25rem;
        --headline: 0.75rem;
        --headline-1: 0.875rem;

        --font-weight-1: 500;
        --font-weight-2: 600;
        --font-weight-3: 700;
        --font-weight-4: 800;

        --border-radius: 4px;
        --border-radius-1: 8px;
    }  

    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    body, html {
        background-color:var(--grey-4);
    }

    #root {
        width: 100%;
        height: 100%;
    }
`