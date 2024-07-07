'use client'

import { io } from 'socket.io-client'

export const socket = io(
    'https://e3a7-2804-d41-ef0b-7f00-6da9-ea3c-ec1a-f94f.ngrok-free.app'
)
