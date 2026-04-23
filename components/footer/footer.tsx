import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F4F1E8] text-[#0B3C2F] pt-16 pb-6">
      <div className="container">

        <div className="flex items-center justify-between">
          {/* Logo + Description */}
          <div className="w-full max-w-[384px] space-y-4">
            <h2 className="text-3xl font-bold text-green-500">blink</h2>

            <p className="text-sm leading-6 max-w-md">
              A new digital banking experience by City Bank PLC. Designed to make everyday money simpler,
              faster, and more intuitive.
            </p>

            <div>
              <p className="font-semibold mb-2">Get the App</p>

              <div className="flex gap-3">
                <Link href="#">
                  <Image
                    src="/google-play.png"
                    alt="Google Play"
                    width={140}
                    height={40}
                  />
                </Link>

                <Link href="#">
                  <Image
                    src="/app-store.png"
                    alt="App Store"
                    width={140}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className=" flex-1">
            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#">Personal</Link></li>
                <li><Link href="#">Business</Link></li>
                <li><Link href="#">Rewards</Link></li>
                <li><Link href="#">Company</Link></li>
                <li><Link href="#">Help Center</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal & Regulatory</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#">Terms & Conditions</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Schedule of Charges</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>

              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <MapPin size={18} className="mt-1" />
                  <span>
                    Wisconsin Ave, Suite 700 <br />
                    Chevy Chase, Maryland 20815
                  </span>
                </li>

                <li className="flex gap-2">
                  <Mail size={18} />
                  <Link href="mailto:hello@blink.com.bd">
                    hello@blink.com.bd
                  </Link>
                </li>

                <li className="flex gap-2">
                  <Phone size={18} />
                  <Link href="tel:16234">
                    16234 (24/7 Hotline)
                  </Link>
                </li>
              </ul>

              {/* Social */}
              <div className="mt-4">
                <p className="font-semibold mb-2">Follow us</p>

                <div className="flex gap-3">
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-green-100 hover:text-green-600 transition"
                  >
                    fb
                  </Link>

                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-green-100 hover:text-green-600 transition"
                  >
                    in
                  </Link>

                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-green-100 hover:text-green-600 transition"
                  >
                    link
                  </Link>

                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-green-100 hover:text-green-600 transition"
                  >
                    ypu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between text-xs">
        <p>© 2026 City Bank PLC. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Made for Bangladesh 🇧🇩</p>
      </div>
    </footer>
  );
}