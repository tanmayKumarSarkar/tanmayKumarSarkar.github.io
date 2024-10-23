import React, { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-wrapper w-full min-h-screen">
            <div className="back -bottom-1 md:-bottom-8">
                <div className="sky"></div>
                <div className="ground h-[40%]">
                    <img className="" src="/assets/Contact/mars-sky-brown.png" alt="" />
                </div>
            </div>
            <div className="front"></div>
        </div>
    );
};

export default Contact;