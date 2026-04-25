"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MasterCard1 from "../../assets/image/master-card1.svg";
import MasterCard2 from "../../assets/image/master-card2.svg";
import MasterCard3 from "../../assets/image/master-card3.svg";

gsap.registerPlugin(ScrollTrigger);

export default function CreditCard() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftSideRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);


    // SECTION ANIMATION
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { y: 80, opacity: 0, scale: 0.85 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // LEFT SIDE STAGGER ANIMATION
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: leftSideRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            });

            tl.from(leftSideRef.current, {
                y: 100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            tl.from(headingRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.6
            }, "-=0.3");

            tl.from(textRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.6
            }, "-=0.3");

            tl.from(buttonRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.5
            }, "-=0.2");
        }, leftSideRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
    const ctx = gsap.context(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(card1Ref.current,
            {
                y: 120,
                opacity: 0,
                rotate: -20,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 1,
                rotate: -10,
                scale: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        tl.fromTo(card2Ref.current,
            {
                y: 120,
                opacity: 0,
                rotate: 20,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 1,
                rotate: 8,
                scale: 1,
                duration: 1,
                ease: "power3.out"
            },
            "-=0.7"
        );

        tl.fromTo(card3Ref.current,
            {
                y: 120,
                opacity: 0,
                rotate: 40,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 1,
                rotate: 28,
                scale: 1,
                duration: 1,
                ease: "power3.out"
            },
            "-=0.7"
        );

    }, sectionRef);

    return () => ctx.revert();
}, []);

    return (
        <div ref={sectionRef} className=" bg-[#FBF8E9] rounded-3xl sm:rounded-[40px] flex flex-col lg:flex-row justify-between gap-5 relative ">
            {/* LEFT SIDE */}
            <div ref={leftSideRef} className="order-2 lg:order-1 w-full lg:max-w-2xl pr-6 lg:pr-0 py-6 lg:py-12 pl-6 lg:pl-12">
                <h3 ref={headingRef} className=" leading-8 sm:leading-10 xl:leading-15">Manage All Your Credit Cards In One Place.</h3>
                <p ref={textRef} className="text-base lg:text-xl font-normal opacity-80 mt-5">Keep track of multiple credit cards effortlessly within the Blink app. Monitor balances, track transactions, and stay on top of payments without switching between different accounts.</p>

                <div ref={buttonRef} className="w-fit bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full mt-10 sm:mt-26.5">
                    <div className="w-37.5 flex items-center bg-[#FBF8E9] rounded-full">
                        <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold  cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">Explore</button>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="order-1 lg:order-2 w-full max-w-151 sm:max-w-122.5 relative -top-5 lg:-top-12 sm:-right-14 md:-right-28 lg:right-12 xl:right-4 min-h-49 sm:min-h-112.5">
                <div ref={card1Ref} className="w-30 sm:w-58.75 absolute top-0 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-11 -rotate-10 z-10">
                    <Image
                        src={MasterCard1}
                        alt="Master Card1"
                        width={235}
                        height={373}
                    />
                </div>

                <div ref={card2Ref} className="w-30 sm:w-58.75 absolute top-0 left-[56%] -translate-x-1/2 sm:translate-x-0 sm:left-28 rotate-8 z-20">
                    <Image
                        src={MasterCard2}
                        alt="Master Card2"
                        width={235}
                        height={373}
                    />
                </div>
                <div ref={card3Ref} className="w-30 sm:w-58.75 absolute top-6 sm:top-12 left-[61%] -translate-x-1/2 sm:translate-x-0 sm:left-48 rotate-28 z-30">
                    <Image src={MasterCard3}
                        alt="Master Card3"
                        width={235}
                        height={373}
                    />
                </div>
                <div className="bg-[#887C3D] absolute w-full max-w-150 h-8.5 bottom-0 sm:-bottom-4 right-0 sm:right-20 blur-[65px]"></div>
            </div>

        </div>
    );
}
