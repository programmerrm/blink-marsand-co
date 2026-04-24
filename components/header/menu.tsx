"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import erroDown from "../../assets/icon/errow-down.png";

export default function Menu({ mobile = false }: { mobile?: boolean }) {
     const menuRef = useRef<HTMLUListElement>(null);
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    const toggleMenu = (id: number) => {
        setOpenMenu(openMenu === id ? null : id);
    };

    const items = [
        { id: 1, title: "Account & Money", links: ["Savings", "Current Account"] },
        { id: 2, title: "Payments & Transfer", links: ["Send Money", "Bill Pay"] },
        { id: 3, title: "Lending & Deposit", links: ["Loans", "Fixed Deposit"] },
        { id: 4, title: "Cards", links: ["Debit Card", "Credit Card"] },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".menu-item", {
                y: -50,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.15,
            });
        }, menuRef);

        return () => ctx.revert();
    }, []);

    return (
        <ul ref={menuRef} className={mobile ? "flex flex-col gap-3" : "flex items-center gap-2 xl:gap-4"}>

            {items.map((item) => (
                <li key={item.id} className="relative group menu-item">

                    {/* trigger */}
                    <Link
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu(item.id);
                        }}
                        className="flex items-center gap-1 text-xs xl:text-sm font-medium text-black hover:text-[#3AC1D5]"
                    >
                        {item.title}

                        <Image
                            src={erroDown}
                            alt="down"
                            width={17}
                            height={17}
                            className={`transition-transform duration-300 ${openMenu === item.id ? "rotate-180" : ""
                                } ${!mobile ? "group-hover:rotate-180" : ""}`}
                        />
                    </Link>

                    {/* dropdown */}
                    <ul
                        className={` ${mobile ? "relative mt-2" : "absolute left-0 top-full"} bg-white shadow-lg rounded-md p-3 min-w-45 z-40 ${mobile ? (openMenu === item.id ? "block" : "hidden") : "hidden group-hover:block"}`}
                    >
                        {item.links.map((link, i) => (
                            <li key={i}>
                                <Link href="#" className="block py-1 text-sm hover:text-[#3AC1D5]">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </li>
            ))}

            <div className="mt-5 space-y-3">
                <div className="flex-1 block lg:hidden w-full max-w-48 xl:max-w-67 bg-[linear-gradient(167.97deg,#09BFD1_0%,#4CCF5C_50%,#A8C61A_100%),linear-gradient(0deg,rgba(255,255,255,0.675),rgba(255,255,255,0.675))] p-px rounded-full">
                    <div className="w-full flex items-center bg-white p-px xl:p-1 rounded-full">
                        <button className="w-full px-2 xl:px-4 py-2 xl:py-3 text-sm xl:text-base leading-5 font-semibold text-white cursor-pointer transition-all rounded-full bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)]">
                            Personal
                        </button>
                        <button className="w-full px-2 xl:px-4 py-2 xl:py-3 text-sm xl:text-base leading-5 font-semibold text-black cursor-pointer transition-all rounded-full hover:text-white hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)]">
                            Business
                        </button>
                    </div>
                </div>

                <div className="block lg:hidden w-fit bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full">
                    <div className="w-fit flex items-center bg-white rounded-full">
                        <button className="w-full px-2 xl:px-4 py-2 2xl:py-3 text-sm 2xl:text-base leading-5 font-semibold text-black cursor-pointer transition-all rounded-full hover:text-white hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)]">Download App</button>
                    </div>
                </div>
            </div>

        </ul>
    );
}