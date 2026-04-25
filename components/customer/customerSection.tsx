"use client";

import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import customerImage from "../../assets/image/customer.png";
import customerBg from "../../assets/image/customer-bg.png";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Customer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const hdesRef = useRef<HTMLHRElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(sectionRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(
        imageRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      );

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.6,
      }, "-=0.4");

      tl.from(quoteRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.5,
      }, "-=0.3");

      tl.from(descRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.5,
      }, "-=0.3");

      tl.from(hdesRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.5,
      }, "-=0.3");

      tl.from(nameRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.4,
      }, "-=0.2");

      tl.from(roleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.4,
      }, "-=0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[linear-gradient(90deg,#006870_0.38%,#006870_1.38%,#004B51_43.62%,#01292C_100.94%)] relative overflow-hidden">
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
        <div ref={sectionRef} className="relative z-10 flex flex-col lg:flex-row items-end">
          {/* Left Content */}
          <div className="w-full max-w-157 translate-x-0 z-20 pb-5 xl:pb-36.5 mt-6 sm:mt-12.5 md:mt-25">
            <h2 ref={titleRef} className="text-white lg:leading-16"> What Our Customer Say About Us </h2>
            <div className=" max-w-122 w-full mt-10 md:mt-20">
              <span ref={quoteRef} className="text-base sm:text-xl font-semibold font-inter leading-6.25 text-white">“Best digital banking service”</span>
              <p ref={descRef} className="text-base sm:text-xl font-normal font-inter leading-6.25 text-white mt-4 sm:mt-8">Blink has transformed my financial life. It&apos;s intuitive, secure, and makes managing my money a breeze. Highly recommended!</p>
              <hr ref={hdesRef} className="text-white mt-4 sm:mt-8 " />
            </div>

            <div className="mt-8 sm:mt-16">
              <h4 ref={nameRef} className="text-xl sm:text-2xl font-semibold leading-6.25 text-white font-inter">Samia Rahman</h4>
              <h5 ref={roleRef} className=" font-inter font-normal text-[#BDD630] mt-1">HR</h5>
            </div>
          </div>
          {/* Right Image */}
          <div ref={imageRef} className="w-[82%] -ml-30 overflow-hidden">
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
