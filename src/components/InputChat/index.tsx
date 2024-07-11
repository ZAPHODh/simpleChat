'use client'

import * as Styled from './styles'

export const InputChat = ({ onChange, placeholder, value }: InputChatProps) => {
    return (
        <Styled.Wrapper
            autoFocus={true}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}
