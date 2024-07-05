'use client'

import styled, { css } from 'styled-components'

interface WrapperProps {
    $padding?: string
    $maxWidth?: string
}

export const Wrapper = styled.p<WrapperProps>`
    ${({ $padding = '0', $maxWidth = '100vw', theme }) => css`
        /* text-align: justify; */
        color: ${theme.colors.white};
        margin: 0;
        padding: ${$padding};
        max-width: ${$maxWidth};
    `}
`
