
import Image from "next/image";
import Link from "next/link";
import logoIcon from "../../assets/logo/logo.svg";
import mappinIcon from "../../assets/logo/mappin.svg";
import phoneIcon from "../../assets/logo/phone.svg";
import mailIcon from "../../assets/logo/mail.svg";
import facebookIcon from "../../assets/logo/facebook.png";
import instagramIcon from "../../assets/logo/instagram.png";
import linkedinIcon from "../../assets/logo/linkedin.png";
import yputubeIcon from "../../assets/logo/youtube.png";
import googleIcon from "../../assets/logo/googleplay.svg";
import appleIcon from "../../assets/logo/apple.svg";

export default function Footer() {
  return (
    <footer className="bg-[#FBF8E9] py-12.5 md:py-25">
      <div className="container">

        <div className="flex flex-col lg:flex-row gap-5 justify-between border-b border-[#01292C]/20 pb-8 sm:pb-10">
          {/* Logo + Description */}
          <div className="w-full lg:max-w-[384px]">
            <div className="w-full max-w-27.5">
              <Image 
                src={logoIcon}
                alt="logoIcon"
                width={111}
                height={48}
              />
            </div>

            <p className="text-sm sm:text-base font-normal font-inter leading-6 text-[#003235] mt-4 sm:mt-6">
              A new digital banking experience by City Bank PLC. Designed to make everyday money simpler, faster, and more intuitive.
            </p>

            <div>
              <h6 className="text-sm sm:text-base font-semibold font-inter leading-6 text-[#003235] mt-4 sm:mt-5">Get the App</h6>

              <div className="flex gap-3 mt-2">
                <button className=" cursor-pointer">
                  <Image
                    src={googleIcon}
                    alt="Google Play"
                    width={140}
                    height={40}
                  />
                </button>

                <button className=" cursor-pointer">
                  <Image
                    src={appleIcon}
                    alt="App Store"
                    width={140}
                    height={40}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:max-w-193.75 flex flex-col sm:flex-row justify-between lg:gap-5 gap-10.5 mt-4">
            {/* Product */}
            <div className="w-full max-w-26">
              <h6 className="text-base sm:text-lg font-roboto font-bold sm:leading-4.5 text-[#01292C] mb-4 sm:mb-8">Product</h6>
              <ul className="space-y-2 sm:space-y-4">
                <li><Link href="#" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">Personal</Link></li>
                <li><Link href="#" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">Business</Link></li>
                <li><Link href="#" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">Rewards</Link></li>
                <li><Link href="#" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">Company</Link></li>
                <li><Link href="#" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">Help Center</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="w-full max-w-43.5">
              <h6 className="text-base sm:text-lg font-roboto font-bold sm:leading-4.5 text-[#01292C] mb-4 sm:mb-8">Legal & Regulatory</h6>
              <ul className="space-y-2 sm:space-y-4">
                <li><Link href="#" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">Terms & Conditions</Link></li>
                <li><Link href="#" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">Schedule of Charges</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="w-full max-w-58.5">
              <h6 className="text-base sm:text-lg font-roboto font-bold sm:leading-4.5 text-[#01292C] mb-3 sm:mb-4">Contact Us</h6>

              <ul className="space-y-2 sm:space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-full max-w-4 sm:max-w-6">
                    <Image 
                      src={mappinIcon}
                      alt="mappinIcon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">
                    Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-4 sm:w-6">
                    <Image 
                      src={mailIcon}
                      alt="mailIcon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <Link href="mailto:hello@blink.com.bd" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">
                    hello@blink.com.bd
                  </Link>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-4 sm:w-6">
                    <Image 
                      src={phoneIcon}
                      alt="phoneIcon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <Link href="tel:16234" className="text-sm font-normal font-roboto leading-3.5 text-[#01292C]">
                    16234 (24/7 Hotline)
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social */}
            <div className="w-full max-w-34.25">
              <h6 className="text-base sm:text-lg font-roboto font-bold sm:leading-4.5 text-[#01292C] mb-2">Follow us</h6>

              <div className="flex gap-3">
                <Link href="#"
                  target="_blank"
                >
                  <div className="w-6">
                    <Image 
                      src={facebookIcon}
                      alt="facebookIcon"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>

                <Link href="#"
                  target="_blank"
                >
                  <div className=" w-6">
                    <Image 
                      src={instagramIcon}
                      alt="instagramIcon"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>

                <Link href="#"
                  target="_blank"
                >
                  <div className=" w-6">
                    <Image 
                      src={linkedinIcon}
                      alt="linkedinIcon"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>

                <Link href="#"
                  target="_blank"
                >
                  <div className=" w-6">
                    <Image 
                      src={yputubeIcon}
                      alt="yputubeIcon"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container pt-2 sm:pt-2.5 flex flex-col sm:flex-row justify-between">
        <p className="text-sm leading-6 font-normal font-inter text-[#01292C]">© 2026 City Bank PLC. All rights reserved.</p>
        <p className="text-sm leading-6 font-normal font-inter text-[#01292C] flex items-center gap-2">
          Made for Bangladesh 🇧🇩
        </p>
      </div>
    </footer>
  );
}