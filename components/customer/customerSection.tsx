import Image from "next/image";
import customerImage from "../../assets/image/customer.png";
import customerBg from "../../assets/image/customer-bg.png";

export default function Customer() {
  return (
    <section className="bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] relative">
      <div className="container">

        {/* Background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 lg:h-154 xl:h-187">
          <Image
            src={customerBg}
            alt="customerBg"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-end">

          {/* Left Content */}
          <div className="w-full max-w-157 translate-x-0 z-20 pb-5 xl:pb-36.5 mt-6 sm:mt-12.5 md:mt-25">
            <h2 className="text-white lg:leading-16"> What Our Customer Say About Us </h2>
            <div className="pb-4 sm:pb-8 border-b border-white max-w-122 w-full mt-10 md:mt-20">
               <span className="text-base sm:text-xl font-semibold font-inter leading-6.25 text-white">“Best digital banking service”</span>
               <p className="text-base sm:text-xl font-normal font-inter leading-6.25 text-white mt-4 sm:mt-8">Blink has transformed my financial life. It's intuitive, secure, and makes managing my money a breeze. Highly recommended!</p> 
            </div>
            <div className="mt-8 sm:mt-16">
                <h4 className="text-xl sm:text-2xl font-semibold leading-6.25 text-white font-inter">Samia Rahman</h4>
                <h5 className=" font-inter font-normal text-[#BDD630] mt-1">HR</h5>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-[82%] -ml-30">
            <Image
              src={customerImage}
              alt="customer Image"
              width={872}
              height={666}
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}