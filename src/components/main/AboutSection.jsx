"use client";

import React, { useState } from "react";
import { BsCopy } from "react-icons/bs";
import dynamic from "next/dynamic";
import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";
import ContactForm from "../popups/ContactForm";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const AboutSection = () => {
    const [isFormOpen, setFormOpen] = useState(false);
    const [copyMessage, setCopyMessage] = useState("");

    const handleCopy = () => {
        navigator.clipboard.writeText("contact@buildwithparadox.com").then(() => {
            setCopyMessage("Email copied to clipboard!");
            setTimeout(() => setCopyMessage(""), 2000);
        });
    };

    return (
        <section className="py-16 text-white" id="about">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Who Am I Card */}
                    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-full hover:scale-105 transition-transform duration-300">
                        <img src="/assets/myavatar.png" alt="Who Am I" className="rounded-md w-full h-46 object-cover" />
                        <h3 className="text-2xl font-bold mt-2">Who Am I</h3>
                        <p className="text-gray-300 -mt-5">
                            I'm Prashant, a passionate Full Stack Developer and Security Researcher, focused on building and securing products and brands.
                        </p>
                    </div>

                    {/* Tech Stack Card */}
                    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-full hover:scale-105 transition-transform duration-300">
                        <Image src="/assets/mytechstack.gif" alt="Tech Stack" width={400} height={400} className="rounded-md  object-cover mb-4" />
                        <h3 className="text-2xl font-bold mb-2">My Tech Stack</h3>
                        <p className="text-gray-300">
                            I work with technologies like React, Next.js, Node.js, Django, and more.
                        </p>
                    </div>

                    {/* Hacking, CTF, Bug Hunting Card */}
                    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-full hover:scale-105 transition-transform duration-300">
                        <Image src="/assets/hackingandctf.gif" alt="Tech Stack" width={400} height={400} className="rounded-md  object-cover mb-4" />
                        <div className="flex">
                            <img src='/icons/detective.png' className="w-6 h-6 mt-1" />
                            <h3 className="text-2xl font-bold mb-2 ml-2">Hacking & CTF</h3>
                        </div>
                        <p className="text-gray-300">
                            "I thrive on CTF challenges and bug hunting, known as <strong>Dr.Paradox</strong> on Bugcrowd and HackerOne."
                        </p>
                    </div>

                    {/* Product Visualization Card */}
                    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-full hover:scale-105 transition-transform duration-300">
                        <img src="/assets/productvisualization.gif" alt="Product Visualization" className="rounded-md w-full h-46 object-cover mb-4" />
                        
                        <h3 className="text-2xl font-bold mb-2">Product Visualization</h3>
                        <p className="text-gray-300">
                            I specialize in creating intuitive product visualizations that help businesses convey their offerings in a visually appealing way.
                        </p>
                    </div>

                    {/* Availability Card */}
                    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-full hover:scale-105 transition-transform duration-300">
                        <div className="-ml-2">
                            <Globe
                                height={330}
                                width={330}
                                backgroundColor="rgba(219, 82, 82, 0)"
                                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 28.7041, lng: 77.1025, text: 'Delhi, India', color: 'white', size: 15 }]}
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Availability</h3>
                        <p className="text-gray-300">
                            I'm available for freelance work and collaborations worldwide.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col justify-between items-stretch min-h-full hover:scale-105 transition-transform duration-300">
                        <img src="/assets/dialer.png" alt="Contact" className="rounded-md w-full h-46 object-cover mt-10" />
                        <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
                        <div className="flex cursor-pointer md:-mt-10" onClick={handleCopy}>
                            {copyMessage ? (
                                <TiTickOutline className="text-green-500 md:-mt-10" size={30} />
                            ) : (
                                <BsCopy color="grey" size={30} className="md:-mt-10" />
                            )}
                            <p className="ml-3 text-lg sm:text-sm text-gray-300 md:text-lg md:-mt-10">
                                contact@buildwithparadox.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Form Popup */}
            {isFormOpen && (
                <ContactForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
            )}
        </section>
    );
};

export default AboutSection;
