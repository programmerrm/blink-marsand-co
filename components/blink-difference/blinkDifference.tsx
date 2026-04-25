import Image from "next/image";
import ScanImage from "../../assets/image/scan.png";
import SecureImage from "../../assets/image/secure.png";
import BlinkLogo from "../../assets/image/blink-logo-dark.png";
import blinkBg from "../../assets/image/blink-difference-bg.png";
export default function BlinkDifference() {
    return (
        <section className="py-15 lg:py-30 relative">
            <div className="absolute right-0 top-38 h-168.5 flex justify-end">
                <Image 
                    src={blinkBg}
                    alt="blinkBg"
                    width={954}
                    height={674}
                    className="object-contain"
                />
            </div>
            <div className="container">
                <div className="w-full max-w-126.25 text-center mx-auto">
                    <h2 className="bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent mb-5"><span className="text-[#004737]">The Blink </span> <span>Difference</span></h2>
                    <p className="text-base lg:text-xl font-normal opacity-80">Discover why Blink is the smart choice for secure banking and personalized financial growth.</p>
                </div>
                <div className="mt-15 lg:mt-30 grid sm:grid-cols-3 gap-5 lg:gap-10">
                    <div className="border border-[#004737]/20 rounded-3xl lg:rounded-[40px] overflow-hidden">
                        <div className=" rounded-3xl lg:rounded-[40px] bg-[linear-gradient(167.97deg,#09BFD1_0%,#4CCF5C_50%,#A8C61A_100%),linear-gradient(0deg,rgba(255,255,255,0.68),rgba(255,255,255,0.68))] flex flex-col relative pt-10">
                            <div className="absolute inset-0 bg-white/60"></div>
                            <div className="w-full max-w-53.25 mx-auto relative z-20 rounded-3xl lg:rounded-[40px] mb-5 px-4">
                                <Image 
                                    src={ScanImage}
                                    alt="Scan Image"
                                    width={213}
                                    height={213}
                                />
                            </div>
                            <div className="bg-white p-4 lg:p-8 relative z-20 rounded-bl-3xl lg:rounded-bl-[40px] rounded-br-3xl lg:rounded-br-[40px]">
                                <h4 className="text-xl lg:text-2xl font-semibold text-[#004B51] leading-5 lg:leading-6 mb-3 sm:mb-5">Scan to Pay</h4>
                                <p className="text-base lg:text-xl font-medium leading-5 lg:leading-8 text-[#004B51]/80 font-montserrat">Seamless payments at your fingertips - scan, pay, and go with ease.</p>
                            </div>

                        </div>
                    </div>
                    <div className="border border-[#004737]/20 rounded-3xl lg:rounded-[40px] overflow-hidden">
                        <div className="rounded-3xl lg:rounded-[40px] bg-[linear-gradient(167.97deg,#09BFD1_0%,#4CCF5C_50%,#A8C61A_100%),linear-gradient(0deg,rgba(255,255,255,0.68),rgba(255,255,255,0.68))] flex flex-col relative pt-14">
                            <div className="absolute inset-0 bg-white/60"></div>
                            <div className="w-full max-w-41.25 mx-auto relative z-20 rounded-3xl lg:rounded-[40px] mb-5 md:mb-12 px-4">
                                <Image 
                                    src={SecureImage}
                                    alt="Secure Image"
                                    width={165}
                                    height={174}
                                />
                            </div>
                            <div className="bg-white p-4 lg:p-8 relative z-20 rounded-bl-3xl lg:rounded-bl-[40px] rounded-br-3xl lg:rounded-br-[40px]">
                                <h4 className="text-xl lg:text-2xl font-semibold text-[#004B51] leading-5 lg:leading-6 mb-3 sm:mb-5">Secure Banking</h4>
                                <p className="text-base lg:text-xl font-medium leading-5 lg:leading-8 text-[#004B51]/80 font-montserrat">Bank with confidence - our cutting-edge security keeps your finances safe, always.</p>
                            </div>

                        </div>
                    </div>
                    <div className="border border-[#004737]/20 rounded-3xl lg:rounded-[40px] overflow-hidden">
                        <div className="rounded-3xl lg:rounded-[40px] bg-[linear-gradient(167.97deg,#09BFD1_0%,#4CCF5C_50%,#A8C61A_100%),linear-gradient(0deg,rgba(255,255,255,0.68),rgba(255,255,255,0.68))] flex flex-col relative pt-30">
                            <div className="absolute inset-0 bg-white/60"></div>
                            <div className="w-full max-w-47 mx-auto relative z-20 rounded-3xl lg:rounded-[40px] mb-7 md:mb-14.75 px-4">
                                <Image 
                                    src={BlinkLogo}
                                    alt="Blink Logo"
                                    width={188}
                                    height={81}
                                />
                            </div>
                            <div className="bg-white p-4 lg:p-8 relative z-20 rounded-bl-3xl lg:rounded-bl-[40px] rounded-br-3xl lg:rounded-br-[40px]">
                                <h4 className="text-xl lg:text-2xl font-semibold text-[#004B51] leading-5 lg:leading-6 mb-3 sm:mb-5">Personalized Investing</h4>
                                <p className="text-base lg:text-xl font-medium leading-5 lg:leading-8 text-[#004B51]/80 font-montserrat">Invest smarter, not harder - personalized recommendations tailored to your financial goals.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


