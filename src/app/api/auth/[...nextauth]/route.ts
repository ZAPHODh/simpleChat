import NextAuth, { Awaitable, RequestInternal, User } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
export const OPTIONS = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            id: 'test',
            credentials: {
                username: {
                    label: 'Email',
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
                // Add logic here to look up the user from the credentials supplied

                const user = {
                    id: '1',
                    name: 'J Smith',
                    email: 'jsmith@example.com',
                }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
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

export const handler = NextAuth(OPTIONS)

export { handler as GET, handler as POST }
