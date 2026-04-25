import BannarSection from "@/components/banner/bannerSection";
import Company from "@/components/company/company";
import Discover from "@/components/discover/discoverSection";
import FAQ from "@/components/faq/faqSection";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ReadyBlink from "@/components/ready-blink/readyBlink";
import Security from "@/components/security/securitySection";

export default function Home() {
  return (
    <>

      <Header />
      <BannarSection />
      <Company />
      <Security />
      <Discover />
      <FAQ />
      <ReadyBlink />
      <Footer />

    </>
  );
}
