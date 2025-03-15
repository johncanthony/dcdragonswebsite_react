import TitleTab from "./TitleTab";
import { Artboard } from "react-daisyui";
import ClassesImg from "../assets/images/kick_banner.jpg";
import ClassCard from "./ClassCard";
import {faDragon,faSeedling,faCrown,faChild, faY, faWheelchairMove} from '@fortawesome/free-solid-svg-icons'
import {Button} from "react-daisyui";

function Classes() {
    return (
        <div id="classes" className="max-w-screen bg-white p-4 relative">
            <TitleTab title="Classes" bgcolor="bg-white" textcolor="text-black"/>

                <div className="flex flex-col items-center gap-20 mb-[20%] md:mb-[10%]">            
                    <div className="">
                        <Artboard className="mt-[15%] md:mt-[10%]">
                            <img src={ClassesImg} alt="Classes" className="rounded-lg" />
                        </Artboard>

                        
                    </div>
                    <div className="text-xl md:text-4xl text-slate-600 font-bold tracking-wide justify-center">Classes for all Ages and Skill Levels</div> 

                         
                    <div className="items-center mx-4">
                    <div className="grid grid-cols-1 gap-y-6 md:gap-y-16 md:grid-cols-2 md:mt-16">
                        <ClassCard icon={faSeedling} classname="Little Lizards" ages="Ages 3&4 Years" description="Traditional Karate Skills • Coordination • Respect • Concentration • Behavior • Fitness • Direction" />
                        <ClassCard icon={faChild} classname="Little Dragons" ages="Ages 5-7 Years" description="Traditional Karate Skills • Introduction to Forms • Flag Sparring • Padded Sword Sparring" />
                        <ClassCard icon={faDragon} classname="DC Dragons" ages="Ages 7 years - Adult" description="Traditional Martial Arts • Competitive Martial Arts • Weapons • Sparring • Self Defense" />
                        <ClassCard icon={faCrown} classname="Silver Dragons" ages="Ages 55+" description="Learn martial arts in a relaxed environment • Low Impact Exercise • All Abilities Welcome • 30 minutes, Once a Week" />
                        <ClassCard icon={faY} classname="YMCA Dragons Karate" ages="Ages 5+" description={`Olive Branch YMCA \n 8555 Goodman Road \n Olive Branch, MS 38654`} />
                        <ClassCard icon={faWheelchairMove} classname="Adaptive Karate" ages="All Ages" description={`Improve Motor Skills • Increase Fitness Improve Hand/Eye Coordination • Increase Focus Improve Self-Confidence • Improve Social Interaction \n\n Individualized plans developed for each student based on ability`} />
                    </div>
                        
                    </div>
                    <Button 
                            tag="a" 
                            href="#contact" 
                            size="md" 
                            active="true" 
                            className="text-white bg-[#540FA3] md:btn-lg shadow-2xl w-[15rem] tracking-widest">
                               GET STARTED 
                        </Button>

                  
                </div>
        </div>
    );
}

export default Classes;