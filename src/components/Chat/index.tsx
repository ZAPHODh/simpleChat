'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { InputChat } from '../InputChat'
import * as Styled from './styles'
import { Send } from '@styled-icons/boxicons-solid/Send'
import { v4 as uuidv4 } from 'uuid'

import { useSession } from 'next-auth/react'
import { socket } from '@/lib/socket'
const StyledName = dynamic(() => import('./styles').then((style) => style.Name))

export const Chat = ({ room }: ChatProps) => {
    const { data: session } = useSession()
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<NewMessage[]>([])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (message === '' || !session || !session.user || !session.user.name)
            return
        const newMessage: NewMessage = { message, name: session.user.name }
        socket.emit('message', newMessage)
        setMessage('')
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    useEffect(() => {
        const handleMessage = (msg: NewMessage) => {
            console.log('Message received:', msg)
            setMessages((prevMessages) => [...prevMessages, msg])
        }

        socket.on('messageResponse', handleMessage)

        return () => {
            socket.off('messageResponse', handleMessage)
        }
    }, [])

    return (
        <Styled.Wrapper>
            <Styled.Messages>
                {messages.map((msg) => (
                    <Styled.Message
                        $isMe={msg.name === session?.user?.name ? true : false}
                        key={uuidv4()}
                    >
                        {msg.name !== session?.user?.name ? (
                            <StyledName>{msg.name}</StyledName>
                        ) : null}

                        {msg.message}
                    </Styled.Message>
                ))}
            </Styled.Messages>
            <Styled.MessageContainer onSubmit={onSubmit}>
                <InputChat
                    onChange={onChange}
                    value={message}
                    placeholder="escreva sua mensagem"
                />
                <Styled.Button>
                    <Send size={'25px'} />
                </Styled.Button>
            </Styled.MessageContainer>
        </Styled.Wrapper>
    )
}
