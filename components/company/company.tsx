"use client";

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nagadImage from "../../assets/image/nagad.png";
import bkashImage from "../../assets/image/bkash.png";
import metlifeImage from "../../assets/image/metlife.png";
import americanImage from "../../assets/image/american.png";
import bangladeshBank from "../../assets/image/bangladesh-bank.png";

gsap.registerPlugin(ScrollTrigger);

export default function Company() {
    const leftSideRef = useRef<HTMLDivElement>(null);
    const rightSideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!leftSideRef.current || !rightSideRef.current)
            return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                leftSideRef.current,
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.85
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftSideRef.current,
                        start: "top 100%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
            gsap.fromTo(
                rightSideRef.current,
                {
                    y: 80,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: rightSideRef.current,
                        start: "top 100%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section className="pb-6 md:pb-12.5 pt-12.5 xl:pt-25">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between xl:px-7 xl:py-6 gap-5 lg:gap-10">


                    <div ref={leftSideRef} className="w-full md:max-w-83 lg:max-w-94 xl:max-w-104.25">
                        <p className="text-xs sm:text-base xl:text-xl font-medium uppercase text-[#01292C] leading-6 xl:leading-7.5">WE ARE PARTNERED WITH MORE THAN 50+ companies around the globe.</p>
                    </div>

                    <div ref={rightSideRef} className="flex items-center justify-center gap-3 lg:gap-6 w-full md:max-w-201.25 relative">
                        <div className="absolute top-0 -left-11 xl:-left-7 2xl:left-0 w-17 h-full bg-white blur-[10px]"></div>
                        <div className="absolute top-0 -right-4 sm:-right-5 xl:-right-10 2xl:right-0 w-7 sm:w-10 xl:w-20 h-full bg-white blur-[5px]"></div>
                        <Link href="#">
                            <Image
                                src={bkashImage}
                                alt="bkash Image"
                                width={94}
                                height={40}
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src={nagadImage}
                                alt="nagad Image"
                                width={120}
                                height={40}
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src={metlifeImage}
                                alt="metlife Image"
                                width={160}
                                height={40}
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src={bangladeshBank}
                                alt="bangladesh Bank"
                                width={60}
                                height={60}
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src={americanImage}
                                alt="american Image"
                                width={168}
                                height={48}
                            />
                        </Link>
                    </div>


                </div>
            </div>
        </section>
    );
}
