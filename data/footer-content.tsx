import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const footerContent = {
    logo: {
        link: '/',
        alt: 'Catenary Maps',
        srcDarkMode: '/images/favicon.svg',
        srcLightMode: '/images/favicon-light.svg',
    },
    blocks: [
        {
            title: ' ',
            links: [
                { href: '/', text: ' ' },
                { href: '/', text: ' ' },
                { href: '/', text: ' ' },
            ],
        }
      /*
        {
            title: 'Products',
            links: [
                { href: '/', text: 'Web Studio' },
                { href: '/', text: 'DynamicBox Flex' },
                { href: '/', text: 'Programming Forms' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { href: '/', text: 'Nostrud exercitation' },
                { href: '/', text: 'Visual mockups' },
                { href: '/', text: 'Nostrud exercitation' },
                { href: '/', text: 'Visual mockups' },
                { href: '/', text: 'Nostrud exercitation' },
            ],
        },
        {
            title: 'Company',
            links: [
                { href: '/', text: 'Consectetur adipiscing' },
                { href: '/', text: 'Labore et dolore' },
                { href: '/', text: 'Consectetur adipiscing' },
                { href: '/', text: 'Labore et dolore' },
                { href: '/', text: 'Consectetur adipiscing' },
            ],
        },
        */
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
    ],
    copyright: '© Catenary Transit Initiatives. All rights reserved.',
}
