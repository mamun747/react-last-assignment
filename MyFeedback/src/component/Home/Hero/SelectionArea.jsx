import { useState } from "react";
import { HeroData } from "@/Data/data";

function Hero() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="pt-9 px-[46px]">
      <div className="flex justify-around items-center relative">
        {HeroData.map((value) => (
          <div
            key={value.id}
            className="flex flex-col items-center cursor-pointer"
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
            <div className={`${selectedId === value.id ? "border border-[#1677BD] w-[84px] h-[2px] absolute -bottom-2" : ""}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;