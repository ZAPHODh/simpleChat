import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth'
import { v4 as uuidv4 } from 'uuid'
export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            id: 'test',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'type your email',
                },
                username: {
                    label: 'name',
                    type: 'text',
                    placeholder: 'type your email',
                },
                password: {
                    label: 'Senha',
                    type: 'password',
                    placeholder: 'Senha',
                },
            },
            async authorize(credentials, req) {
                if (!credentials) return null

                const user = {
                    id: uuidv4(),
                    name: credentials.username,
                    email: credentials.email,
                }
                return user
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
    ],
}
