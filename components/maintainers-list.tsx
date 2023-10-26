import { maintainers } from '@/data/maintainers'
import Image from 'next/image'

export default function MaintainersList() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">We&apos;re humans, too</h2>
                        <p className="text-xl text-muted-foreground">
                            The Catenary team is a diverse group of students working to make transit easier for everyone.
                        </p>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                        data-aos-id-blocks
                    >
                        {maintainers.map((person, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center"
                                data-aos="fade-up"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Image
                                    src={person.src}
                                    alt='Profile picture'
                                    width={80}
                                    height={80}
                                    className="mb-8 rounded-full border border-border"
                                    unoptimized
                                />
                                <a href={person.link} className="text-primary" target="_blank"><h3 className="h4 mb-2">{person.name}</h3></a>
                                <h4 className="h5 mb-2">{person.pronouns} - {person.school}</h4>
                                <p className="mb-2 text-lg text-muted-foreground text-center">
                                    {person.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
