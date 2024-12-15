import { HeroData } from "@/Data/data"

function Hero() {
  return (
    <>
    <section className="pt-9 px-[46px]">
      <div className="flex justify-around items-center">
        {
          HeroData.map((value) => (
            <div key={value.id} className="flex flex-col items-center">
              <img src={value.img} alt="selection gallary" />
              <p className="text-[#AFAFAF] text-[15px] pt-3">{value.name}</p>
            </div>
          ))
        }
      </div>
    </section>
    </>
  )
}

export default Hero