import BannarSection from "@/components/banner/bannerSection";
import BlinkDifference from "@/components/blink-difference/blinkDifference";
import BuildSection from "@/components/build-section/buildSection";
import Company from "@/components/company/company";
import Customer from "@/components/customer/customerSection";
import Discover from "@/components/discover/discoverSection";
import FAQ from "@/components/faq/faqSection";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ReadyBlink from "@/components/ready-blink/readyBlink";
import Security from "@/components/security/securitySection";
import Steps from "@/components/steps/Steps";

export default function Home() {
    return (
        <main>
            <Header />
            <BannarSection />
            <Company />
            <Security />
            <Discover />
            <Steps />
            <BlinkDifference />
            <BuildSection />
            <Customer />
            <FAQ />
            <ReadyBlink />
            <Footer />
        </main>
    );
}
