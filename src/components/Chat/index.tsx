'use client'

import { useEffect, useState } from 'react'
import { InputChat } from '../InputChat'
import * as Styled from './styles'
import { Send } from '@styled-icons/boxicons-solid/Send'
import { socket } from '@/socket'
import { v4 as uuidv4 } from 'uuid'

export const Chat = ({ room }: ChatProps) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (message === '') return
        console.log(message)
        socket.emit('message', message)
        setMessage('')
    }
    const [isConnected, setIsConnected] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<string[]>([])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }
    useEffect(() => {
        const onConnect = () => {
            setIsConnected(true)
        }
        if (socket.connected) {
            onConnect()
        }

        const onDisconnect = () => {
            setIsConnected(false)
        }
        const handleMessage = (msg: string) => {
            console.log(msg)
            setMessages((prevMessages) => [...prevMessages, msg])
        }
        socket.on('connect', onConnect)
        socket.on('messageResponse', handleMessage)
        socket.on('disconnect', onDisconnect)

        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
            socket.off('messageResponse', handleMessage)
        }
    }, [messages])
    return (
        <div>
            {messages.map((msg) => (
                <p key={uuidv4()}>{msg}</p>
            ))}
            <Styled.MessageContainer onSubmit={onSubmit}>
                <InputChat
                    onChange={onChange}
                    value={message}
                    placeholder="escreva sua mensagem"
                />
                <Styled.Button>
                    <Send size={'inherit'} />
                </Styled.Button>
            </Styled.MessageContainer>
        </div>
    )
}
