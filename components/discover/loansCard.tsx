"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoansImage from "../../assets/image/loans.png";

gsap.registerPlugin(ScrollTrigger);

export default function LoansCard() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftSideRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

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
    return (
        <div ref={sectionRef} className=" bg-[#004737] rounded-3xl sm:rounded-[40px] flex flex-col lg:flex-row justify-between gap-5 relative ">
            <div ref={leftSideRef} className="order-2 lg:order-1 w-full lg:max-w-2xl pr-6 lg:pr-0 py-6 lg:py-12 pl-6 lg:pl-12">
                <h3 ref={headingRef} className=" leading-8 sm:leading-10 xl:leading-15 text-white">Loans & Deposits</h3>
                <p ref={textRef} className="text-base lg:text-xl font-normal opacity-80 mt-5 text-white">Gain valuable insights into your spending habits with Blink intelligent analysis tools. Understand where your money is going, receive personalized recommendations for saving, and make informed financial decisions to achieve your goals faster.</p>

                <div ref={buttonRef} className="w-fit bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full mt-10 sm:mt-34">
                    <div className="w-37.5 flex items-center bg-[#004737] rounded-full">
                        <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold  cursor-pointer transition-all rounded-full hover:text-white hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">Explore</button>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2 w-full max-w-151 sm:max-w-122.5 relative -top-10 sm:-top-14 lg:-top-17 sm:-right-14 md:-right-28 lg:right-12 xl:right-10 min-h-49 sm:min-h-120">
                <div className="w-50 sm:w-100 absolute top-0 left-1/2 -translate-x-1/2 z-30">
                    <Image
                        src={LoansImage}
                        alt="Loans Image"
                        width={400}
                        height={517}
                    />
                </div>
            </div>
        </div>
    );
}
