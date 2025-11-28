"use client";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Subtitle } from "./ui/Subtitle";

const IMAGES = [
  "/boxer-kicking.webp",
  "/boxer-kicking.webp",
  "/boxer-kicking.webp",
];

export const Images = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="image-gallery" className="">
      <Subtitle text="Upoznajte naš klub" />
      <p className="text-sm text-center mb-8 opacity-70">
        &quot;Naša misija je približiti MMA svima. &quot;
      </p>
      <div className="px-10 ">
        <Slider {...settings} className="max-w-2xl mx-auto">
          {IMAGES.map((src, idx) => {
            return (
              <div
                key={idx}
                className="h-96 lg:h-140 relative rounded-md overflow-hidden "
              >
                <Image
                  src={src}
                  key={idx}
                  fill
                  alt="Slika treninga"
                  className="object-center object-cover"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
