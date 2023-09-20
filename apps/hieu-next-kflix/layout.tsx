import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { SessProvider } from 'src'

import { authOptions } from './api/auth/[...nextauth]/route'
import CustomProvider from './customProvider'
import GlobalLayout from './globalLayout'

export default async function RootLayout({
    children
}: {
    children: ReactNode
}) {
    const session = await getServerSession(authOptions)

    return (
        <html lang='en'>
            {/* <Head>
                <Partytown debug={true} forward={['dataLayer.push']} />
            </Head> */}
            <body suppressHydrationWarning>
                <SessProvider session={session}>
                    <CustomProvider>
                        <GlobalLayout>{children}</GlobalLayout>
                    </CustomProvider>
                </SessProvider>
            </body>
        </html>
    )
}
