"use client";

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoIcon from "../../assets/logo/logo.svg";
import mappinIcon from "../../assets/icon/mappin.svg";
import phoneIcon from "../../assets/icon/phone.svg";
import mailIcon from "../../assets/icon/mail.svg";
import facebookIcon from "../../assets/icon/facebook.png";
import instagramIcon from "../../assets/icon/instagram.png";
import linkedinIcon from "../../assets/icon/linkedin.png";
import yputubeIcon from "../../assets/icon/youtube.png";
import googleIcon from "../../assets/icon/googleplay.svg";
import appleIcon from "../../assets/icon/apple.svg";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);
    const topRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const year = new Date().getFullYear();

    useEffect(() => {
        if (!footerRef.current || !topRef.current || !bottomRef.current) return;

        gsap.fromTo(
            footerRef.current,
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 92%",
                    toggleActions: "play none none none"
                },
            }
        );

        gsap.fromTo(
            topRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: topRef.current,
                    start: "top 88%",
                    toggleActions: "play none none none"
                },
            }
        );

        const logoSection = topRef.current.querySelector(".logo-section");

        if (logoSection) {
            const logo = logoSection.querySelector(".logo");
            const paragraph = logoSection.querySelector("p");
            const appTitle = logoSection.querySelector("h6");
            const buttons = logoSection.querySelectorAll(".download-btn");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: logoSection,
                    start: "top 88%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(logo, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
                .fromTo(paragraph, {
                    y: 30,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5
                })
                .fromTo(appTitle, {
                    y: 25,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.4
                })
                .fromTo(buttons, {
                    y: 20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.15
                });
        }

        const animateSection = (
            section: HTMLElement,
            titleClass: string,
            listClass: string
        ) => {
            const title = section.querySelector(titleClass);
            const items = section.querySelectorAll(`${listClass} li`);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                title,
                { y: 35, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 }
            ).fromTo(
                items,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.12,
                }
            );
        };

        const productSection = topRef.current.querySelector(".product-section") as HTMLElement;
        animateSection(productSection, ".product-title", ".product-list");

        const legalSection = topRef.current.querySelector(".legal-section") as HTMLElement;
        animateSection(legalSection, ".legal-title", ".legal-list");

        const contactSection = topRef.current.querySelector(".contact-section") as HTMLElement;
        animateSection(contactSection, ".contact-title", ".contact-list");

        const socialSection = topRef.current.querySelector(".social-section") as HTMLElement;
        animateSection(socialSection, ".social-title", ".social-list");

        gsap.fromTo(
            bottomRef.current,
            { y: 25, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: bottomRef.current,
                    start: "top 100%",
                    toggleActions: "play none none reverse",
                },
            }
        );

    }, []);

    return (
        <footer className="bg-[#FBF8E9] py-12.5 md:py-25" ref={footerRef}>
            {/* Top */}
            <div className="container" ref={topRef}>
                <div className="flex flex-col lg:flex-row gap-5 justify-between border-b border-[#01292C]/20 pb-8 sm:pb-10">
                    {/* Logo + Description */}
                    <div className="w-full lg:max-w-[384px] logo-section">

                        <Link href={"/"} className="group block w-fit logo">
                            <Image
                                src={logoIcon}
                                alt="logoIcon"
                                width={111}
                                height={48}
                                className="transition-all duration-500 ease-out
        group-hover:scale-105 group-hover:-translate-y-1"
                            />
                        </Link>

                        <p className="text-sm sm:text-base font-normal font-inter leading-6 text-[#003235] mt-4 sm:mt-6">A new digital banking experience by City Bank PLC. Designed to make everyday money simpler, faster, and more intuitive.</p>
                        <div>
                            <h6 className="text-sm sm:text-base font-semibold font-inter leading-6 text-[#003235] mt-4 sm:mt-5">Get the App</h6>
                            <div className="flex gap-3 mt-2">
                                <Link href={"/"} className="group black w-fit download-btn">
                                    <Image
                                        src={googleIcon}
                                        alt="Google Play"
                                        width={140}
                                        height={40}
                                        className="transition-all duration-500 ease-out
        group-hover:scale-105 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                                <Link href={"/"} className="group black w-fit download-btn">
                                    <Image
                                        src={appleIcon}
                                        alt="App Store"
                                        width={140}
                                        height={40}
                                        className="transition-all duration-500 ease-out
        group-hover:scale-105 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-193.75 flex flex-col sm:flex-row justify-between lg:gap-5 gap-10.5 mt-4">
                        {/* Product */}
                        <div className="w-full max-w-26 product-section">
                            <h6 className="product-title text-base sm:text-lg font-roboto font-bold sm:leading-4.5 text-[#01292C] mb-4 sm:mb-8">Product</h6>
                            <ul className="product-list space-y-2 sm:space-y-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="group text-sm font-normal font-roboto leading-3.5 text-[#01292C] transition-all duration-300 ease-in-out hover:text-[#0A7A7A] hover:translate-x-1 hover:font-semibold inline-block">
                                        <span className="relative">
                                            Personal
                                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A7A7A]
                transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="group text-sm font-normal font-roboto leading-3.5 text-[#01292C] transition-all duration-300 ease-in-out hover:text-[#0A7A7A] hover:translate-x-1 hover:font-semibold inline-block">
                                        <span className="relative">
                                            Business
                                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A7A7A]
                transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="group text-sm font-normal font-roboto leading-3.5 text-[#01292C] transition-all duration-300 ease-in-out hover:text-[#0A7A7A] hover:translate-x-1 hover:font-semibold inline-block">
                                        <span className="relative">
                                            Rewards
                                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A7A7A]
                transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="group text-sm font-normal font-roboto leading-3.5 text-[#01292C] transition-all duration-300 ease-in-out hover:text-[#0A7A7A] hover:translate-x-1 hover:font-semibold inline-block">
                                        <span className="relative">
                                            Company
                                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A7A7A]
                transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="group text-sm font-normal font-roboto leading-3.5 text-[#01292C] transition-all duration-300 ease-in-out hover:text-[#0A7A7A] hover:translate-x-1 hover:font-semibold inline-block">

                                        <span className="relative">
                                            Help Center
                                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A7A7A]
                transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="w-full max-w-43.5 legal-section">
                            <h6 className="legal-ttile legal-title text-base sm:text-lg font-roboto font-bold sm:leading-4.5 text-[#01292C] mb-4 sm:mb-8">Legal & Regulatory</h6>
                            <ul className="legal-list space-y-2 sm:space-y-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="group text-sm font-normal font-roboto leading-3.5 text-[#01292C] transition-all duration-300 ease-in-out hover:text-[#0A7A7A] hover:translate-x-1 hover:font-semibold inline-block">
                                        <span className="relative">
                                            Terms & Conditions
                                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A7A7A]
                transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="group text-sm font-normal font-roboto leading-3.5 text-[#01292C] transition-all duration-300 ease-in-out hover:text-[#0A7A7A] hover:translate-x-1 hover:font-semibold inline-block">
                                        <span className="relative">
                                            Privacy Policy
                                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A7A7A]
                transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="group text-sm font-normal font-roboto leading-3.5 text-[#01292C] transition-all duration-300 ease-in-out hover:text-[#0A7A7A] hover:translate-x-1 hover:font-semibold inline-block">
                                        <span className="relative">
                                            Schedule of Charges
                                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A7A7A]
                transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Contact */}
                        <div className="w-full max-w-58.5 contact-section">
                            <h6 className="contact-title text-base sm:text-lg font-roboto font-bold sm:leading-4.5 text-[#01292C] mb-3 sm:mb-4">Contact Us</h6>
                            <ul className="contact-list space-y-2 sm:space-y-4">

                                <li className="flex items-center gap-3">
                                    <div className="w-full max-w-4 sm:max-w-6">
                                        <Image
                                            src={mappinIcon}
                                            alt="mappinIcon"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <span className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">
                                        Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-4 sm:w-6">
                                        <Image
                                            src={mailIcon}
                                            alt="mailIcon"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <Link href="mailto:hello@blink.com.bd" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">
                                        hello@blink.com.bd
                                    </Link>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-4 sm:w-6">
                                        <Image
                                            src={phoneIcon}
                                            alt="phoneIcon"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <Link href="tel:16234" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">
                                        16234 (24/7 Hotline)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Social */}
                        <div className="w-full max-w-34.25 social-section">
                            <h6 className="social-title text-base sm:text-lg font-roboto font-bold sm:leading-4.5 text-[#01292C] mb-2">Follow us</h6>
                            <ul className="flex gap-3 social-list">
                                <li>
                                    <Link href="#"
                                        target="_blank"
                                        className="block group"
                                    >
                                        <div className="w-6 transition-all duration-500 ease-out 
                group-hover:-translate-y-0.5
                group-hover:scale-105">
                                            <Image
                                                src={facebookIcon}
                                                alt="facebookIcon"
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
                                        target="_blank"
                                        className="block group"
                                    >
                                        <div className="w-6 transition-all duration-500 ease-out 
                group-hover:-translate-y-0.5
                group-hover:scale-105">
                                            <Image
                                                src={instagramIcon}
                                                alt="instagramIcon"
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
                                        target="_blank"
                                        className="block group"
                                    >
                                        <div className="w-6 transition-all duration-500 ease-out 
                group-hover:-translate-y-0.5
                group-hover:scale-105">
                                            <Image
                                                src={linkedinIcon}
                                                alt="linkedinIcon"
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#"
                                        target="_blank"
                                        className="block group"
                                    >
                                        <div className="w-6 transition-all duration-500 ease-out 
                group-hover:-translate-y-0.5
                group-hover:scale-105">
                                            <Image
                                                src={yputubeIcon}
                                                alt="yputubeIcon"
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="container pt-2 sm:pt-2.5 flex flex-col sm:flex-row justify-between" ref={bottomRef}>
                <p className="text-sm leading-6 font-normal font-inter text-[#01292C]">© {year} City Bank PLC. All rights reserved.</p>
                <p className="text-sm leading-6 font-normal font-inter text-[#01292C] flex items-center gap-2">
                    Made for Bangladesh 🇧🇩
                </p>
            </div>
        </footer>
    );
}
