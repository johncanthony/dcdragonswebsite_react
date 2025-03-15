import { Indicator,Button,Badge } from "react-daisyui";
import TitleTab from "./TitleTab";

function WelcomeInfoPanel(){
    return(
        <div id="infopanel" className="max-w bg-[#540FA3] p-4 relative">
                <TitleTab title="TRAIN" bgcolor="bg-[#540FA3]" textcolor="text-white"/>
                
                <div className="max-w grid grid-rows-3 justify-center mt-4 md:mt-12 mb-36">
                    <div className="grid row-span-1 justify-center">
                        <h1 className="text-white/75 text-lg md:text-2xl mt-9">Traditional Martial Arts Training</h1>
                    </div>
                    <div className="grid row-span-2">
                        <div className="grid grid-rows-4 md:grid-cols-4 justify-center gap-2 -mb-2 md:-mb-12">                       
                            <Button  size="md" active="true" className="text-white bg-[#2f333b] lg:btn-lg shadow-xl">Self Defense</Button>
                            <Button  size="md" active="true" className="text-white bg-[#2f333b] lg:btn-lg shadow-xl">SPARRING</Button>
                            <Button  size="md" active="true" className="text-white bg-[#2f333b] lg:btn-lg shadow-xl">Weapons</Button>
                            <Button  size="md" active="true" className="text-white bg-[#2f333b] lg:btn-lg shadow-xl">TOURNAMENTS</Button>

                        </div>
                    </div>
                    
                    <div className="grid row-span-3 justify-center">
                        <div className="text-3xl md:text-5xl font-bold text-white mt-10 md:-mt-20 tracking-wide ">All Ages Welcome</div>    
                        <div className="text-lg text-center tracking-wider">No Billing, No Contracts</div>  
                        <Button tag="a" href="#contact" size="md" active="true" className="text-white bg-[#63634A] md:btn-lg shadow-xl mt-5">Contact Now!</Button>
                    </div>
               </div>    
        </div>
    );
}

export default WelcomeInfoPanel;