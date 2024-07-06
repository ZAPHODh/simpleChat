'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.input`
    ${({ theme }) => css`
        width: 100%;
        border: none;
        padding: 5px;
        &:focus {
            outline: none;
        }
    `}
`
