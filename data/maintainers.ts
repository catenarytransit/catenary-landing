export interface Person {
    name: string
    pronouns: string
    school: string
    src: string // Image source
    link: string // Github profile
    title?: string
    titles: string[]
}

export const maintainers: Person[] = [
    {
        name: 'Kyler Chin',
        pronouns: 'he/him',
        school: 'University of California, Irvine',
        src: 'https://github.com/kylerchin.png',
        link: 'https://kylerchin.com',
        title: 'Executive Director',
        titles: [
            'Systems Programmer',
            'Distributed Computing',
            'Algorithms',
            'Frontend',
            'Design',
        ],
    },
    {
        name: 'Kin Tsang',
        pronouns: 'he/him',
        school: 'California State University, Los Angeles',
        src: 'https://github.com/pyover180.png',
        link: 'https://github.com/pyover180',
        title: 'Board, Director of Systems Architecture',
        titles: ['Systems Architecture', 'Algorithms'],
    },
    {
        name: 'Chelsea Wen',
        pronouns: 'she/her',
        title: "Board",
        school: 'University of California, Irvine',
        src: 'https://github.com/mysteriouspresence.png',
        link: 'https://github.com/mysteriouspresence',
        titles: ['Algorithms', 'Embedded'],
    },
    {
        name: 'Andrew Shen',
        pronouns: 'he/him',
        school: 'University of California, Irvine',
        src: 'https://github.com/AndrewHC36.png',
        link: 'https://github.com/AndrewHC36',
        title: 'Director of Machine Learning',
        titles: [
            'Frontend',
            'Algorithms',
            'Machine Learning',
        ],
    },
    {
        name: 'Samuel Sharp',
        pronouns: 'he/him',
        school: 'San Diego High School',
        src: 'https://github.com/samuelbeepdev.png',
        link: 'https://samuelsharp.com',
        title: 'Frontend Lead + Community Manager',
        titles: ['Frontend', 'Design', 'UX/UI'],
    },
    {
        name: 'Jason T.',
        pronouns: 'he/him',
        school: 'University of California, San Diego',
        src: 'http://github.com/jktrn.png',
        link: 'https://enscribe.dev',
        title: 'Web Landing Lead',
        titles: ['Frontend', 'UX/UI', 'Accessibility Design'],
    },
    {
        name: 'Brandon Z.',
        pronouns: 'he/they',
        school: 'University of Southern California',
        src: 'https://github.com/catenarytransit.png',
        link: '#',
        title: 'UI/UX Lead',
        titles: ['Frontend', 'UX/UI', 'Design'],
    },
    {
        name: 'Jaiveer Gahunia',
        pronouns: 'he/him',
        school: 'University of California, Irvine',
        src: '/images/callmejai.png',
        link: 'https://github.com/callmejai',
        titles: ['Algorithms', 'Embedded'],
    },
    {
        name: 'Andrew Bustos',
        pronouns: 'he/him',
        school: 'California State University, East Bay',
        src: 'https://github.com/BustosAndrew.png',
        link: 'https://github.com/BustosAndrew',
        titles: ['Frontend', 'User Design'],
    },
]
