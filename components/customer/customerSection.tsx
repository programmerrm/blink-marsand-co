import Image from "next/image";
import customerImage from "../../assets/image/customer.png";
export default function Customer(){
    return(
        <section>
            <div className="container">
                <div className="flex ">
                    <div>
                        <h2>What Our Customer Say About Us</h2>
                    </div>
                    <div>
                        <Image 
                            src={customerImage}
                            alt="customer Image"
                            width={872}
                            height={666}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}