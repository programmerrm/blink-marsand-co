"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BillPaymentIcon from "../../assets/icon/bill-payment.svg";
import UploadIcon from "../../assets/icon/upload-icon.svg";
import transferIcon from "../../assets/icon/transfer-icon.svg";
import blinkImg2 from "../../assets/image/blink-send-money.png";
import blinkImg3 from "../../assets/image/blink-cash.png";
import CoinIcon from "../../assets/icon/coin-icon.svg";
import bulbIcon from "../../assets/icon/bulb.svg";
import errowRightIcon from "../../assets/icon/chevron-right.svg";
import OnlineBanking from "../../assets/image/online-banking.png";
import appFeatureBg from "../../assets/image/app-feature-bg.png";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AppFeature() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeIndexRef = useRef(0);

    const headingH2Ref    = useRef<HTMLHeadingElement>(null);
    const headingPRef     = useRef<HTMLParagraphElement>(null);
    const tab0Ref         = useRef<HTMLDivElement>(null);
    const tab1Ref         = useRef<HTMLDivElement>(null);
    const tab2Ref         = useRef<HTMLDivElement>(null);
    const exploreBtnRef   = useRef<HTMLDivElement>(null);
    const featureCardRef  = useRef<HTMLDivElement>(null);
    const featureInnerRef = useRef<HTMLDivElement>(null);
    const coinRef         = useRef<HTMLDivElement>(null);
    const onlineBankRef   = useRef<HTMLDivElement>(null);

    const tabSectionRef   = useRef<HTMLDivElement>(null);

    const bizSectionRef  = useRef<HTMLDivElement>(null);
    const bizImgWrapRef  = useRef<HTMLDivElement>(null);
    const bizImgRef      = useRef<HTMLImageElement>(null);
    const bizH3Ref       = useRef<HTMLHeadingElement>(null);
    const bizPRef        = useRef<HTMLParagraphElement>(null);
    const bizBtnRef      = useRef<HTMLDivElement>(null);

    const rwdSectionRef = useRef<HTMLDivElement>(null);
    const rwdImgWrapRef = useRef<HTMLDivElement>(null);
    const rwdImgRef     = useRef<HTMLImageElement>(null);
    const rwdH3Ref      = useRef<HTMLHeadingElement>(null);
    const rwdPRef       = useRef<HTMLParagraphElement>(null);
    const rwdBtnRef     = useRef<HTMLDivElement>(null);

    const switchTab = (newIndex: number) => {
        if (newIndex === activeIndexRef.current) return;
        const inner = featureInnerRef.current;
        if (!inner) {
            activeIndexRef.current = newIndex;
            setActiveIndex(newIndex);
            return;
        }

        gsap.timeline()
            .to(inner, {
                opacity: 0,
                scale: 0.96,
                filter: "blur(6px)",
                y: -8,
                duration: 0.28,
                ease: "power3.in",
                onComplete: () => {
                    activeIndexRef.current = newIndex;
                    setActiveIndex(newIndex);
                },
            })
            .fromTo(
                inner,
                { opacity: 0, scale: 1.03, filter: "blur(6px)", y: 10 },
                { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, duration: 0.42, ease: "power3.out" }
            );
    };

    useEffect(() => {
        const ctx = gsap.context(() => {

            if (tabSectionRef.current) {
                ScrollTrigger.create({
                    trigger: tabSectionRef.current,
                    start: "33% center",
                    end: "66% center",
                    onEnter: () => switchTab(1),
                    onLeaveBack: () => switchTab(0),
                });

                ScrollTrigger.create({
                    trigger: tabSectionRef.current,
                    start: "66% center",
                    end: "100% center",
                    onEnter: () => switchTab(2),
                    onLeaveBack: () => switchTab(1),
                });
            }

            if (headingH2Ref.current) {
                const split = new SplitText(headingH2Ref.current, { type: "chars,words" });
                gsap.set(headingH2Ref.current, { perspective: 600 });
                gsap.fromTo(
                    split.chars,
                    { opacity: 0, y: 60, rotateX: -90, transformOrigin: "0% 50% -20px" },
                    {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        duration: 0.7,
                        ease: "back.out(1.8)",
                        stagger: { amount: 0.55 },
                        scrollTrigger: {
                            trigger: headingH2Ref.current,
                            start: "top 88%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            if (headingPRef.current) {
                const splitP = new SplitText(headingPRef.current, { type: "words" });
                gsap.fromTo(
                    splitP.words,
                    { opacity: 0, y: 18, filter: "blur(5px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.55,
                        ease: "power2.out",
                        stagger: { amount: 0.45 },
                        delay: 0.35,
                        scrollTrigger: {
                            trigger: headingPRef.current,
                            start: "top 88%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            gsap.fromTo(
                [tab0Ref.current, tab1Ref.current, tab2Ref.current, exploreBtnRef.current],
                { x: -70, opacity: 0, rotateY: -18, filter: "blur(5px)", transformOrigin: "left center" },
                {
                    x: 0,
                    opacity: 1,
                    rotateY: 0,
                    filter: "blur(0px)",
                    stagger: 0.12,
                    duration: 0.95,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: tab0Ref.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                featureCardRef.current,
                { y: 90, opacity: 0, scale: 0.88, rotateX: 10, filter: "blur(10px)", transformOrigin: "center bottom" },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    filter: "blur(0px)",
                    duration: 1.3,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: featureCardRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                coinRef.current,
                { scale: 0, rotate: -30, opacity: 0 },
                {
                    scale: 1,
                    rotate: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "elastic.out(1.2, 0.5)",
                    delay: 0.7,
                    scrollTrigger: {
                        trigger: featureCardRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                onlineBankRef.current,
                { y: 60, opacity: 0, scale: 0.93 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.1,
                    ease: "elastic.out(1, 0.55)",
                    delay: 0.9,
                    scrollTrigger: {
                        trigger: featureCardRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            const bizTl = gsap.timeline({
                scrollTrigger: {
                    trigger: bizSectionRef.current,
                    start: "top 78%",
                    toggleActions: "play none none reverse",
                },
            });

            bizTl.fromTo(
                bizImgWrapRef.current,
                { x: -100, opacity: 0, borderRadius: "50%", scale: 0.72, filter: "blur(14px)" },
                { x: 0, opacity: 1, borderRadius: "16px", scale: 1, filter: "blur(0px)", duration: 1.3, ease: "expo.out" }
            );

            bizTl.fromTo(
                bizImgRef.current,
                { clipPath: "inset(0 100% 0 0)", scale: 1.12 },
                { clipPath: "inset(0 0% 0 0)", scale: 1, duration: 1.2, ease: "power4.inOut" },
                "-=0.8"
            );

            if (bizH3Ref.current) {
                const splitBiz = new SplitText(bizH3Ref.current, { type: "words" });
                gsap.set(bizH3Ref.current, { perspective: 600 });
                bizTl.fromTo(
                    splitBiz.words,
                    { y: 50, opacity: 0, rotateX: -55, transformOrigin: "0 50% -30px" },
                    { y: 0, opacity: 1, rotateX: 0, stagger: 0.055, duration: 0.65, ease: "back.out(1.6)" },
                    "-=0.6"
                );
            }
            bizTl.fromTo(
                [bizPRef.current, bizBtnRef.current],
                { y: 28, opacity: 0, filter: "blur(5px)" },
                { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.14, duration: 0.7, ease: "power3.out" },
                "-=0.35"
            );
            gsap.to(bizImgRef.current, {
                y: -45,
                ease: "none",
                scrollTrigger: {
                    trigger: bizSectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });

            const rwdTl = gsap.timeline({
                scrollTrigger: {
                    trigger: rwdSectionRef.current,
                    start: "top 78%",
                    toggleActions: "play none none reverse",
                },
            });

            if (rwdH3Ref.current) {
                const splitRwd = new SplitText(rwdH3Ref.current, { type: "words" });
                gsap.set(rwdH3Ref.current, { perspective: 600 });
                rwdTl.fromTo(
                    splitRwd.words,
                    { y: 50, opacity: 0, rotateX: -55, transformOrigin: "0 50% -30px" },
                    { y: 0, opacity: 1, rotateX: 0, stagger: 0.055, duration: 0.65, ease: "back.out(1.6)" }
                );
            }

            rwdTl.fromTo(
                [rwdPRef.current, rwdBtnRef.current],
                { y: 28, opacity: 0, filter: "blur(5px)" },
                { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.14, duration: 0.7, ease: "power3.out" },
                "-=0.35"
            );

            rwdTl.fromTo(
                rwdImgWrapRef.current,
                { x: 100, opacity: 0, borderRadius: "50%", scale: 0.72, filter: "blur(14px)" },
                { x: 0, opacity: 1, borderRadius: "16px", scale: 1, filter: "blur(0px)", duration: 1.3, ease: "expo.out" },
                "-=0.85"
            );

            rwdTl.fromTo(
                rwdImgRef.current,
                { clipPath: "inset(0 0 0 100%)", scale: 1.12 },
                { clipPath: "inset(0 0 0 0%)", scale: 1, duration: 1.2, ease: "power4.inOut" },
                "-=0.8"
            );

            gsap.to(rwdImgRef.current, {
                y: 45,
                ease: "none",
                scrollTrigger: {
                    trigger: rwdSectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });

            [bizImgWrapRef.current, rwdImgWrapRef.current].forEach((card) => {
                if (!card) return;
                card.addEventListener("mousemove", (e: MouseEvent) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(card, {
                        rotateY: (x / rect.width) * 12,
                        rotateX: -(y / rect.height) * 12,
                        transformPerspective: 900,
                        scale: 1.02,
                        duration: 0.35,
                        ease: "power2.out",
                    });
                });
                card.addEventListener("mouseleave", () => {
                    gsap.to(card, {
                        rotateY: 0,
                        rotateX: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "elastic.out(1, 0.45)",
                    });
                });
            });

            const fCard = featureCardRef.current;
            if (fCard) {
                fCard.addEventListener("mousemove", (e: MouseEvent) => {
                    const rect = fCard.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(fCard, {
                        rotateY: (x / rect.width) * 6,
                        rotateX: -(y / rect.height) * 6,
                        transformPerspective: 1000,
                        duration: 0.4,
                        ease: "power2.out",
                    });
                });
                fCard.addEventListener("mouseleave", () => {
                    gsap.to(fCard, {
                        rotateY: 0,
                        rotateX: 0,
                        duration: 0.9,
                        ease: "elastic.out(1, 0.45)",
                    });
                });
            }

        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-10 md:py-12.5 lg:py-25 relative">
            <div className="absolute top-103 left-0 right-0 flex justify-center">
                <Image
                    src={appFeatureBg}
                    alt="app Feature Bg"
                    width={1272}
                    height={1267}
                />
            </div>
            <div className="container">

                <div className="w-full max-w-180.25">
                    <h2
                        ref={headingH2Ref}
                        className="font-inter lg:leading-15"
                    >
                        One app for your everyday money moments.
                    </h2>
                    <p
                        ref={headingPRef}
                        className="text-sm md:text-base md:leading-6.25 font-normal font-inter text-[#004737]/80 mt-3 md:mt-5.5"
                    >
                        Pay bills, transfer funds, recharge mobile, <br /> cash out, and stay in control of your day-to-day finances.
                    </p>
                </div>

                <div className="py-8 lg:py-25 md:mt-10 lg:mt-16 flex flex-col md:flex-row items-center justify-between gap-5">

                    <div
                        ref={tabSectionRef}
                        className="w-full md:max-w-133.25"
                    >
                        <div
                            ref={tab0Ref}
                            onClick={() => switchTab(0)}
                            className={`p-4 md:p-6 border-l-3 border-[#004737]/20 relative cursor-pointer transition-all ${activeIndex === 0 ? "bg-[#FBF8E9] after:absolute after:top-0 after:-left-0.75 after:bottom-0 after:w-0.75 after:bg-[#004737]" : "bg-white"}`}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-full max-w-4.5">
                                    <Image src={BillPaymentIcon} alt="Bill Payment Icon" width={18} height={18} />
                                </div>
                                <h6 className="text-base md:text-lg font-inter font-medium leading-6.5 text-[#134341]">Bill Payment & Reminders</h6>
                            </div>
                            <p className="text-sm text-[#0C231F]/60 font-inter leading-5.25 font-medium">Stay ahead of payments with Blink&apos;s smart reminders. Never miss a due date again, ensuring your bills are paid on time, every time. Enjoy peace of mind with hassle-free bill management.</p>
                        </div>

                        <div
                            ref={tab1Ref}
                            onClick={() => switchTab(1)}
                            className={`p-4 md:p-6 border-l-3 border-[#004737]/20 relative cursor-pointer transition-all ${activeIndex === 1 ? "bg-[#FBF8E9] after:absolute after:top-0 after:-left-0.75 after:bottom-0 after:w-0.75 after:bg-[#004737]" : "bg-white"}`}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-full max-w-4.5">
                                    <Image src={UploadIcon} alt="Upload Icon" width={18} height={18} />
                                </div>
                                <h6 className="text-base md:text-lg font-inter font-medium leading-6.5 text-[#134341]">Card Managment</h6>
                            </div>
                            <p className="text-sm text-[#0C231F]/60 font-inter leading-5.25 font-medium">Stay ahead of payments with Blink&apos;s smart reminders. Never miss a due date again, ensuring your bills are paid on time, every time. Enjoy peace of mind with hassle-free bill management.</p>
                        </div>

                        <div
                            ref={tab2Ref}
                            onClick={() => switchTab(2)}
                            className={`p-4 md:p-6 border-l-3 border-[#004737]/20 relative cursor-pointer transition-all ${activeIndex === 2 ? "bg-[#FBF8E9] after:absolute after:top-0 after:-left-0.75 after:bottom-0 after:w-0.75 after:bg-[#004737]" : "bg-white"}`}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-full max-w-4">
                                    <Image src={transferIcon} alt="transfer Icon" width={16} height={18} />
                                </div>
                                <h6 className="text-base md:text-lg font-inter font-medium leading-6.5 text-[#134341]">Bulk Transfers</h6>
                            </div>
                            <p className="text-sm text-[#0C231F]/60 font-inter leading-5.25 font-medium">Stay ahead of payments with Blink&apos;s smart reminders. Never miss a due date again, ensuring your bills are paid on time, every time. Enjoy peace of mind with hassle-free bill management.</p>
                        </div>

                        <div
                            ref={exploreBtnRef}
                            className="w-fit bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full mt-4 sm:mt-8"
                        >
                            <div className="w-full flex items-center bg-white rounded-full relative transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                                <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">
                                    Explore Personal Features
                                </button>
                                <span className="absolute inset-0 scale-x-0 origin-left bg-[linear-gradient(90deg,#3AC2D6,#59C4AB,#7EC779,#99CA54,#A9CB3E,#B0CC36)] group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>

                    <div
                        ref={featureCardRef}
                        className="w-full md:max-w-147 rounded-2xl pt-5 sm:pt-10 pb-5 sm:pb-10 lg:pb-15 px-5 sm:px-10 lg:px-20 bg-[#FBF8E9] flex flex-col items-center relative z-10"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div
                            ref={featureInnerRef}
                            className="flex flex-col items-center gap-3 sm:gap-4.5 w-full max-w-82.5 mx-auto"
                        >
                            <div ref={coinRef}>
                                <div className="flex items-center gap-1">
                                    <Image src={CoinIcon} alt="CoinIcon" width={33} height={33} />
                                    <h3 className="text-2xl md:text-4xl leading-11 tracking-[-0.8px] text-[#1F232C]">125,500</h3>
                                </div>
                                <p className="text-xs leading-4 text-[#1F232C] mt-2">25000 blinks will expire on 31st Dec 2026</p>
                            </div>
                            <button className="border border-[#E3E7EC] rounded-full flex items-center gap-2 bg-white py-2 sm:py-2.5 px-2 w-full text-[10px] sm:text-xs leading-4 text-[#1F232C] cursor-pointer">
                                <div className="w-full max-w-4 sm:max-w-5">
                                    <Image src={bulbIcon} alt="bulb Icon" width={20} height={20} />
                                </div>
                                <span className="flex-1 text-start">Explore how your blinks work</span>
                                <div className="w-full max-w-4 sm:max-w-5">
                                    <Image src={errowRightIcon} alt="errow Right Icon" width={24} height={24} />
                                </div>
                            </button>
                            <div className="bg-[#ECEEEF] border border-[#E3E7EC] rounded-xl p-1 grid grid-cols-3 w-full max-w-70.5">
                                <button className="text-xs sm:text-sm leading-5 text-[#666F80] flex items-center justify-center px-1 py-2 cursor-pointer">Overview</button>
                                <button className="text-xs sm:text-sm leading-5 text-[#4CCF5C] flex items-center justify-center px-1 py-2 cursor-pointer border border-[#4CCF5C] rounded-lg shadow">History</button>
                                <button className="text-xs sm:text-sm leading-5 text-[#666F80] flex items-center justify-center px-1 py-2 cursor-pointer">My voucher</button>
                            </div>
                        </div>
                        <div ref={onlineBankRef} className="mt-4 sm:mt-5.5 w-full max-w-107">
                            <Image src={OnlineBanking} alt="Online Banking" width={428} height={145} />
                        </div>
                    </div>
                </div>

                <div ref={bizSectionRef} className="py-8 lg:py-25 relative z-10">
                    <div className="flex md:flex-row flex-col items-center justify-between gap-4">
                        <div
                            ref={bizImgWrapRef}
                            className="w-full max-w-147 flex justify-center p-8 pb-0 xl:p-20 xl:pb-0 bg-[#FBF8E9] rounded-2xl overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <Image
                                ref={bizImgRef}
                                src={blinkImg2}
                                alt="send money"
                                width={428}
                                height={402}
                                className="rounded-t-2xl shadow-2xl"
                            />
                        </div>
                        <div className="max-w-157.5 mt-8 lg:mt-0">
                            <h3 ref={bizH3Ref} style={{ overflow: "hidden" }}>
                                Banking support for growing businesses
                            </h3>
                            <p ref={bizPRef} className="mt-5 text-base font-medium font-inter text-[#004737CC]">
                                Blink Business helps merchants and businesses accept payments, move money efficiently, and access services with clarity
                            </p>
                            <div
                                ref={bizBtnRef}
                                className="w-fit bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full mt-8"
                            >
                                <div className="w-auto flex items-center bg-[#ffffff] rounded-full relative transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                                    <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">
                                        Explore Business Services
                                    </button>
                                    <span className="absolute inset-0 scale-x-0 origin-left bg-[linear-gradient(90deg,#3AC2D6,#59C4AB,#7EC779,#99CA54,#A9CB3E,#B0CC36)] group-hover:scale-x-100 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={rwdSectionRef} className="py-8 lg:py-25">
                    <div className="flex md:flex-row flex-col items-center justify-between gap-4">
                        <div className="max-w-157.5 mt-8 lg:mt-0 lg:order-1 order-2">
                            <h3 ref={rwdH3Ref} style={{ overflow: "hidden" }}>
                                Rewards that make banking feel more valuable.
                            </h3>
                            <p ref={rwdPRef} className="mt-5 text-base font-medium font-inter text-[#004737CC]">
                                Earn points, unlock offers, and enjoy benefits designed to reward everyday usage.
                            </p>
                            <div
                                ref={rwdBtnRef}
                                className="w-full max-w-65.75 bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full mt-8"
                            >
                                <div className="w-auto flex items-center bg-[#ffffff] rounded-full relative transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                                    <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">
                                        Explore rewards
                                    </button>
                                    <span className="absolute inset-0 scale-x-0 origin-left bg-[linear-gradient(90deg,#3AC2D6,#59C4AB,#7EC779,#99CA54,#A9CB3E,#B0CC36)] group-hover:scale-x-100 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                        <div
                            ref={rwdImgWrapRef}
                            className="w-full max-w-147 flex justify-center p-8 pb-0 xl:p-20 xl:pb-0 bg-[#FBF8E9] rounded-2xl lg:order-2 order-1 relative z-10 overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <Image
                                ref={rwdImgRef}
                                src={blinkImg3}
                                alt="send money"
                                width={428}
                                height={402}
                                className="shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}