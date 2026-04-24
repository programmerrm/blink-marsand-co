"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import buildBg from "../../assets/image/built-bg.png";
import bankWith from "../../assets/image/bank-with-bg.png";
import moveMoney from "../../assets/image/move-money-bg.png";
import handWithPhone from "../../assets/image/hand-with-phone.png";

gsap.registerPlugin(ScrollTrigger);

export default function Security() {
    const headingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!headingRef.current) return;

        const ctx = gsap.context(() => {

            // HEADING
            gsap.fromTo(
                headingRef.current,
                { y: 80, opacity: 0, scale: 0.85 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 100%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            const cards = gsap.utils.toArray<HTMLElement>(".card-item");

            ScrollTrigger.matchMedia({

                // DESKTOP
                "(min-width: 768px)": () => {
                    gsap.fromTo(cards[2],
                        { y: 100, opacity: 0, scale: 0.9 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: cards[2],
                                start: "top 85%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                    gsap.fromTo(cards[1],
                        { y: 100, opacity: 0, scale: 0.9 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: cards[1],
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                    gsap.fromTo(cards[0],
                        { y: 100, opacity: 0, scale: 0.9 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: cards[0],
                                start: "top 75%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                },

                // MOBILE
                "(max-width: 767px)": () => {

                    gsap.fromTo(cards[0],
                        { y: 100, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            scrollTrigger: {
                                trigger: cards[0],
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );

                    gsap.fromTo(cards[1],
                        { y: 100, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            scrollTrigger: {
                                trigger: cards[1],
                                start: "top 75%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );

                    gsap.fromTo(cards[2],
                        { y: 100, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            scrollTrigger: {
                                trigger: cards[2],
                                start: "top 70%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                }

            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-6.25 lg:py-12.5">
            <div className="container">

                <div ref={headingRef} className="w-full max-w-145 text-center mx-auto">
                    <h2 className="bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent mb-5"><span className="text-[#004737]">What Blink Will</span> <span className="">Unlock</span></h2>
                    <p className="text-base lg:text-xl font-normal opacity-80">Unlock convenience and efficiency with standout features, revolutionizing your banking journey.</p>
                </div>

                <div className="grid sm:grid-cols-3 items-end gap-4 xl:gap-8.25 mt-14 card-wrapper">

                    <div className="rounded-[20px] bg-[#3DC2D5] relative overflow-hidden card-item">

                        <div className="pt-5 xl:pt-10 px-5 xl:px-10 -mb-5">
                            <h3 className="font-normal font-blinker leading-5 lg:leading-6 xl:leading-8">Move money with ease</h3>
                            <p className="text-lg xl:text-2xl leading-4.5 xl:leading-6 font-blinker font-normal text-[#004B51] mt-4">Send, receive, pay, and manage your money from one smart app</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={moveMoney}
                                alt="move Money bg"
                                width={540}
                                height={382}

                            />
                        </div>
                    </div>

                    <div className="rounded-[20px] relative overflow-hidden card-item">
                        <div className="w-full sm:max-w-104.5 h-80 sm:h-full">
                            <Image
                                src={bankWith}
                                alt="bank With bg"
                                width={418}
                                height={510}
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="absolute inset-0 z-30">
                            <div className="flex flex-col justify-between h-full pr-3 md:pr-6.5">
                                <div className="pt-5 xl:pt-10 pl-5 xl:pl-10 xl:pr-4">
                                    <h3 className="font-normal font-blinker leading-5 lg:leading-6 xl:leading-8 text-[#05282B]">
                                        Bank with more control
                                    </h3>
                                    <p className="text-lg xl:text-2xl leading-4.5 xl:leading-6 font-blinker font-normal text-[#05282B] mt-4">
                                        Track, save, and stay on top of your money with a simpler digital experience.
                                    </p>
                                </div>
                                <div className="w-full max-w-77.25 ml-auto mt-2 sm:mt-4">
                                    <Image
                                        src={handWithPhone}
                                        alt="hand With Phone"
                                        width={309}
                                        height={351}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[20px] relative overflow-hidden card-item">
                        <div className="w-full h-67.5 sm:h-full">
                            <Image
                                src={buildBg}
                                alt="build bg"
                                width={418}
                                height={635}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute top-0 z-30 pt-5 xl:pt-10 px-5 xl:px-10">
                            <h3 className="font-normal font-blinker leading-5 lg:leading-6 xl:leading-8 text-white">Built for trust</h3>
                            <p className="text-lg xl:text-2xl leading-4.5 xl:leading-6 font-blinker font-normal text-white mt-4">Security, reliability, and the confidence of City Bank PLC behind every step</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

