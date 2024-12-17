import { useState } from "react";
import { HeroData } from "@/Data/data";
import Trends from "../HeroArea/Trends";

function Hero() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="pt-9 px-[46px]">
      <div className="flex justify-center gap-4 lg:gap-0 lg:justify-around items-center relative flex-wrap">
        {HeroData.map((value) => (
          <div
            key={value.id}
            className="flex flex-col items-center cursor-pointer relative"
            onClick={() => setSelectedId(value.id)}
          >
            <img
              src={value.img}
              alt={value.name}
              className={`transition-all duration-300 ${
                selectedId === value.id ? "selected-color" : ""
              }`}
            />
            <p
              className={`text-[15px] pt-3 ${
                selectedId === value.id ? "text-[#1677BD]" : "text-[#AFAFAF]"
              }`}
            >
              {value.name}
            </p>
            {/* Fixed selected menu indicator */}
            {selectedId === value.id && (
              <div className="absolute bottom-[-8px] border border-[#1677BD] w-[84px] h-[2px]"></div>
            )}
          </div>
        ))}
      </div>

      {/* Conditional Rendering of Trends Section */}
      {HeroData.find((item) => item.id === selectedId && item.toggle) && (
        <Trends />
      )}
    </section>
  );
}

export default Hero;
