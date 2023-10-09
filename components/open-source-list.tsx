import { projects } from '@/data/projects'
import Image from 'next/image'

export default function OpenSourceList() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Open-source projects at Catenary</h2>
                        <p className="text-xl text-muted-foreground">
                            Catenary embraces open-source, offering tools and solutions for transit
                            needs. Our projects include UX-friendly frontends, blazingly efficient
                            backends, and practical integrations of transport APIs. Take a look at
                            what we're working on!
                        </p>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                        data-aos-id-blocks
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center"
                                data-aos="fade-up"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Image
                                    src={project.src}
                                    alt={project.alt}
                                    width={128}
                                    height={128}
                                    className="mb-4 rounded-md border border-border"
                                    unoptimized
                                />
                                <h4 className="h4 mb-2">{project.name}</h4>
                                <p className="mb-2 text-lg text-muted-foreground text-center">
                                    {project.description}
                                </p>
                                {/* learn more */}
                                <a href={project.link} className="text-primary" target="_blank">
                                    Learn more →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
