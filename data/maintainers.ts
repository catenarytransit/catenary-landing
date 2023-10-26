export interface Person {
    name: string
    pronouns: string
    school: string
    src: string // Image source
    link: string // Github profile
    titles: string[]
}

export const maintainers: Person[] = [
    {
        name: 'Kyler Chin',
        pronouns: 'he/him',
        school: 'University of California, Irvine',
        src: 'https://github.com/kylerchin.png',
        link: 'https://kylerchin.com',
        titles: ['Director', 'Catenary Board', 'Systems Programmer', 'Algorithms', 'Frontend', 'Design']
    },
    {
        name: 'Kin Tsang',
        pronouns: 'he/him',
        school: 'California State University, Los Angeles',
        src: 'https://github.com/pyover180.png',
        link: 'https://github.com/pyover180',
        titles: ['Catenary Board', 'Systems Architecture', 'Algorithms'],
    },
    {
        name: 'Andrew Shen',
        pronouns: 'he/him',
        school: 'University of California, Irvine',
        src: 'https://github.com/AndrewHC36.png',
        link: 'https://github.com/AndrewHC36',
        titles: ['Boardmember, Frontend/Flutter, Algorithms, Machine Learning'],
    },
    {
        name: 'Josh Wong',
        pronouns: 'he/him',
        school: 'Santa Monica College & Don Bosco Technical Institute, Rosemead',
        src: 'https://github.com/lolpro11.png',
        link: 'https://github.com/lolpro11',
        titles: ['Director', 'Sysadmin', 'Systems Programmer', 'Algorithms'],
    },
    {
        name: 'Samuel Sharp',
        pronouns: 'he/him',
        school: 'San Diego High School',
        src: 'https://github.com/samuelbeepdev.png',
        link: 'https://samuelsharp.com',
        titles: ['Frontend/Web', 'Frontend/Flutter', 'Design', 'UX/UI'],
    },
    {
        name: 'Andrew Bustos',
        pronouns: 'he/him',
        school: 'California State University, East Bay',
        src: 'https://github.com/BustosAndrew.png',
        link: 'https://github.com/BustosAndrew',
        titles: ['Frontend/Flutter', 'User Design'],
    },
    {
        name: 'Jason T.',
        pronouns: 'he/him',
        school: 'University of California, San Diego',
        src: 'http://github.com/jktrn.png',
        link: 'https://enscribe.dev',
        titles: ['Frontend/Web', 'UX/UI', 'Accessibility Design'],
    },
]
