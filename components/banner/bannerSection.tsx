"use client";

import gsap from "gsap";
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrowIcon from "../../assets/icon/arrow-left.png";
import iphoneImage from "../../assets/image/iphone-14-pro.png";

gsap.registerPlugin(ScrollTrigger);

export default function BannerSection() {
    const bannerRef = useRef<HTMLDivElement>(null);
    const rightSideRef = useRef<HTMLDivElement>(null);
    const leftSideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!rightSideRef.current || !leftSideRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                rightSideRef.current,
                {
                    y: 400,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: rightSideRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
            gsap.fromTo(
                leftSideRef.current,
                {
                    y: -300,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftSideRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={bannerRef} className="relative rounded-b-4xl lg:rounded-b-[80px] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10 opacity-20"
            >
                <source src="/banner-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 z-0 bg-[linear-gradient(177.34deg,rgba(58,194,214,0.68)_-188.89%,rgba(75,195,190,0.304727)_-142.4%,rgba(89,196,171,0)_-104.64%,rgba(126,199,121,0)_2.11%,rgba(65,194,205,0.53425)_35.09%,#99CA54_115.35%,rgba(169,203,62,0)_194.92%,rgba(176,204,54,0)_246.41%,rgba(176,204,54,0)_279.17%)]" />
            <div className="pt-10 md:pt-19.5 relative z-30">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16 ">
                        {/* LEFT SIDE */}
                        <div ref={leftSideRef} className="w-full md:max-w-181.5 pt-2 pb-10">
                            <Link href="#" className="bg-[#FBF8E9] flex items-center justify-between gap-1.5 md:gap-2 w-fit px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs md:text-base font-medium leading-5 mb-6"><span>Be first to know when Blink goes live</span>
                                <div className="w-full max-w-4 md:max-w-6">
                                    <Image
                                        src={arrowIcon}
                                        alt="arrowIcon"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </Link>
                            <h1>Banking, reimagined for the way Bangladesh moves.</h1>
                            <p className="text-base md:text-lg xl:text-xl font-medium xl:leading-7.5 text-[#01292C] mt-6">Blink is almost here. A new digital banking experience by City Bank PLC designed to make everyday money simpler, faster, and more intuitive.</p>
                            <div className=" flex items-center gap-4 mt-8">
                                <Link href={"/"} className="w-fit px-4 xl:px-6 py-2 xl:py-3.5 text-sm xl:text-base leading-5 font-semibold text-black cursor-pointer transition-all rounded-full bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)]">
                                    Download App
                                </Link>
                                <Link href={"/"} className="w-fit px-4 xl:px-6 py-1.75 xl:py-3.25 text-sm xl:text-base leading-5 font-semibold text-[#01292C] cursor-pointer transition-all rounded-full hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] border border-[#01292C]">
                                    Explore Blink
                                </Link>
                            </div>
                            <ul className="flex flex-col lg:flex-row mt-8 gap-y-3 gap-x-10">
                                <li className="text-sm sm:text-base leading-5 font-medium relative lg:after:absolute after:content-[''] after:bg-[#01292C] after:w-px after:h-3.5 after:top-1/2 after:-translate-y-1/2 after:-right-5 last:after:hidden">Backed by City Bank PLC</li>
                                <li className="text-sm sm:text-base leading-5 font-medium relative lg:after:absolute after:content-[''] after:bg-[#01292C] after:w-px after:h-3.5 after:top-1/2 after:-translate-y-1/2 after:-right-5 last:after:hidden">Secure by design</li>
                                <li className="text-sm sm:text-base leading-5 font-medium relative lg:after:absolute after:content-[''] after:bg-[#01292C] after:w-px after:h-3.5 after:top-1/2 after:-translate-y-1/2 after:-right-5 last:after:hidden">Bangladesh Bank licensed</li>
                            </ul>
                        </div>
                        {/* RIGHT SIDE */}
                        <div ref={rightSideRef} className="xl:pr-16 flex items-end justify-end">
                            <div className="w-full md:max-w-103.75 flex items-center justify-center">
                                <Image
                                    src={iphoneImage}
                                    alt="iphoneImage"
                                    width={415}
                                    height={846}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
