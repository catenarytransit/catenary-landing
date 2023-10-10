import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import { Architects_Daughter, Atkinson_Hyperlegible, Inter } from 'next/font/google'

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

// const atkinson_hyperlegible = Atkinson_Hyperlegible({
//     subsets: ['latin'],
//     variable: '--font-atkinson-hyperlegible',
//     weight: '400',
//     display: 'swap',
// })

let title = "Powerful Realtime Public Transit Data and Algorithms",
	description = "We're a team of students innovating and designing routing, ETA, and processing algorithms, curating and displaying high quality realtime data.    "

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        url: "https://catenarymaps.org/",
        // @ts-ignore
        type: "website",
        locale: "en_US",
        site_name: "Catenary Maps",
    },
    twitter: {
        card: 'summary',
        title: title,
        description: description,
        siteId: '',
        creator: '@catenarymaps',
    },
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/images/logo.png",
    },
    category: 'technology',
    keywords: [
        // TODO
    ]

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
