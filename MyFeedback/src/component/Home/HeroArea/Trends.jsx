import { TrendsData } from "@/Data/data"

function Trends() {
  return (
    <>
    <section className="mx-[47px] mt-[102px]">
      <h1 className="text-[#1e1e1e] font-[800] text-2xl">The latest trends</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center mb-[52px]">
        {
          TrendsData.map(value => (
            <div key={value.id} className="w-[319px] h-auto mt-[25px] bg-[#F8F8F8] rounded-[14px]">
                  <div>
                    <img src={value.img} alt="" />
                    <div className="ps-[14px] pb-[17px]">
                    <h2 className="pt-[13px] text-[#232323] text-[22px] font-semibold">{value.title}</h2>
                    <p className="text-[#8F8F8F] text-base pt-[11px]">{value.des}</p>
                  <div className="flex gap-[12.67px] items-center pt-[27px]">
                    <img src={value.ratingImg} alt="" />
                    <p className="text-[#232323] font-semibold text-[15.5px]">{value.rating} <span className="text-[#7A7A7A]">{value.reviews}</span></p>
                  </div>
                  </div>
                </div>
              </div>
          ))
        }
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[#1E1E1E] text-[22px] font-[400] text-center md:text-left">Discover more cool restaurants</h1>
        <button className="px-6 md:px-[39px] py-2 md:py-3 bg-[#1677BD] rounded-full text-white text-base md:text-[19px] text-center mt-5">Show more</button>
      </div>
    </section>
    </>
  )
}

export default Trends