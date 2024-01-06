export interface Project {
    name: string
    src: string // Image source
    alt: string
    link: string // Github link
    description: string
}

export const projects: Project[] = [
    {
        name: 'Svelte Frontend',
        src: '/images/logo.png',
        alt: 'Svelte Logo',
        link: 'https://github.com/CatenaryTransit/catenary-frontend',
        description:
            'Default, original frontend for Catenary with realtime vehicle locations, labelled routes and stops.',
    },
    {
        name: 'Flutter Frontend',
        src: '/images/projects/flutterlogo.png',
        alt: 'Flutter Logo',
        link: 'https://github.com/CatenaryTransit/catenary-flutter',
        description:
            "Experimental rewrite of Catenary's frontend in Flutter, with support for native mobile and Web platforms.",
    },
    {
        name: 'Catenary Backend',
        src: '/images/projects/backendlogo.png',
        alt: 'Backend Logo',
        link: 'https://github.com/CatenaryTransit/catenary-backend',
        description:
            'Rust backend that powers Catenary with import, APIs for trip calculations, and routing algorithms.',
    },
    {
        name: 'Kactus',
        src: '/images/projects/kactuslogo.png',
        alt: 'Kactus Logo',
        link: 'https://github.com/CatenaryTransit/kactus-gtfs-rt',
        description:
            'Redis-based cache microservice fetching GTFS-rt from thousands of agencies every second and syncing with our algorithms.',
    },
    {
        name: 'ZotGTFS',
        src: '/images/projects/zotgtfslogo.png',
        alt: 'ZotGTFS Logo',
        link: 'https://github.com/CatenaryTransit/zotgtfs',
        description:
            'Complete reverse engineering of the TransLoc API used by the UCI Anteater Express shuttle service, adapting it to GTFS.',
    },
    {
        name: 'Skokie Swift',
        src: '/images/projects/skokieswiftlogo.png',
        alt: 'Skokie Swift Logo',
        link: 'https://github.com/CatenaryTransit/skokieswift',
        description:
            'Experimental reverse engineering of the CTA Train Tracker API, adapting it to GTFS-rt for use in Catenary.',
    },
    {
        name: 'Announcement Project',
        src: '/images/projects/announcementslogo.png',
        alt: 'Announcement Logo',
        link: 'https://github.com/CatenaryTransit/announcements',
        description: "Publishing automated announcements for the world's transit systems.",
    },
]
