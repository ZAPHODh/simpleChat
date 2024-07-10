import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import { GlobalStyles } from '../lib/theme/globals'
import { ThemeClient } from '../lib/theme/ThemeClient'
import SessionWrapper from '@/components/SessionWrapper'

const montserrat = Montserrat({
    subsets: ['latin'],
    fallback: ['Georgia', 'ui-serif', 'serif'],
    weight: '300',
})

export const metadata: Metadata = {
    title: 'Chat de teste, sem efeito nenhum',
    description: 'chat de teste ',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SessionWrapper>
            <html lang="pt-BR">
                <body className={montserrat.className}>
                    <ThemeClient>
                        <StyledComponentsRegistry>
                            {children}
                        </StyledComponentsRegistry>
                    </ThemeClient>
                </body>
                <GlobalStyles />
            </html>
        </SessionWrapper>
    )
}
