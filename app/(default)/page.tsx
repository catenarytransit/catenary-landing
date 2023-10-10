import Hero from '@/components/hero'
import OpenSourceList from '@/components/open-source-list'
import Tabs from '@/components/tabs'

export default function Home() {
    return (
        <div className="flex flex-col divide-y divide-solid">
            <Hero />
            <Tabs />
            <OpenSourceList />
        </div>
    )
}
