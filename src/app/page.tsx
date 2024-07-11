import { Chat } from '@/components/Chat'
import { getServerSession } from 'next-auth'
// import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home() {
    const session = await getServerSession()

    if (!session || !session.user) redirect('/api/auth/signin')

    return (
        <main>
            <Chat room={'room1'} />
            <br />
            <a href="/novasala">new room</a>
        </main>
    )
}
