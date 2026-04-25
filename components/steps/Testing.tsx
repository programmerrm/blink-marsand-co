import Image from "next/image";
import blinkImg2 from "@/assets/image/blink-send-money.png";
import blinkImg3 from "@/assets/image/blink-cash.png";

function Testing() {
    return (
        <>
            <section className="py-8 lg:py-25">
                <div className="container flex lg:flex-row flex-col items-center justify-between gap-4">
                    <div className="p-20 pb-0 bg-[#FBF8E9]">
                        <Image src={blinkImg2} alt="send money" width={428} height={402} />
                    </div>
                    <div className="max-w-160 mt-8 lg:mt-0">
                        <h3>Banking support for growing businesses</h3>
                        <p className="mt-5">
                            Blink Business helps merchants and businesses accept payments, move
                            money efficiently, and access services with clarity
                        </p>
                        <div className="w-fit bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full mt-8">
                            <div className="w-auto flex items-center bg-[#ffffff] rounded-full">
                                <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold  cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">
                                    Explore Business Services
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 lg:py-25">
                <div className="container flex lg:flex-row flex-col items-center justify-between gap-4">
                    <div className="max-w-160 mt-8 lg:mt-0 lg:order-1 order-2">
                        <h3>Rewards that make banking feel more valuable.</h3>
                        <p className="mt-5">
                            Earn points, unlock offers, and enjoy benefits designed to reward
                            everyday usage.
                        </p>
                        <div className="w-fit bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] p-px rounded-full mt-8">
                            <div className="w-auto flex items-center bg-[#ffffff] rounded-full">
                                <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold  cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">
                                    Explore rewards
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-20 pb-0 bg-[#FBF8E9] lg:order-2 order-1">
                        <Image src={blinkImg3} alt="send money" width={428} height={402} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testing;
