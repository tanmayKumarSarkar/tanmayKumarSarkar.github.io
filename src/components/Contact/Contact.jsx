import React, { useEffect,useState } from "react";
import "./Contact.css";



const Contact = () => {

    const [wrapperOffset, setWrapperOffset] = useState(0);

    const wrapperPosition = ()=>{
        const wrapper = document.querySelector('.parallax-wrapper')?.getBoundingClientRect();
        let wrapperScrollPos = 0;  
        if(!!wrapper){
        // wrapperScrollPos =   wrapper.height - wrapper.top;
        // if(wrapperScrollPos<0){
        //     wrapperScrollPos = 0
        // }if(wrapperScrollPos>wrapper.height){}   
        wrapperScrollPos=Math.min(wrapper.height, Math.max(0,( wrapper.height - wrapper.top)));    
        }
        console.log("wrapperScrollPos:::",wrapperScrollPos);
        setWrapperOffset(wrapperScrollPos);
    }

    useEffect(()=>{
        window.addEventListener('scroll',wrapperPosition)
    },[]);

    useEffect(()=>{
        let rocketGroup = document.querySelector('.rocket-group');
        let rocket = document.querySelector('.rocket');
        let rocketTop = (wrapperOffset - (rocket.getBoundingClientRect().height+20));
        if(rocketTop<0)rocketTop=0;
        console.log("wrapperOffset::",wrapperOffset,"rocketTop",rocketTop);
        rocketGroup.style.top = rocketTop+'px';
    },[wrapperOffset]);

    return (
        <div className="contact-wrapper w-full min-h-screen">
            <div className="back -bottom-1 md:-bottom-8">
                <div className="sky"></div>
                <div className="ground ">
                    <img className="" src="/assets/Contact/mars-sky-brown.png" alt="" />
                </div>
            </div>
            <div className="parallax-wrapper" >
                <div className="prlx-elm satelite w-[30%] md:w-[25%]  ">
                    <img src="/assets/Contact/satelite.png" alt="" />
                </div>
                <div className="prlx-elm planet-1 w-[20%] md:w-[8%]  ">
                    <img src="/assets/Contact/planet-1.png" alt="" />
                </div>
                <div className="prlx-elm planet-2 w-[20%] md:w-[8%]  ">
                    <img src="/assets/Contact/planet-2.png" alt="" />
                </div>
                <div className="prlx-elm planet-3 w-[20%] md:w-[8%]  ">
                    <img src="/assets/Contact/planet-3.png" alt="" />
                </div>
                <div className="prlx-elm planet-4 w-[20%] md:w-[8%]  ">
                    <img src="/assets/Contact/planet-4.png" alt="" />
                </div>
                <div className="prlx-elm planet-5 w-[20%] md:w-[8%]  ">
                    <img src="/assets/Contact/planet-5.png" alt="" />
                </div>
                <div className="prlx-elm rocket-group ">
                    <div className=" rocket ">
                        <img src="/assets/Contact/rocket-4.png" alt="" />
                    </div>
                    <div className=" rocket-fire ">
                        <img src="/assets/Contact/rocket-fire.png" alt="" />
                    </div>
                    <div className=" rocket-smoke ">
                        <img src="/assets/Contact/rocket-smoke.png" alt="" />
                    </div>
                </div>
                <div className="prlx-elm rover ">
                    <img src="/assets/Contact/rover-2.png" alt="" />
                </div>
            </div>
            <div className="front"></div>
        </div>
    );
};

export default Contact;