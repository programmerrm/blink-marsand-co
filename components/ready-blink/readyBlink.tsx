import Image from "next/image";
import BlinkImage from "../../assets/image/blink-with-hand.png";
import GoogleButton from "../../assets/image/download-button.svg";
import AppleButton from "../../assets/image/download-button-apple.svg";
import BlinkBg from "../../assets/image/blink-bg.png";
export default function ReadyBlink(){
    return(
        <section className=" overflow-hidden">
            <div className="container">
                <div className="pl-6 lg:pl-30 xl:pl-51.75 pr-6 lg:pr-30 xl:pr-50.75 flex flex-col sm:flex-row items-center gap-5 md:gap-10 bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] relative">
                    <div className=" absolute -top-22 -left-24 right-0">
                        <Image 
                            src={BlinkBg}
                            alt="Blink Bg"
                            width={1701}
                            height={1661}
                        />
                    </div>
                    <div className="mt-8 md:mt-15">
                        <Image
                            src={BlinkImage}
                            alt="Blink Image"
                            width={546}
                            height={666}
                        />
                    </div>
                    <div className="relative z-20 pb-8 sm:pb-0">
                        <h2 className="text-3xl md:text-4xl xl:text-[56px] font-blinker xl:leading-14 text-white font-normal">Ready to experience Blink?</h2>
                        <p className="text-base md:text-lg font-normal font-blinker md:leading-6 text-white w-full max-w-[288px] mt-3">Download the app and discover a more intuitive way to bank.</p>

                        <div className="flex items-center gap-2.5 mt-8">
                            <div className="w-full max-w-35.25">
                                <Image 
                                    src={GoogleButton}
                                    alt="Google Button"
                                    width={141}
                                    height={47}
                                />
                            </div>
                            <div className="w-full max-w-35.25">
                                <Image 
                                    src={AppleButton}
                                    alt="Apple Button"
                                    width={141}
                                    height={47}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}