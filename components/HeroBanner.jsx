import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

const sildes = [
  {
    id: 1,
    src: "/slide-1.png",
    alt: "slide-1.png",
  },
  {
    id: 2,
    src: "/slide-2.png",
    alt: "slide-2.png",
  },
  {
    id: 1,
    src: "/slide-3.png",
    alt: "slide-3.png",
  },
];

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        showThumbs={false}
        showArrows={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px]  bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px]  bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
      >
        {sildes.map((sildeImg) => {
          return (
            <div key={sildeImg.id}>
              <Image
                src={sildeImg.src}
                alt={sildeImg.alt}
                className="aspect-[16/10] md:aspect-auto object-cover"
                width={1240}
                height={1240}
                priority
              />
              <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                Shop Now
              </div>
            </div>
          );
        })}
        {/* <div>
          <Image src="slide-2.png" alt="" className="" width={} height={}/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image src="slide-3.png" alt="" className="" width={} height={}/>
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
