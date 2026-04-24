import BannarSection from "@/components/banner/bannerSection";
import Company from "@/components/company/company";
import Discover from "@/components/discover/discoverSection";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Security from "@/components/security/securitySection";

export default function Home() {
  return (
    <>

      <Header />
      <BannarSection />
      <Company />
      <Security />
      <Discover />
      <Footer />

    </>
  );
}
