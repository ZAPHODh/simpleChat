'use client'

import styled, { css } from 'styled-components'

export const Name = styled.p`
    position: absolute;
    top: -0.2rem;
    left: 1rem;
    font-size: 11px;
`

export const Message = styled.div<{ $isMe: boolean }>`
    ${({ theme, $isMe }) => css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 10px;
        border-radius: 10px;
        margin: 10px;
        min-height: 60px;
        min-width: 150px;
        background-color: ${$isMe ? 'black' : 'white'};
        color: ${$isMe ? 'white' : 'black'};
        align-self: ${$isMe ? 'flex-end' : 'flex-start'};
    `}
`
export const Messages = styled.div`
    ${({ theme }) => css`
        overflow: auto;
        height: 400px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `}
`

export const Wrapper = styled.section`
    ${({ theme }) => css`
        width: 400px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `}
`

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
        background-color:;
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
