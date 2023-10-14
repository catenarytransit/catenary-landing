'use client'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-WD62NKLX'
}
 
TagManager.initialize(tagManagerArgs)

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 600,
            easing: 'ease-out-sine',
        })
    })

    return (
        <>
            <main className="grow">
                <PageIllustration />

                {children}
            </main>

            <Footer />
        </>
    )
}
