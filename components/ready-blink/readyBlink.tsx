"use client";

import gsap from "gsap";
import Image from "next/image";
import BlinkImage from "../../assets/image/blink-with-hand.png";
import GoogleButton from "../../assets/image/download-button.svg";
import AppleButton from "../../assets/image/download-button-apple.svg";
import BlinkBg from "../../assets/image/blink-bg.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ReadyBlink() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.from(sectionRef.current, {
                y: 100,
                opacity: 0,
                scale: 0.9,
                duration: 1,
                ease: "power3.out",
            });

            tl.from(
                imageRef.current,
                {
                    y: 80,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "-=0.5"
            );

            tl.from(
                textRef.current,
                {
                    y: 60,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                },
                "-=0.3"
            );

            tl.from(
                buttonsRef.current,
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.out",
                },
                "-=0.2"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);
    return (
        <section className=" overflow-hidden bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] relative">
            <div className="container">
                <div className="absolute top-0 -left-38 right-0 h-95 2xl:h-116">
                    <Image
                        src={BlinkBg}
                        alt="Blink Bg"
                        fill
                        className="object-cover"
                    />
                </div>
                <div ref={sectionRef} className="pl-6 lg:pl-30 xl:pl-51.75 pr-6 lg:pr-30 xl:pr-50.75 flex flex-col sm:flex-row items-center gap-5 md:gap-10  ">
                    <div ref={imageRef} className="mt-8 md:mt-15">
                        <Image
                            src={BlinkImage}
                            alt="Blink Image"
                            width={546}
                            height={666}
                        />
                    </div>
                    <div ref={textRef} className="relative z-20 pb-8 sm:pb-0">
                        <h2 className="text-3xl md:text-4xl xl:text-[56px] font-blinker xl:leading-14 text-white font-normal">Ready to experience Blink?</h2>
                        <p className="text-base md:text-lg font-normal font-blinker md:leading-6 text-white w-full max-w-[288px] mt-3">Download the app and discover a more intuitive way to bank.</p>

                        <div ref={buttonsRef} className="flex items-center gap-2.5 mt-8">
                            <Link href={"/"} className="w-full max-w-35.25 group">
                                <Image
                                    src={GoogleButton}
                                    alt="Google Button"
                                    width={141}
                                    height={47}
                                    className="transition-all duration-500 ease-out
        group-hover:scale-105 group-hover:-translate-y-0.5"
                                />
                            </Link>
                            <Link href={"/"} className="w-full max-w-35.25 group">
                                <Image
                                    src={AppleButton}
                                    alt="Apple Button"
                                    width={141}
                                    height={47}
                                    className="transition-all duration-500 ease-out
        group-hover:scale-105 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
