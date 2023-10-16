import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {BsClouds} from 'react-icons/bs'

export const footerContent = {
    logo: {
        link: '/',
        alt: 'Catenary Maps',
        srcDarkMode: '/images/favicon.svg',
        srcLightMode: '/images/favicon-light.svg',
    },
    blocks: [
        {
            title: '',
            links: [
                { href: 'https://grafana.catenarymaps.org/public-dashboards/0667d5c864ab4da68baaa45d8e22832b?orgId=1', text: 'Status' },
            ],
        },
    ],
    socialLinks: [
        { href: 'https://discord.gg/bBeDhrzSgz', icon: <FaDiscord />, alt: 'Discord' },
        { href: 'https://twitter.com/CatenaryMaps', icon: <FaTwitter />, alt: 'Twitter' },
        { href: 'https://github.com/CatenaryMaps', icon: <FaGithub />, alt: 'Github' },
        {
            href: 'https://www.instagram.com/catenarymaps/',
            icon: <FaInstagram />,
            alt: 'Instagram',
        },
        {
            href: 'https://www.linkedin.com/company/97224211',
            icon: <FaLinkedin />,
            alt: 'Linkedin',
        },
        {
            href: "https://bsky.app/profile/catenarymaps.org",
            icon: <BsClouds />,
            alt: 'Bluesky',
        }
    ],
    copyright: '© Catenary Transit Initiatives. All rights reserved.',
}
