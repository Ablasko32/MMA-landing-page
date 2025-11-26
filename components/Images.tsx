"use client";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
      <h2 className="font-subtitle text-center text-4xl! mb-14">
        Upoznajte naš klub
      </h2>
      <div className="px-10 ">
        <Slider {...settings} className="max-w-2xl mx-auto">
          {IMAGES.map((src, idx) => {
            return (
              <div
                key={idx}
                className="h-96 relative rounded-md overflow-hidden "
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
