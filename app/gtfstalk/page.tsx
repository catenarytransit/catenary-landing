import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center divide-y divide-solid">
            <section>
                <div className="flex items-center relative pt-32 pb-12 md:pt-40 md:pb-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center">
                            November 1st, 2023 - Kyler Chin's Introduction to GTFS and GTFS-RT
                            <div className="flex flex-row flex-wrap gap-4 w-full lg:w-6/12 px-4">
                                <div className="bg-secondary rounded-xl gap-4 pb-3 border border-border">
                                    <Link href="https://deepnote.com/workspace/vjslfdflk-66924825-3338-4bae-917a-589658a2aa03/project/Catenary-Maps-GTFS-Lab-fe1d1904-ae02-430e-9b7f-a0562775a896/notebook/Catenary%20Maps%20GTFS%20Lab-856300de00ff45d89060b97029808853">
                                        <Image
                                            src="/images/gtfs-talk/deepnote.png"
                                            alt="something"
                                            width="1920"
                                            height="1080"
                                            className="p-4"
                                        />
                                        <span className="h4 mb-4">
                                            Deepnote Link
                                        </span>
                                    </Link>
                                </div>
                                <Link href="https://docs.google.com/presentation/d/1h2Sqemv-VcV_ThRFmNPMshUvOP4BPp0AsVLyV83qVFA/edit">
                                    <div className="bg-secondary rounded-xl gap-4 pb-3 border border-border">
                                        <Image
                                            src="/images/gtfs-talk/slides.png"
                                            alt="something"
                                            width="1920"
                                            height="1080"
                                            className="p-4"
                                        />
                                        <span className="h4 mb-4">
                                            Slides Link
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
