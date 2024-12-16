import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function HeroCarousel() {
  const HeroCarouselData = [
    {
      id: 1,
      img: "/img1.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: "/starFullGroup.png",
      rating2: "5.0",
      reviews: "(876 reviews)",
    },
    {
      id: 2,
      img: "/img2.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: "/starFullGroup.png",
      rating2: "5.0",
      reviews: "(876 reviews)",
    },
    {
      id: 3,
      img: "/img3.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: "/starFullGroup.png",
      rating2: "5.0",
      reviews: "(876 reviews)",
    },
    {
      id: 4,
      img: "/img4.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: "/starFullGroup.png",
      rating2: "5.0",
      reviews: "(876 reviews)",
    },
    {
      id: 5,
      img: "/img2.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: "/starFullGroup.png",
      rating2: "5.0",
      reviews: "(876 reviews)",
    },
    {
      id: 6,
      img: "/img1.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: "/starFullGroup.png",
      rating2: "5.0",
      reviews: "(876 reviews)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? HeroCarouselData.length - 4 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((next) =>
      next === HeroCarouselData.length - 4 ? 0 : next + 1
    );
  };

  const visibleItems = HeroCarouselData.slice(
    currentIndex,
    currentIndex + 4
  ).length === 4
    ? HeroCarouselData.slice(currentIndex, currentIndex + 4)
    : [...HeroCarouselData.slice(currentIndex), ...HeroCarouselData.slice(0, 4 - HeroCarouselData.slice(currentIndex).length)];

  return (
    <>
      <section className="mx-[47px] mt-[71px]">
        <div className="px-6 py-5 bg-[#1677BD] rounded-[9px] w-[1345px] mx-auto relative">
          <h2 className="text-[32px] font-[400] text-white">
            Find the best restaurant ratings below
          </h2>
          <div className="pt-[31px] grid grid-cols-4 place-items-center gap-4">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="w-[285px] h-[363px] rounded-[18px] bg-white"
              >
                <img src={item.img} alt="" />
                <div className="ps-[14px] pt-[13px]">
                  <h3 className="font-semibold text-[#232323] text-[19px]">
                    {item.title}
                  </h3>
                  <p className="text-[#8F8F8F] text-sm max-w-[234px]">
                    {item.des}
                  </p>
                </div>
                <div className="pt-6 flex justify-around pb-5">
                  <img src={item.rating} alt="" />
                  <p className="text-[#232323] text-sm font-semibold">
                    {item.rating2}{" "}
                    <span className="text-[#8F8F8F]">{item.reviews}</span>
                  </p>
                </div>
              </div>
            ))}
            <button
              className="w-[59px] h-[59px] bg-white/60 rounded-full flex justify-center items-center absolute top-44 left-4"
              onClick={handlePrev}
            >
              <GoArrowLeft className="w-[27px] h-[27px]" />
            </button>
            <button
              className="w-[59px] h-[59px] bg-white rounded-full flex justify-center items-center absolute top-44 right-4"
              onClick={handleNext}
            >
              <GoArrowRight className="w-[27px] h-[27px]" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroCarousel;
