import { Chat } from '@/components/Chat'
import { socket } from '@/socket'

export default function Home() {
    return (
        <main>
            <Chat room={'room1'} />
        </main>
    )
}
