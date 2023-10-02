/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from '@libs/registries'
import { signInWithEmailAndPassword } from 'firebase/auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

type Credential = {
    email: string
    password: string
}

export const authOptions = {
    // Configure one or more authentication providers
    pages: {
        signIn: '/'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials): Promise<any> {
                const result = await signInWithEmailAndPassword(
                    auth,
                    (credentials as unknown as Credential).email || '',
                    (credentials as unknown as Credential).password || ''
                )

                return result
            }
        })
    ]
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
