import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import { Architects_Daughter, Atkinson_Hyperlegible, Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './css/style.css'

const inter = Atkinson_Hyperlegible({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: '400',
    display: 'swap',
})

const architects_daughter = Architects_Daughter({
    subsets: ['latin'],
    variable: '--font-architects-daughter',
    weight: '400',
    display: 'swap',
})

const siteMetadata = {
    title: 'Catenary Maps',
    description: 'We\'re a fully student team focused on creating advanced routing, estimated time of arrival (ETA), and data processing algorithms. Our goal is to provide accurate real-time data in a user-friendly, accessible format.',
    icon: '/images/logo.png',
    twitterCard: '/images/twitter-card.png',
}

export const metadata: Metadata = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: "./",
        type: "website",
        locale: "en_US",
        siteName: "Catenary Maps",
    },
    twitter: {
        title: siteMetadata.title,
        card: 'summary_large_image',
        images: [siteMetadata.twitterCard],
        creator: '@catenarymaps',
    },
    icons: {
        icon: siteMetadata.icon,
    },
    category: 'technology',
    alternates: {
        canonical: './',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-background text-foreground`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col min-h-screen overflow-hidden">
                        <Header />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
