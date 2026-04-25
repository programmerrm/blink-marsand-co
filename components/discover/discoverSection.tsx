"use client";

import gsap from "gsap";
import LoansCard from "./loansCard";
import CreditCard from "./creditCard";
import { useEffect, useRef } from "react";
import BlinkAccountCard from "./blinkAccount";
import SendReciveCard from "./sendReceiveCard";
import BillPaymentCard from "./billPaymentCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Discover() {
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
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-6.25 lg:py-12.5">
            <div className="container">
                <div ref={headingRef} className="w-full max-w-150 text-center mx-auto">
                    <h2 className="bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent mb-5"><span className="text-[#004737]">Discover What We </span> <span className="">Offer</span></h2>
                    <p className="text-base lg:text-xl font-normal opacity-80">Unlock convenience and efficiency with standout features, revolutionizing your banking journey.</p>
                </div>
                <div className="mt-16 lg:mt-30 space-y-16 lg:space-y-30">
                    <CreditCard />
                    <BillPaymentCard />
                    <SendReciveCard />
                    <BlinkAccountCard />
                    <LoansCard />
                </div>
            </div>
        </section>
    );
}
