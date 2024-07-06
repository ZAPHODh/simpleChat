'use client'

import styled, { css } from 'styled-components'

export const MessageContainer = styled.form`
    ${({ theme }) => css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 30px;
        border: 1px solid black;
        overflow: hidden;
        width: 400px;
        height: 40px;
    `}
`
export const Button = styled.button`
    ${({ theme }) => css`
    background-color: ;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-left: 0.3px solid black;
        outline: none;
        height: 100%;
        width: 80px;
        font-size: 8px;
        &:hover {
            cursor: pointer;
        }
    `}
`
