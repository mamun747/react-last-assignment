import { ActivitiesData } from "@/Data/data";
import { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";

function Activities() {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Dynamically update the number of items to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1); // Small devices
      } else if (window.innerWidth < 1025) {
        setItemsToShow(2); // Tablets
      } else if (window.innerWidth <= 1440) {
        setItemsToShow(3); // Larger screens
      }
    };

    updateItemsToShow(); // Initial calculation
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleNext = () => {
    setIndex((prev) =>
      prev === ActivitiesData.length - itemsToShow ? 0 : prev + 1
    );
  };

  const visibleItems =
    ActivitiesData.slice(index, index + itemsToShow).length === itemsToShow
      ? ActivitiesData.slice(index, index + itemsToShow)
      : [
          ...ActivitiesData.slice(index),
          ...ActivitiesData.slice(
            0,
            itemsToShow - ActivitiesData.slice(index).length
          ),
        ];

  return (
    <>
      <section className="xl:ps-[48px]">
        <h1 className="text-[#1E1E1E] font-[800] text-[32px] pb-6">
          Recent Activities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-6 lg:space-x-0 place-items-center relative w-full">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="lg:h-[520px] xl:h-auto lg:w-[457px] bg-[#F8F8F8] rounded-[14px]"
            >
              <div className="py-6 px-3">
                <div className="flex gap-3 items-center">
                  <div className="w-[59px] h-[59px] rounded-full bg-white flex justify-center items-center">
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <h3 className="text-[#232323] font-semibold text-[21px]">
                      {item.name}
                    </h3>
                    <p className="text-[#8A8A8A]">{item.location}</p>
                  </div>
                </div>
                {/* Rating */}
                <div className="flex gap-3 pt-[23px]">
                  <img src={item.ratingImg} alt="" />
                  <p className="text-[#343434] text-sm">{item.date}</p>
                </div>
                {/* Description */}
                <div className="pt-[21.37px]">
                  <p className="text-[#5E5E5E]">{item.des1}</p>
                  <p className="text-[#5E5E5E] pt-4">{item.des2}</p>
                </div>
                {/* Image Gallery */}
                <div className="w-full pt-[39px] flex gap-3">
                  <img className="w-[70px]" src={item.img1} alt="" />
                  <img className="w-[70px]" src={item.img2} alt="" />
                  <img className="w-[70px]"  src={item.img3} alt="" />
                </div>
                {/* Discover */}
                <div className="pt-5">
                  <p className="text-[#232323] underline font-[500] text-[17px]">
                    {item.discover}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <button
            className="w-[59px] h-[59px] bg-white/60 hover:bg-white md:hover:translate-x-1 transition-all rounded-full flex justify-center items-center absolute top-44 right-10"
            onClick={handleNext}
          >
            <GoArrowRight className="w-[27px] h-[27px]" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Activities;