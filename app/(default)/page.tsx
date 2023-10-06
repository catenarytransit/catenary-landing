import Features from '@/components/features'
import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import Zigzag from '@/components/zigzag'

export const metadata = {
    title: 'Home - Open PRO',
    description: 'Page description',
}

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Zigzag />
            <Testimonials />
            <Newsletter />
        </>
    )
}
