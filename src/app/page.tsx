import { Chat } from '@/components/Chat'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Home() {
    const { data: session } = useSession()
    if (!session || !session.user) redirect('api/auth/signin')
    return (
        <main>
            <Chat room={'room1'} />
        </main>
    )
}
