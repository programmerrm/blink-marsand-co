import Image from "next/image";
import bdIcon from "@/assets/icon/bd.svg";
import arrowDown from "@/assets/icon/chevron-down.svg";
import bankIcon from "@/assets/icon/bank-ico.png";
import blinkIcon from "@/assets/icon/blink-ico.png";
import trophyIcon from "@/assets/icon/trophy.png";
import coinIcon from "@/assets/icon/coin.png";
import cardShape from "@/assets/icon/step-shape.png";
import stepsShape from "@/assets/image/steps-shape.png";

function Steps() {
    return (
        <section className="bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] relative py-30">
            <div className="container grid grid-cols-2">
                {/* Section title text */}
                <div className="text-white mt-8">
                    <h2>Get Started In Just 3 simple Steps.</h2>
                    <p className="mt-4">
                        Three simple steps to unlock the power of Blink and revolutionize your
                        banking experience.
                    </p>
                </div>
                {/* Step cards container */}
                <div>
                    {/* step 1 */}
                    <div className="bg-[#FBF8E9] rounded-[2.5rem] px-8 pt-8">
                        <span className="bg-[#57DF98] py-2.5 px-5 rounded-full text-lg font-medium">
                            Step 1
                        </span>
                        <h4 className="mt-5">Sign Up With Blink</h4>
                        <p className="text-lg text-[#004737CC] font-normal mt-5">
                            Create your Blink account and unlock a world of financial possibilities.
                        </p>
                        <div className="max-w-82 mx-auto px-4 pt-4 bg-white mt-15 rounded-t-lg pb-4">
                            <h5 className="text-[1.375rem] font-blinker text-[#1F232C]">
                                Enter mobile number
                            </h5>
                            <p className="text-[#666F80] text-base font-normal leading-normal mt-2">
                                Please enter the mobile number to log in or get started
                            </p>
                            <form className="mt-6">
                                <label className="text-[#1F232C] font-blinker text-sm">
                                    Mobile number
                                </label>
                                <div className="flex border rounded-xl border-[#e3e7eb] mt-2">
                                    <div className="flex items-center gap-1 py-4 ps-2 after:content-[''] after:absolute after:w-px after:h-full relative after:bg-[#e3e7eb] after:right-[-3.4rem]">
                                        <Image
                                            src={bdIcon}
                                            alt="bangladesh flag"
                                            width={24}
                                            height={24}
                                        />
                                        <p>+88</p>
                                        <Image
                                            src={arrowDown}
                                            alt="arrow down"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <input
                                        placeholder="Enter number"
                                        className="ps-16 outline-0 placeholder:text-[#1F232C] block"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* step 2 */}
                    <div className="bg-[#FBF8E9] rounded-[2.5rem] px-8 pt-8 mt-10 pb-21.25">
                        <span className="bg-[#57DF98] py-2.5 px-5 rounded-full text-lg font-medium">
                            Step 2
                        </span>
                        <h2 className="mt-5">Connect Your Accounts</h2>
                        <p className="text-lg text-[#004737CC] font-normal mt-5">
                            Link all your financial accounts effortlessly to Blink for comprehensive
                            management.
                        </p>
                        <div className="flex justify-between max-w-2/3 mx-auto mt-23 relative">
                            <Image
                                src={bankIcon}
                                alt="back icon"
                                width={96}
                                height={96}
                                className="p-5.5 bg-white rounded-[1.6rem] shadow-glow backdrop-blur-[20px]"
                            />
                            <Image
                                src={blinkIcon}
                                alt="back icon"
                                width={96}
                                height={96}
                                className="p-5.5 bg-white rounded-[1.6rem] shadow-glow backdrop-blur-[20px]"
                            />
                            <Image
                                src={cardShape}
                                alt="shape"
                                width={500}
                                height={200}
                                className="absolute -top-16"
                            />
                        </div>
                    </div>
                    {/* step 3 */}
                    <div className="bg-[#FBF8E9] rounded-[2.5rem] px-8 pt-8 mt-10 pb-21.25">
                        <span className="bg-[#57DF98] py-2.5 px-5 rounded-full text-lg font-medium">
                            Step 3
                        </span>
                        <h2 className="mt-5">Start Banking</h2>
                        <p className="text-lg text-[#004737CC] font-normal mt-5">
                            Take control of your finances with Blink{"'"}s intuitive features and
                            personalized tools.
                        </p>
                        <div className="ps-3 pb-3 bg-white rounded-2xl mt-12.75 shadow-md">
                            <div className="flex justify-between">
                                <Image
                                    src={trophyIcon}
                                    alt="trophy"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 mt-2"
                                />
                                <div className="flex bg-[#FFF8D9] py-1 px-2 rounded-bl-2xl border-[#FDD86A] border-l border-b items-center gap-1">
                                    <Image src={coinIcon} alt="coin" width={20} height={20} />
                                    <span className="font-semibold ">2000</span>
                                </div>
                            </div>
                            <div className="relative">
                                <h4 className="text-lg font-semibold font-blinker text-[#1F232C]">
                                    Add money ৳1,000
                                </h4>
                                <p className="text-xs font-blinker leading-normal">
                                    Lorem ipsum dolor sit amet
                                </p>
                                <p className="text-[#A97926] text-[0.625rem] leading-normal">
                                    3d 15h 34m left
                                </p>
                                <span className="absolute -bottom-6 w-[95%] left-1/2 -translate-x-1/2 h-6 bg-white block rounded-b-2xl shadow-md"></span>
                                <span className="absolute -bottom-8 w-[88%] left-1/2 -translate-x-1/2 h-6 bg-white block rounded-b-2xl shadow-md"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={stepsShape}
                alt="shape"
                width={1028}
                height={1025}
                className="absolute left-0 bottom-0"
            />
        </section>
    );
}

export default Steps;
