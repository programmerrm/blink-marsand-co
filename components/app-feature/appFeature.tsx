import Image from "next/image";
import BillPaymentIcon from "../../assets/icon/bill-payment.svg";
import UploadIcon from "../../assets/icon/upload-icon.svg";
import transferIcon from "../../assets/icon/transfer-icon.svg";
import blinkImg2 from "../../assets/image/blink-send-money.png";
import blinkImg3 from "../../assets/image/blink-cash.png";
import appFeatureBg from "../../assets/image/app-feature-bg.png";
export default function AppFeature() {
    return (
        <section className="py-10 md:py-12.5 lg:py-25 relative">
            {/* <div className="absolute top-0 left-0 right-0">
                <Image 
                    src={appFeatureBg}
                    alt="app Feature Bg"
                    width={1272}
                    height={1267}
                />
            </div> */}
            <div className="container">
                <div className="w-full max-w-180.25">
                    <h2 className="font-inter leading-15">One app for your everyday money moments. </h2>
                    <p className="text-sm md:text-base md:leading-6.25 font-normal font-inter text-[#004737]/80 mt-5.5">Pay bills, transfer funds, recharge mobile, <br /> cash out, and stay in control of your day-to-day finances.</p>
                </div>
                <div className="mt-16 flex items-center justify-between gap-5">
                    <div className="w-full max-w-133.25">
                        <div className="bg-[#FBF8E9] p-4 md:p-6 border-l-3 border-[#004737]/20 relative after:absolute after:top-0 after:-left-0.75 after:bottom-0 after:w-0.75 after:bg-[#004737]">
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
                        <div className="bg-white p-4 md:p-6 border-l-3 border-[#004737]/20">
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
                        <div className="bg-white p-4 md:p-6 border-l-3 border-[#004737]/20">
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
                            <div className="w-full flex items-center bg-white rounded-full">
                                <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold  cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent">Explore Personal Features</button>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>


            </div>
        </section>
    )
}