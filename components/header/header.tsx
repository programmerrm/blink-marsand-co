"use client";

import { useState } from "react";
import Image from "next/image";
import LogoIcon from "../../assets/logo/logo.svg";
import Menu from "./menu";
import { Menu as HamburgerIcon, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="py-2 sm:py-4 md:py-6 lg:py-8">
            <div className="container">
                <div className="flex items-center justify-between gap-2">

                    {/* LEFT SIDE (UNCHANGED EXACT COPY) */}
                    <div className="w-full max-w-70 xl:max-w-100 2xl:max-w-106.75 flex items-center justify-between gap-4 xl:gap-12">
                        <Link href="/" className="w-full max-w-20 xl:max-w-27.5">
                            <Image
                                src={LogoIcon}
                                alt="LogoIcon"
                                width={111}
                                height={48}
                            />
                        </Link>

                        <div className="hidden lg:block w-full max-w-48 xl:max-w-67 bg-[linear-gradient(167.97deg,#09BFD1_0%,#4CCF5C_50%,#A8C61A_100%),linear-gradient(0deg,rgba(255,255,255,0.675),rgba(255,255,255,0.675))] p-px rounded-full">
                            <div className="w-full flex items-center bg-white p-px xl:p-1 rounded-full">
                                <button className="w-full px-2 xl:px-4 py-2 xl:py-3 text-sm xl:text-base leading-5 font-semibold text-white cursor-pointer transition-all rounded-full bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)]">
                                    Personal
                                </button>
                                <button className="w-full px-2 xl:px-4 py-2 xl:py-3 text-sm xl:text-base leading-5 font-semibold text-black cursor-pointer transition-all rounded-full hover:text-white hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)]">
                                    Business
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 2xl:gap-4.5">

                        {/* DESKTOP MENU */}
                        <div className="hidden lg:block">
                            <Menu />
                        </div>

                        {/* LANGUAGE (UNCHANGED) */}

                        <div className="flex items-center">
                            <div className="bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] pl-px py-px rounded-l-full">
                                <div className="bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] group-hover:bg-white rounded-l-full">
                                    <button className="text-xs xl:text-sm 2xl:text-base font-semibold text-white px-2 py-1 cursor-pointer">EN</button>
                                </div>

                            </div>
                            <div className="bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] pr-px py-px rounded-tr-full rounded-br-full">
                                <div className="bg-white hover:bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] rounded-tr-full rounded-br-full transition-all">
                                    <button className="text-xs xl:text-sm 2xl:text-base font-semibold text-[#01292C] px-2 p-1 cursor-pointer hover:text-white transition-all">বাং</button>
                                </div>
                            </div>
                        </div>

                        {/* DOWNLOAD (UNCHANGED) */}

                        <div className="hidden lg:block w-fit bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full">
                            <div className="w-fit flex items-center bg-white rounded-full">
                                <button className="w-full px-2 xl:px-4 py-2 2xl:py-3 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold text-black cursor-pointer transition-all rounded-full hover:text-white hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)]">Download App</button>
                            </div>
                        </div>

                        {/* MOBILE HAMBURGER (ONLY ADDITION) */}
                        <button
                            onClick={() => setOpen(true)}
                            className="lg:hidden"
                        >
                            <HamburgerIcon size={24} />
                        </button>

                    </div>

                </div>
            </div>

            {/* MOBILE MENU (SLIDE - NO DESIGN CHANGE ABOVE) */}
            {open && (
                <div className="fixed inset-0 z-50 lg:hidden">

                    {/* overlay */}
                    <div
                        onClick={() => setOpen(false)}
                        className="absolute inset-0 bg-black/60"
                    />

                    {/* sidebar */}
                    <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-lg p-5 transition-transform duration-2000">

                        {/* close */}
                        <div className="flex justify-between items-center mb-6">
                            <Image src={LogoIcon} alt="logo" width={90} height={40} />

                            <button onClick={() => setOpen(false)}>
                                <X size={22} />
                            </button>
                        </div>

                        <Menu mobile />

                    </div>

                </div>
            )}
        </header>
    );
}