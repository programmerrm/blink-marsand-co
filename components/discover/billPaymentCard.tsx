import Image from "next/image";
import BillPayment from "../../assets/image/bill-payment.png";
export default function BillPaymentCard() {
    return (
        <div className=" bg-[#57DF98] rounded-3xl sm:rounded-[40px] flex flex-col lg:flex-row justify-between gap-5 relative ">
            <div className="order-2 lg:order-1 w-full lg:max-w-2xl pr-6 lg:pr-0 py-6 lg:py-12 pl-6 lg:pl-12">
                <h3 className=" leading-8 sm:leading-10 xl:leading-15">Bill Payments</h3>
                <p className="text-base lg:text-xl font-normal opacity-80 mt-5">Set and track your financial goals with Blink tailored planning tools. Whether it's saving for a vacation, a new home, or retirement, we'll help you stay on target and achieve your dreams.</p>

                <div className="w-fit bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] p-px rounded-full mt-10 sm:mt-34">
                    <div className="w-37.5 flex items-center bg-[#57DF98] rounded-full">
                        <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold  cursor-pointer transition-all rounded-full hover:text-white hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] bg-clip-text text-transparent">Explore</button>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2 w-full max-w-151 sm:max-w-118.5 relative -top-10 lg:-top-12 sm:-right-14 md:-right-28 lg:right-12 xl:right-4 min-h-49 sm:min-h-117">
                <div className="w-30 sm:w-58.75 absolute top-0 left-1/2 -translate-x-1/2 z-30">
                    <Image
                        src={BillPayment}
                        alt="Bill Payment"
                        width={238}
                        height={486}
                    />
                </div>
            <div className="bg-[#887C3D] absolute w-full max-w-150 h-8.5 bottom-0 sm:-bottom-5 right-0 sm:right-8 blur-[65px]"></div>
            </div>
        </div>
    )
}



