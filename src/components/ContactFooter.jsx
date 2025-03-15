import TitleTab from "./TitleTab";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
import { faPhone,faHouse, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";


function ContactFooter() {
    return (
        <div id="contact" className="max-w-screen bg-[#282b34]  p-4 relative">
            <TitleTab title="get in touch" bgcolor="bg-[#282b34]" textcolor="text-white" />

            <div className="justify-items-center">
                 <div className="flex flex-col items-center shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)] pb-8">
                
                     <div className="text-xl md:text-4xl lg:text-5xl font-bold text-white mt-12 md:mt-20 lg:mt-32 tracking-widest align-middle">Come try a class obligation free!</div>    
                     <div className="text-md md:text-xl tracking-widest mt-4 md:mt-8">Drop us a message below, or give us a call today</div>     
                
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-[60%_40%] lg:justify-items-center mt-12 md:mt-24 items-center">
                   
                    <ContactForm />

                    
                     <div className="grid grid-cols-2 mt-8 lg">
                       <ContactCard icon={faPhone} title="Call Us" link="tel:901-585-3738" linkDesc="901.585.3738" />
                       <ContactCard icon={faFacebook} title="Facebook Page" link="https://www.facebook.com/NorthMississippiMartialArts" linkDesc="North Mississippi Martial Arts"/> 
                       <ContactCard icon={faHouse} title="Address" link="https://maps.app.goo.gl/4drNFGN7WnsK3JkD8" linkDesc={`DC Dragons Karate \n 8155 Hwy 178 \n Olive Branch, MS 38654`}/>
                       <ContactCard icon={faEnvelope} title="Email" link="mailto:bakerjeffrey430@gmail.com" linkDesc={`bakerjeffrey430\n@gmail.com`} />
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default ContactFooter;