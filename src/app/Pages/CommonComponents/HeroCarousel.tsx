import { AnimatedDiv, AnimatedImage } from "@/app/AnimatedComponents";
import { HeroSliderBgAnimation } from "@/app/animations";
import { mainCarousel } from "@/app/constants";
import { AnimatePresence } from "framer-motion";
import React from "react";

const HeroCarousel = () => {
  return (
    <AnimatePresence>
      <div className="absolute flex flex-1 h-full w-full flex-row flex-wrap items-center justify-center overflow-hidden heroScreen scale-325 md:scale-250 px-[100px] md:px-[300px] md:ml-[125px] gap-y-[50px] md:gap-y-[105px] -z-10 blur-[1px] opacity-75 heroBg">
        {mainCarousel.map((item) => {
          return (
            //   <AnimatedImage
            //     variants={HeroSliderBgAnimation}
            //     animate="animate"
            //     transition={{
            //       duration: 60,
            //       repeat: Infinity,
            //       delayChildren: 0.5,
            //       repeatType: "mirror",
            //       ease: "linear",
            //     }}
            //     src={`/assets/images/mobile/${item?.filename}`}
            //     height={980}
            //     width={464}
            //     alt={item?.filename}
            //     className="aspect-[9/24] w-1/3 md:w-1/6 bg-transparent p-0 m-0 scale-105 md:scale-125"
            //     key={item?.order}
            //     quality={5}
            //     loading="lazy"
            //  />

            <AnimatedDiv
              key={item?.order}
              variants={HeroSliderBgAnimation}
              animate="animate"
              transition={{
                duration: 60,
                repeat: Infinity,
                delayChildren: 0.5,
                repeatType: "mirror",
                ease: "linear",
              }}
              style={{
                backgroundImage: `url(/assets/images/mobile/${item?.filename})`,
                backgroundSize: "contain",
                backgroundPosition: "contain",
                backgroundRepeat: "no-repeat",
                height: 150,
                overflow: "hidden",
              }}
              className="aspect-[9/24] w-1/2 md:w-1/5 bg-transparent overflow-hidden scale-125 md:scale-175"
            />
          );
        })}
      </div>
    </AnimatePresence>
  );
};

export default HeroCarousel;
