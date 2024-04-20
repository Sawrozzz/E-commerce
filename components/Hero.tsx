
'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "Find, book or rent a car - quickly and easily";
  const typingSpeed = 200; 

  useEffect(() => {
   
    const typeEffect = () => {
      for (let i = 0; i < textToType.length; i++) {
        setTimeout(() => {
          setTypedText(textToType.substring(0, i + 1));
        }, typingSpeed * i);
      }
    };

    typeEffect(); 

    return () => {
    };
  }, []);

  const handleScroll = () => {
    const distanceToScroll = 600; 
    window.scrollTo({
      top: window.pageYOffset + distanceToScroll, 
      behavior: "smooth" 
    });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        {/* Display the typed text with transition effect */}
        <h1 className="hero__title">
          {typedText}
        </h1>

        <p className="hero__subtitle">
          Start Your journey with our cars ready for you to be on your path
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
