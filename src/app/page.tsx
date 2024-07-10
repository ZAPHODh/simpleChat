import { Chat } from '@/components/Chat'
import { getServerSession } from 'next-auth'

export default function Home() {
    return (
        <main>
            <Chat room={'room1'} />
        </main>
    )
}
