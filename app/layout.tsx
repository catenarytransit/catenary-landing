import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import type { Metadata } from 'next'
import { Architects_Daughter, Atkinson_Hyperlegible, Inter } from 'next/font/google'

import './css/style.css'

const seoKeywords = [
    "Accessible format",
    "Accurate arrival times",
    "Advanced routing",
    "Algorithm development",
    "Algorithmic solutions",
    "Cutting-edge routing",
    "Data accuracy",
    "Data analytics",
    "Data processing",
    "Easy-to-use",
    "Efficient routes",
    "ETA (Estimated Time of Arrival)",
    "ETA algorithms",
    "Innovation in routing",
    "Innovative projects",
    "Intuitive",
    "Navigation",
    "Optimized routes",
    "Precise ETA",
    "Public Transit Technology",
    "Public Transit Map",
    "Public Transportation",
    "Real-time analytics",
    "Real-time data",
    "Route",
    "Route optimization",
    "Routing solutions",
    "Routing technology",
    "Simple navigation",
    "Student team",
    "Student-driven development",
    "Student-led innovation",
    "Technology development",
    "Time estimation",
    "Tools",
    "User-centric algorithms",
    "User-friendly",
  ];
  

const siteMetadata = {
    title: 'Catenary Maps',
    description:
        "We're a fully student team focused on creating advanced routing, estimated time of arrival (ETA), and data processing algorithms. Our goal is to provide accurate real-time data in a user-friendly, accessible format.",
    icon: '/images/favicon.svg',
    twitterCard: '/images/twitter-card.png',
}

export const metadata: Metadata = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    keywords: seoKeywords,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: './',
        type: 'website',
        locale: 'en_US',
        siteName: 'Catenary Maps',
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`antialiased bg-background text-foreground`}
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
