import CreditCard from "./creditCard";

export default function Discover(){
    return(
        <section className="py-6.25 lg:py-12.5">
            <div className="container">
                <div className="w-full max-w-150 text-center mx-auto">
                    <h2 className="bg-[linear-gradient(90deg,#3AC2D6_-2.38%,#59C4AB_15.62%,#7EC779_40.62%,#99CA54_62.62%,#A9CB3E_79.62%,#B0CC36_90.62%,#B0CC36_97.62%)] bg-clip-text text-transparent mb-5"><span className="text-[#004737]">Discover What We </span> <span className="">Offer</span></h2>
                    <p className="text-base lg:text-xl font-normal opacity-80">Unlock convenience and efficiency with standout features, revolutionizing your banking journey.</p>
                </div>
                <div className="mt-16 lg:mt-30">
                    <CreditCard />
                </div>
            </div>
        </section>
    )
}