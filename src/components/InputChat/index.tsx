'use client'

import * as Styled from './styles'

export const InputChat = ({ onChange, placeholder, value }: InputChatProps) => {
    return (
        <Styled.Wrapper
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}
