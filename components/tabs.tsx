'use client'

import { Transition } from '@headlessui/react'
import { DatabaseIcon, EyeIcon, ScanSearch } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Tabs() {
    const [tab, setTab] = useState<number>(1)

    const tabs = useRef<HTMLDivElement>(null)

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement)
            tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix()
    }, [])

    return (
        <section className="relative">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 bg-background pointer-events-none mb-16"
                aria-hidden="true"
            ></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Transit insight with Catenary</h1>
                        <p className="text-xl text-muted-foreground">
                            We're a fully student team focused on creating advanced routing,
                            estimated time of arrival (ETA), and data processing algorithms. Our
                            goal is to provide accurate real-time data in a user-friendly,
                            accessible format.
                        </p>
                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        {/* Content */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            data-aos="fade-right"
                        >
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded transition duration-300 ease-in-out mb-3 ${
                                        tab !== 1
                                            ? 'bg-secondary shadow-md hover:shadow-lg'
                                            : 'bg-tertiary'
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setTab(1)
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug mb-1">
                                            Get the big picture
                                        </div>
                                        <div className="text-muted-foreground">
                                            Catenary gives you a bird's eye view of your city's
                                            transit network. Track vehicles in real time, and plan
                                            trips on unfamiliar lines.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-background rounded-full shadow flex-shrink-0 ml-3">
                                        <EyeIcon size={16} />
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded transition duration-300 ease-in-out mb-3 ${
                                        tab !== 2
                                            ? 'bg-secondary shadow-md hover:shadow-lg'
                                            : 'bg-tertiary'
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setTab(2)
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug mb-1">
                                            All the details you need
                                        </div>
                                        <div className="text-muted-foreground">
                                            Catenary is built with customizability in mind, so you
                                            can choose what info you want to see on the map. Easy
                                            options make switching from commuting to foaming a
                                            breeze.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-background rounded-full shadow flex-shrink-0 ml-3">
                                        <ScanSearch size={16} />
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded transition duration-300 ease-in-out mb-3 ${
                                        tab !== 3
                                            ? 'bg-secondary shadow-md hover:shadow-lg'
                                            : 'bg-tertiary'
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setTab(3)
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug mb-1">
                                            Precise, accurate data
                                        </div>
                                        <div className="text-muted-foreground">
                                            Data from transit agencies refreshes between every 1 to
                                            60 seconds, enhanced by our innovative algorithms for an
                                            accurate real-time journey snapshot.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-background rounded-full shadow flex-shrink-0 ml-3">
                                        <DatabaseIcon size={16} />
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                            <div className="transition-all">
                                <div
                                    className="relative flex flex-col text-center lg:text-right"
                                    data-aos="zoom-y-out"
                                    ref={tabs}
                                >
                                    {/* Item 1 */}
                                    <Transition
                                        show={tab === 1}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                            <Image
                                                className="max-h-[462px] rounded object-contain"
                                                src="/images/feature-bigpicture.png"
                                                width={500}
                                                height="462"
                                                alt="Features bg"
                                            />
                                        </div>
                                    </Transition>
                                    {/* Item 2 */}
                                    <Transition
                                        show={tab === 2}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                            <Image
                                                className="object-contain max-h-[462px] rounded"
                                                src="/images/feature-customize.png"
                                                width={500}
                                                height="462"
                                                alt="Features bg"
                                            />
                                        </div>
                                    </Transition>
                                    {/* Item 3 */}
                                    <Transition
                                        show={tab === 3}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                            <Image
                                                className="rounded max-h-[462px] object-contain"
                                                src="/images/feature-precision.png"
                                                width={500}
                                                height="462"
                                                alt="Features bg"
                                            />
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
