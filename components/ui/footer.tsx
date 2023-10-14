import { footerContent } from '@/data/footer-content.tsx'
import Link from 'next/link'

import { ModeToggle } from '../mode-toggle'

const currentYear = new Date().getFullYear()

export default function Footer() {
    return (
        <footer>
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Top area: Blocks */}
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
                        {/* 1st block */}
                        <div className="md:col-span-4 lg:col-span-5">
                            <div className="mb-2">
                                {/* Logo */}
                                <Link
                                    href={footerContent.logo.link}
                                    className="inline-block"
                                    aria-label={footerContent.logo.alt}
                                >
                                    <img
                                        src={footerContent.logo.srcLightMode}
                                        className="h-8 logoLight"
                                        alt={footerContent.logo.alt}
                                    />
                                    <img
                                        src={footerContent.logo.srcDarkMode}
                                        className="h-8 logoDark"
                                        style={{ display: 'none' }}
                                        alt={footerContent.logo.alt}
                                    />
                                </Link>
                            </div>
                            <div className="text-muted-foreground mb-4">
                                Catenary Maps is an ad-free, open-source tool for seamless public
                                transport navigation.
                            </div>
                            <ModeToggle />
                        </div>

                        {/* 2nd, 3rd and 4th blocks */}
                        <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
                            {footerContent.blocks.map((block, index) => (
                                <div className="text-sm" key={index}>
                                    <h6 className="text-foreground brightness-90 font-medium mb-1">
                                        {block.title}
                                    </h6>
                                    <ul>
                                        {block.links.map((link, linkIndex) => (
                                            <li className="mb-1" key={linkIndex}>
                                                <Link
                                                    href={link.href}
                                                    className="text-muted-foreground hover:text-foreground transition duration-150 ease-in-out"
                                                >
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom area */}
                    <div className="md:flex md:items-center md:justify-between">
                        {/* Social links */}
                        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                            {footerContent.socialLinks.map((socialLink, index) => (
                                <li className={index !== 0 ? 'ml-4' : ''} key={index}>
                                    <Link
                                        href={socialLink.href}
                                        className="p-2 flex justify-center items-center text-primary bg-secondary/50 hover:text-foreground hover:bg-primary rounded-full transition duration-150 ease-in-out"
                                        aria-label={socialLink.alt}
                                    >
                                        {socialLink.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Copyrights note */}
                        <div className="text-muted-foreground text-sm mr-4">
                            {currentYear} {footerContent.copyright}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
