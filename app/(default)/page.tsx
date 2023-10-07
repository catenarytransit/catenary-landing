import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
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
            <Zigzag />
            <FeaturesBlocks />
            <Features />
            {/* <Testimonials /> */}
            {/* <Newsletter /> */}
        </>
    )
}
