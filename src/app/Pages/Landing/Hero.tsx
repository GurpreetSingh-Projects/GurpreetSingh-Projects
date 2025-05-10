import { AnimatedDiv, AnimatedImage } from "@/app/AnimatedComponents";
import { HeroRollingText, mainCarousel } from "@/app/constants";
import Image from "next/image";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import TypewriterEffect from "../CommonComponents/TypewriterEffect";
import { HeroSliderBgAnimation } from "../../animations";
import { StarIcon } from "@/app/Commons/Icons";
import { ArrowUpRightIcon } from "lucide-react";
import HeroCarousel from "../CommonComponents/HeroCarousel";

const Hero = () => {
  return (
    <div className="h-[90vh] md:h-screen overflow-hidden relative items-center">
      <HeroCarousel />

      <div className="flex flex-1 flex-col h-full w-full text-center leading-[0.75] bg-black/20 relative items-center justify-center z-20">
        <div className="text-white font-semibold text-md border-2 border-white rounded-full py-2 px-5 w-fit items-center justify-center relative">
          Hello
          <Image
            src={`/assets/images/floater.svg`}
            height={25}
            width={25}
            alt=""
            className="absolute -right-5 -top-5 z-20 floatIt scale-50 md:scale-100"
            quality={50}
          />
        </div>
        <div className="font-primary self-center font-semibold text-[40px] md:text-[80px] text-white  mb-[250px] relative flex flex-col items-center justify-center text-center">
          <div className="heroText drop-shadow-2xl">
            <span className="!z-50">I&apos;m&nbsp;</span>
            <span className="textGradient my-2 md:my-0 drop-shadow-2xl">
              Gurpreet Singh
            </span>
          </div>

          <AnimatedDiv className="text-[25px] md:text-[45px] text-nowrap mt-3 py-3 overflow-hidden">
            <TypewriterEffect typewriterText={HeroRollingText} />
          </AnimatedDiv>

          <Image
            src={`/assets/images/floater2.svg`}
            height={60}
            width={60}
            alt=""
            className="absolute left-15 -bottom-15 z-20 floatIt scale-50 md:scale-100"
            quality={50}
          />
        </div>
        <Image
          src={`/assets/images/pic.png`}
          height={500}
          width={350}
          alt="Gurpreet Singh"
          className="absolute bottom-0 z-20"
          quality={50}
        />
        <div className="flex absolute w-[575px] h-[575px] circularGradient rounded-full bottom-[-50%] backdrop-blur-sm z-10"></div>

        <div className="absolute bottom-5 z-30">
          <div className="header items-center justify-center w-full relative">
            <div className="w-full flex items-center justify-center">
              <ul className="relative flex items-center justify-around rounded-full p-1 border-1 border-white  !bg-white/20 backdrop-blur-sm scale-105 !opacity-100">
                <li
                  className={`bg-[var(--active)] font-semibold flex text-center py-3 rounded-full text-white px-7.5 mx-2 text-md items-center justify-center`}
                >
                  <span>Portfolio&nbsp;</span>
                  <ArrowUpRightIcon />
                </li>
                <li
                  className={`bg-transparent font-semibold flex text-center py-3 rounded-full text-white px-0 mx-2 text-md scale-95 px-3`}
                >
                  Hire me
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-col absolute bottom-[40%] z-10 left-5  hidden md:flex">
          <Image
            src={"/assets/images/quote-up.svg"}
            height={40}
            width={40}
            alt=" "
          />
          <h6 className="font-semibold text-[14px] italic max-w-[250px] text-start mt-1 leading-5 text-white text-shadow-md">
            Gurpreet is a skilled frontend and mobile developer who delivers
            clean, responsive apps fast. Dependable and detail-oriented.
          </h6>
        </div>
        <div className="flex-col absolute bottom-[40%] z-10 right-5 items-center justify-center hidden md:flex">
          <div className="flex flex-nowrap flex-row">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <span key={index}>
                  <StarIcon />
                </span>
              );
            })}
          </div>
          <h4 className="font-bold text-4xl text-nowrap max-w-[250px] text-start mt-1 text-white textShadow tracking-tight text-shadow-lg">
            1.5+ Years <br />
          </h4>
          <h6 className="!text-md font-semibold mt-2 text-white">Experience</h6>
        </div>
      </div>
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Hero;
