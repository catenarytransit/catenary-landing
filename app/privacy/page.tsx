import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <div className=" divide-y divide-solid">
            <section>
                <div className="flex items-left relative pt-32 pb-12 md:pt-40 md:pb-16">
                    <div className="container  px-4">
                        <div className="">
                            <span className="h4 mb-20">
                                Catenary Maps Privacy Policy
                            </span>
                            <div className="">
                            Catenary Transit Initatives ("Us", "Our", "We"), a California public benefit non-profit corporation doing business as "Catenary Maps" collects information about your device, your location, and your connected login accounts to provide you with realtime public transport directions and data.
                            <br/><br/>
                            By using Catenary Maps, you accept the terms and conditions described in this Privacy Policy.
                            <br/><br/>
                            Scope:
                            Catenary Maps may link to external websites, products, or services. This may include links to public transport websites, websites / apps to purchase tickets or fares, etc. Our privacy policy applies only to our websites and apps, so if you click on a link to another website, you should read their privacy policy.
                            <br/><br/>
                            What we collect and why:
                            <ul>
                                <li>
                                    Once you've consented to sharing your location, we track your coordinates, time, heading, and speed. 
                                    This process can happen in the background. 

                                    We keep track of your location to show you nearby departures, generate and update directions, and to track public transport vehicles. You may share location data anonymously by volunteering position tracking for a transit vehicle, helping others to identify where their train or bus is. You can also share your location with friends or family.
                                    Identifiable information is never shared with other users without your permission, nor permenantly stored by our servers.
                                </li>
                                <li>
                                    We collect information gathered from a sign-in providers, such as Google or Apple. This includes your name, email address, and profile picture.
                                </li>
                                <li>
                                    We collect and store information about your preferences, saved locations, pinned routes or stations, realtime data contributions, and other customisations. This is linked with your profile.
                                </li>
                                <li>
                                    We collect telemetry data about your device, such as the operating system and model of your phone. We also collect what routes, stops, and trips you view. This helps us understand what our users are looking at better.
                                </li>
                                <li>
                                    When purchasing transit tickets on Catenary, we may collect your name, phone number, address, email address, and payment information, and other elements needed to complete a transaction.
                                </li>
                                <li>
                                    Catenary Maps may access your contacts or calendar events on your phone.
                                </li>
                            </ul>
                            <p>How do we store your data?<br/>Our company encrypts stored personally identifiable information at rest. We store your data as long you are a Catenary user. You may request a copy of your data or delete it at any time.</p>
                            <br/><br/>
                            <p>
                                <h4>Your Rights</h4>

                                All Catenary Maps users have rights under the EU General Data Protection Regulation.

                                The right to access - You have the right to request Catenary Transit Initatives for copies of your personal data, at any time. This can be done on our website or app.
                                <br/>
                                The right to rectification – You may correct any information you believe is inaccurate about you.
                                <br/>
                                The right to erasure - You have the right to request that we delete your data, under certain conditions.
                                <br/>
                                The right to restrict processing – You have the right to request that Our Company restrict the processing of your personal data, under certain conditions.
                                <br/>
                                The right to object to processing – You have the right to object to Our Company’s processing of your personal data, under certain conditions.
                                <br/>
                                The right to data portability – You have the right to request that Our Company transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                                <br/>
                                If you would like to make a request, please contact us at privacy@catenarymaps.org. We have 1 month to respond to you.
                            </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
