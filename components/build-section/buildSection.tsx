"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import errowTop from "../../assets/icon/errow-top.svg";
import BackedIcon from "../../assets/icon/backed.svg";
import designedIcon from "../../assets/icon/designed.svg";
import buildImage from "../../assets/image/build-image.png";
import buildIphone from "../../assets/image/build-i-phone.png";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function BuildSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const leftCardRef = useRef<HTMLDivElement>(null);
    const middleRef = useRef<HTMLDivElement>(null);
    const phoneRef = useRef<HTMLDivElement>(null);
    const rightSideRef = useRef<HTMLDivElement>(null);
    const rightCard1Ref = useRef<HTMLDivElement>(null);
    const rightCard2Ref = useRef<HTMLDivElement>(null);
    const leftImageRef = useRef<HTMLDivElement>(null);
    const leftIconRef = useRef<HTMLAnchorElement>(null);
    const rightIcon1Ref = useRef<HTMLDivElement>(null);
    const rightIcon2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                headingRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 88%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                leftCardRef.current,
                { x: -80, opacity: 0, scale: 0.95 },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                }
            );

            tl.fromTo(
                leftIconRef.current,
                { scale: 0, rotate: -20 },
                {
                    scale: 1,
                    rotate: 0,
                    duration: 0.5,
                    ease: "back.out(2.5)",
                },
                "-=0.5"
            );

            tl.fromTo(
                leftImageRef.current,
                { clipPath: "inset(100% 0 0 0)", opacity: 0 },
                {
                    clipPath: "inset(0% 0 0 0)",
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                },
                "-=0.4"
            );

            tl.fromTo(
                middleRef.current,
                { scaleY: 0.6, opacity: 0, transformOrigin: "bottom center" },
                {
                    scaleY: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.8"
            );

            tl.fromTo(
                phoneRef.current,
                { y: 100, opacity: 0, scale: 0.85 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "back.out(1.6)",
                },
                "-=0.7"
            );

            tl.fromTo(
                rightCard1Ref.current,
                { x: 80, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                },
                "-=0.9"
            );

            tl.fromTo(
                rightIcon1Ref.current,
                { scale: 0, rotate: 15 },
                {
                    scale: 1,
                    rotate: 0,
                    duration: 0.5,
                    ease: "back.out(2.5)",
                },
                "-=0.4"
            );

            tl.fromTo(
                rightCard2Ref.current,
                { x: 80, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                },
                "-=0.6"
            );

            tl.fromTo(
                rightIcon2Ref.current,
                { scale: 0, rotate: 15 },
                {
                    scale: 1,
                    rotate: 0,
                    duration: 0.5,
                    ease: "back.out(2.5)",
                },
                "-=0.4"
            );

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 75%",
                onEnter: () => {
                    setTimeout(() => {
                        gsap.to(phoneRef.current, {
                            y: -14,
                            duration: 2.2,
                            repeat: -1,
                            yoyo: true,
                            ease: "sine.inOut",
                        });
                    }, 2000);
                },
                once: true,
            });

            const leftCard = leftCardRef.current;
            if (leftCard) {
                leftCard.addEventListener("mouseenter", () => {
                    gsap.to(leftCard, {
                        y: -6,
                        boxShadow: "0 20px 40px rgba(0,104,112,0.15)",
                        duration: 0.3,
                        ease: "power2.out",
                    });
                });
                leftCard.addEventListener("mouseleave", () => {
                    gsap.to(leftCard, {
                        y: 0,
                        boxShadow: "0 0px 0px rgba(0,0,0,0)",
                        duration: 0.4,
                        ease: "power2.out",
                    });
                });
            }

            const rCard1 = rightCard1Ref.current;
            if (rCard1) {
                rCard1.addEventListener("mouseenter", () => {
                    gsap.to(rCard1, { y: -6, duration: 0.3, ease: "power2.out" });
                });
                rCard1.addEventListener("mouseleave", () => {
                    gsap.to(rCard1, { y: 0, duration: 0.4, ease: "power2.out" });
                });
            }

            const rCard2 = rightCard2Ref.current;
            if (rCard2) {
                rCard2.addEventListener("mouseenter", () => {
                    gsap.to(rCard2, { y: -6, duration: 0.3, ease: "power2.out" });
                });
                rCard2.addEventListener("mouseleave", () => {
                    gsap.to(rCard2, { y: 0, duration: 0.4, ease: "power2.out" });
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-[linear-gradient(177.54deg,rgba(58,194,214,0.68)_-179.92%,rgba(75,195,190,0.304727)_-133.27%,rgba(89,196,171,0)_-95.39%,rgba(65,194,205,0.53425)_-30.13%,rgba(126,199,121,0)_-0.61%,#99CA54_125.33%,rgba(169,203,62,0)_205.16%,rgba(176,204,54,0)_256.82%,rgba(176,204,54,0)_289.69%)] pb-12 py-10 md:py-12.5 lg:py-25">
            <div className="container">

                <div ref={headingRef} className="w-full max-w-135 text-center mx-auto">
                    <h2 className="bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] bg-clip-text text-transparent mb-1 md:mb-5">
                        Build to feel modern
                    </h2>
                    <h2 className="bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent mb-4 md:mb-5">
                        Backed to fell Trusted
                    </h2>
                    <p className="text-base lg:text-xl font-normal opacity-80">
                        Discover why Blink is the smart choice for secure banking and personalized financial growth.
                    </p>
                </div>

                <div
                    ref={sectionRef}
                    className="flex items-center justify-between flex-col md:flex-row gap-y-28 gap-3 lg:gap-10 xl:gap-19.25 mt-8 md:mt-16 lg:mt-35 lg:mb-20"
                >

                    <div
                        ref={leftCardRef}
                        className="w-full max-w-103.5 bg-[#FBF8E9] rounded-2xl p-4"
                    >
                        <Link
                            ref={leftIconRef}
                            href="#"
                            className="inline-block w-full max-w-8 lg:max-w-12"
                        >
                            <Image
                                src={errowTop}
                                alt="errow Top"
                                width={48}
                                height={48}
                            />
                        </Link>
                        <h5 className="text-base lg:text-xl lg:leading-7.5">
                            Made for Bangladesh
                        </h5>
                        <p className="text-sm lg:text-base leading-5 lg:leading-6 mt-2 text-[#004737]/80">
                            Built around safe access, protection, and customer reassurance
                        </p>
                        <div ref={leftImageRef} className="w-full max-w-95.5 mt-4">
                            <Image
                                src={buildImage}
                                alt="build Image"
                                width={382}
                                height={281}
                            />
                        </div>
                    </div>

                    <div
                        ref={middleRef}
                        className="w-full max-w-84.5 relative"
                    >
                        <div className="bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] h-104 w-full rounded-2xl flex items-center justify-center">
                            <div
                                ref={phoneRef}
                                className="w-full max-w-73.5 absolute -top-22 md:-top-7 lg:-top-22"
                            >
                                <Image
                                    src={buildIphone}
                                    alt="buildIphone"
                                    width={294}
                                    height={602}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        ref={rightSideRef}
                        className="w-full max-w-103.5"
                    >
                        <div className="flex flex-col gap-3 lg:gap-10">

                            <div
                                ref={rightCard1Ref}
                                className="w-full max-w-103.5 bg-[#FBF8E9] rounded-2xl px-4 pt-4 pb-5.5"
                            >
                                <div
                                    ref={rightIcon1Ref}
                                    className="inline-block w-full max-w-8 lg:max-w-12"
                                >
                                    <Image
                                        src={BackedIcon}
                                        alt="Backed Icon"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <h5 className="text-base lg:text-xl lg:leading-7.5">
                                    Backed By City Bank Plc.
                                </h5>
                                <p className="text-sm lg:text-base leading-5 lg:leading-6 mt-2 text-[#004737]/80">
                                    Blink combines digital convenience with the confidence of an established bank.
                                </p>
                            </div>

                            <div
                                ref={rightCard2Ref}
                                className="w-full max-w-103.5 bg-[#FBF8E9] rounded-2xl px-4 pt-4 pb-5.5"
                            >
                                <div
                                    ref={rightIcon2Ref}
                                    className="inline-block w-full max-w-8 lg:max-w-12"
                                >
                                    <Image
                                        src={designedIcon}
                                        alt="designed Icon"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <h5 className="text-base lg:text-xl lg:leading-7.5">
                                    Designed with security in mind
                                </h5>
                                <p className="text-sm lg:text-base leading-5 lg:leading-6 mt-2 text-[#004737]/80">
                                    Built around safe access, protection, and customer reassurance
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
