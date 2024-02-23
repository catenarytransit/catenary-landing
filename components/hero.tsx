import { LinesEffectWrapper } from "./ui/lines-effect-user";

export default function Hero() {
    return (
        <section>
                <LinesEffectWrapper />
                {/* Section header */}
                <div className="relative w-full mx-auto text-center p-10 bg-gradient-to-r from-blue-700 to-blue-500">
                    <p
                        className="text-2xl text-white"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <b>Catenary is a student-led non-profit organization at the cutting edge of transit and routing research.</b> We explore and innovate ways to help people navigate the world around them - by providing accurate realtime data in a user-friendly, accessible format.
                    </p>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center pt-8">
                        <div data-aos="fade-up" data-aos-delay="400">
                            <a
                                className="btn text-foreground bg-secondary hover:bg-tertiary w-full sm:w-auto sm:ml-4"
                                href="https://maps.catenarymaps.org/"
                            >
                                Launch Catenary Maps
                            </a>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <a
                                className="btn text-foreground bg-secondary hover:bg-tertiary w-full sm:w-auto sm:ml-4"
                                href="https://discord.gg/bBeDhrzSgz"
                            >
                                Join our Discord
                            </a>
                        </div>
                    </div>
                </div>
        </section>
    )
}
