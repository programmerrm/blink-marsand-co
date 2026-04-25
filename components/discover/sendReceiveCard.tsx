import Image from "next/image";
import SendReceiveImage from "../../assets/image/send-receive.png";
export default function SendReceiveCard() {
    return (
        <div className=" bg-[#D4FFE8] rounded-3xl sm:rounded-[40px] flex flex-col lg:flex-row justify-between gap-5 relative ">
            <div className="order-2 lg:order-1 w-full lg:max-w-2xl pr-6 lg:pr-0 py-6 lg:py-12 pl-6 lg:pl-12">
                <h3 className=" leading-8 sm:leading-10 xl:leading-15">Send & Receive Money</h3>
                <p className="text-base lg:text-xl font-normal opacity-80 mt-5">Gain valuable insights into your spending habits with Blink intelligent analysis tools. Understand where your money is going, receive personalized recommendations for saving, and make informed financial decisions to achieve your goals faster.</p>

                <div className="w-fit bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] p-px rounded-full mt-10 sm:mt-34">
                    <div className="w-37.5 flex items-center bg-[#D4FFE8] rounded-full">
                        <button className="w-full px-2 xl:px-4 py-2 2xl:py-3.5 text-xs xl:text-sm 2xl:text-base leading-5 font-semibold  cursor-pointer transition-all rounded-full hover:text-black hover:bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] bg-clip-text text-transparent">Explore</button>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2 w-full max-w-151 sm:max-w-122.5 relative -top-10 sm:-top-14 lg:-top-17 sm:-right-14 md:-right-28 lg:right-12 xl:right-10 min-h-49 sm:min-h-120">
                <div className="w-50 sm:w-100 absolute top-0 left-1/2 -translate-x-1/2 z-30">
                    <Image
                        src={SendReceiveImage}
                        alt="Send Receive Image"
                        width={400}
                        height={517}
                    />
                </div>
            <div className="bg-[#887C3D] absolute w-full max-w-150 h-8.5 bottom-0 sm:-bottom-10 right-0 sm:right-20 blur-[65px]"></div>
            </div>
        </div>
    )
}



