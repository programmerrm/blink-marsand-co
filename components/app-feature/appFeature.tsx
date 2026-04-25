"use client";

import { useState } from "react";
import Image from "next/image";
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
export default function AppFeature() {
    const [activeIndex, setActiveIndex] = useState(0);
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
                    <h2 className="font-inter lg:leading-15">One app for your everyday money moments. </h2>
                    <p className="text-sm md:text-base md:leading-6.25 font-normal font-inter text-[#004737]/80 mt-3 md:mt-5.5">Pay bills, transfer funds, recharge mobile, <br /> cash out, and stay in control of your day-to-day finances.</p>
                </div>
                <div className="py-8 lg:py-25 md:mt-10 lg:mt-16 flex flex-col md:flex-row items-center justify-between gap-5">
                    <div className="w-full md:max-w-133.25">
                        <div onClick={() => setActiveIndex(0)} className={`p-4 md:p-6 border-l-3 border-[#004737]/20 relative cursor-pointer transition-all ${activeIndex === 0 ? "bg-[#FBF8E9] after:absolute after:top-0 after:-left-0.75 after:bottom-0 after:w-0.75 after:bg-[#004737]" : "bg-white"}`}>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-full max-w-4.5">
                                    <Image
                                        src={BillPaymentIcon}
                                        alt="Bill Payment Icon"
                                        width={18}
                                        height={18}
                                    />
                                </div>
                                <h6 className="text-base md:text-lg font-inter font-medium leading-6.5 text-[#134341]">Bill Payment & Reminders</h6>
                            </div>
                            <p className="text-sm text-[#0C231F]/60 font-inter leading-5.25 font-medium">Stay ahead of payments with Blink's smart reminders. Never miss a due date again, ensuring your bills are paid on time, every time. Enjoy peace of mind with hassle-free bill management. </p>
                        </div>
                        <div onClick={() => setActiveIndex(1)} className={`p-4 md:p-6 border-l-3 border-[#004737]/20 relative cursor-pointer transition-all ${activeIndex === 1 ? "bg-[#FBF8E9] after:absolute after:top-0 after:-left-0.75 after:bottom-0 after:w-0.75 after:bg-[#004737]" : "bg-white"}`}>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-full max-w-4.5">
                                    <Image
                                        src={UploadIcon}
                                        alt="Upload Icon"
                                        width={18}
                                        height={18}
                                    />
                                </div>
                                <h6 className="text-base md:text-lg font-inter font-medium leading-6.5 text-[#134341]">Card Managment</h6>
                            </div>
                            <p className="text-sm text-[#0C231F]/60 font-inter leading-5.25 font-medium">Stay ahead of payments with Blink's smart reminders. Never miss a due date again, ensuring your bills are paid on time, every time. Enjoy peace of mind with hassle-free bill management. </p>
                        </div>
                        <div onClick={() => setActiveIndex(2)} className={`p-4 md:p-6 border-l-3 border-[#004737]/20 relative cursor-pointer transition-all ${activeIndex === 2 ? "bg-[#FBF8E9] after:absolute after:top-0 after:-left-0.75 after:bottom-0 after:w-0.75 after:bg-[#004737]" : "bg-white"}`}>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-full max-w-4">
                                    <Image
                                        src={transferIcon}
                                        alt="transfer Icon"
                                        width={16}
                                        height={18}
                                    />
                                </div>
                                <h6 className="text-base md:text-lg font-inter font-medium leading-6.5 text-[#134341]">Bulk Transfers</h6>
                            </div>
                            <p className="text-sm text-[#0C231F]/60 font-inter leading-5.25 font-medium">Stay ahead of payments with Blink's smart reminders. Never miss a due date again, ensuring your bills are paid on time, every time. Enjoy peace of mind with hassle-free bill management.</p>
                        </div>
                        <div className="w-fit bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full mt-4 sm:mt-8">
                            <div className="w-full flex items-center bg-white rounded-full relative transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                                <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold  cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">Explore Personal Features</button>
                                <span className="absolute inset-0 scale-x-0 origin-left bg-[linear-gradient(90deg,#3AC2D6,#59C4AB,#7EC779,#99CA54,#A9CB3E,#B0CC36)] group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:max-w-147 rounded-2xl pt-5 sm:pt-10 pb-5 sm:pb-10 lg:pb-15 px-5 sm:px-10 lg:px-20 bg-[#FBF8E9] flex flex-col items-center relative z-10">
                        <div className="flex flex-col items-center gap-3 sm:gap-4.5 w-full max-w-82.5 mx-auto">
                            <div>
                                <div className="flex items-center gap-1">
                                    <Image 
                                        src={CoinIcon}
                                        alt="CoinIcon"
                                        width={33}
                                        height={33}
                                    />
                                    <h3 className="text-2xl md:text-4xl leading-11 tracking-[-0.8px] text-[#1F232C]">125,500</h3>
                                </div>
                                <p className="text-xs leading-4 text-[#1F232C] mt-2">25000 blinks will expire on 31st Dec 2026</p>
                            </div>
                            <button className="border border-[#E3E7EC] rounded-full flex items-center  gap-2 bg-white py-2 sm:py-2.5 px-2 w-full text-[10px] sm:text-xs leading-4 text-[#1F232C] cursor-pointer">
                                <div className="w-full max-w-4 sm:max-w-5">
                                    <Image 
                                        src={bulbIcon}
                                        alt="bulb Icon"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <span className="flex-1 text-start">Explore how your blinks work</span>
                                <div className="w-full max-w-4 sm:max-w-5">
                                    <Image 
                                        src={errowRightIcon}
                                        alt="errow Right Icon"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </button>
                            <div className="bg-[#ECEEEF] border border-[#E3E7EC] rounded-xl p-1 grid grid-cols-3 w-full max-w-70.5">
                                <button className="text-xs sm:text-sm leading-5 text-[#666F80] flex items-center justify-center px-1 py-2 cursor-pointer">Overview</button>
                                <button className="text-xs sm:text-sm leading-5 text-[#4CCF5C] flex items-center justify-center px-1 py-2 cursor-pointer border border-[#4CCF5C] rounded-lg shadow">History</button>
                                <button className="text-xs sm:text-sm leading-5 text-[#666F80] flex items-center justify-center px-1 py-2 cursor-pointer">My voucher</button>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-5.5 w-full max-w-107">
                            <Image 
                                src={OnlineBanking}
                                alt="Online Banking"
                                width={428}
                                height={145}
                            />
                        </div>
                    </div>
                </div>

                <div className="py-8 lg:py-25 relative z-10">
                    <div className="flex md:flex-row flex-col items-center justify-between gap-4">
                        <div className="w-full max-w-147 flex justify-center p-8 pb-0 xl:p-20 xl:pb-0 bg-[#FBF8E9] rounded-2xl">
                            <Image
                                src={blinkImg2}
                                alt="send money"
                                width={428}
                                height={402}
                                className="rounded-t-2xl shadow-2xl"
                            />
                        </div>
                        <div className="max-w-157.5 mt-8 lg:mt-0">
                            <h3>Banking support for growing businesses</h3>
                            <p className="mt-5 text-base font-medium font-inter text-[#004737CC]">
                                Blink Business helps merchants and businesses accept payments, move
                                money efficiently, and access services with clarity
                            </p>
                            <div className="w-fit bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full mt-8">
                                <div className="w-auto flex items-center bg-[#ffffff] rounded-full relative transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                                    <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold  cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">
                                        Explore Business Services
                                    </button>
                                    <span className="absolute inset-0 scale-x-0 origin-left bg-[linear-gradient(90deg,#3AC2D6,#59C4AB,#7EC779,#99CA54,#A9CB3E,#B0CC36)] group-hover:scale-x-100 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 lg:py-25">
                    <div className="flex md:flex-row flex-col items-center justify-between gap-4">
                        <div className="max-w-157.5 mt-8 lg:mt-0 lg:order-1 order-2">
                            <h3>Rewards that make banking feel more valuable.</h3>
                            <p className="mt-5 text-base font-medium font-inter text-[#004737CC]">
                                Earn points, unlock offers, and enjoy benefits designed to reward
                                everyday usage.
                            </p>
                            <div className="w-full max-w-65.75 bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full mt-8">
                                <div className="w-auto flex items-center bg-[#ffffff] rounded-full relative transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                                    <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold  cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">
                                        Explore rewards
                                    </button>
                                    <span className="absolute inset-0 scale-x-0 origin-left bg-[linear-gradient(90deg,#3AC2D6,#59C4AB,#7EC779,#99CA54,#A9CB3E,#B0CC36)] group-hover:scale-x-100 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-147 flex justify-center p-8 pb-0 xl:p-20 xl:pb-0 bg-[#FBF8E9] rounded-2xl lg:order-2 order-1 relative z-10">
                            <Image
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
    )
}