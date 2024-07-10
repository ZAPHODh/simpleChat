'use client'

import { Montserrat } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'

const montserrat = Montserrat({
    subsets: ['latin'],
    fallback: ['Georgia', 'ui-serif', 'serif'],
    weight: ['300', '700'],
})

export const GlobalStyles = createGlobalStyle`${() => css`
    html,
    body {
        width: 100%;
        max-width: 100vw;
        padding: 0;
        margin: 0;
        font-family: ${montserrat.style.fontFamily};
        overflow-x: hidden;
    }

    main {
        width: 100%;
        max-width: 100vw;
        padding: 0;
        margin: 0;
    }

    input {
        font-family: inherit;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    button {
        font-family: inherit;
    }
`}`
