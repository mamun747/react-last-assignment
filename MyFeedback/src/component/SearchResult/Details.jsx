import { detailsData, discoverData } from "@/Data/data";
import Footer from "../Common/Footer";

function Details() {
  return (
    <>
      <section className="pt-5 overflow-hidden">
        <p className="text-[#232323] font-semibold text-base lg:ps-[100px]">
          Home / All restaurants
        </p>
        <div className="w-full lg:mt-[19px] relative">
          <img
            src="/img34.png"
            className="bg-cover object-cover w-full -z-50 hidden lg:block"
            alt=""
          />
          <div className="pt-[67px] lg:ps-[96px] lg:absolute lg:top-0 lg:left-0 lg:z-20">
            <h1 className="font-semibold text-5xl md:text-[52px] leading-[65px] text-black md:text-[#FFFFFF]">
              Bella italia
            </h1>
            <div className="lg:pt-[14px] flex gap-[14.33px] items-start">
              <img className="lg:w-[164px]" src="starFullGroup.png" alt="" />
              <p className="lg:text-white text-[19px] font-semibold">
                5.0 <span>(834 reviews)</span>
              </p>
            </div>
            <div className="pt-[28px]">
              <p className="font-[400] text-[19px] lg:text-white max-w-[528px]">
                The lorem ipsum is, in printing, a series of meaningless words
                used temporarily to calibrate a layout.
              </p>
              <p className="font-[400] text-[19px] lg:text-white max-w-[528px]">
                The lorem ipsum is, in printing, a series of meaningless words
                used temporarily to calibrate a layout.
              </p>
            </div>
            <div className="mt-[66px]">
              <div className="flex gap-2.5 items-center">
                <img src="/LocationIcon.png" alt="" />
                <p className="text-[19px] font-[400] lg:text-white">
                  Singapour, Bishan-Ang Mo Kio Park{" "}
                </p>
              </div>
              <div className="flex gap-2.5 items-center mt-[38px]">
                <img src="/ClockIcon.png" alt="" />
                <p className="text-[19px] font-[400] lg:text-white">
                  7j/7, 08:00 - 22:00{" "}
                </p>
              </div>
            </div>
          </div>
          <img
            src="/BellaItaliaLogo.png"
            className="hidden lg:block absolute -bottom-16 right-[45%]"
            alt=""
          />
        </div>
        <div className="pt-[90px] ps-[20px] xl:ps-[148px] pe-[142px]">
            <div className="flex xl:justify-between xl:items-start flex-col xl:flex-row space-y-10 xl:space-y-0">
          <div>
            <h1 className="font-semibold text-[34px] text-[#1E1E1E]">
              More informations
            </h1>
            <ul className="mt-[42px] space-y-[35px]">
              <li className="flex gap-[16.39px] items-center">
                <img src="/restaurant.png" alt="" />
                <p className="text-[#232323] font-[400] text-[20px] underline">See the menu</p>
              </li>
              <li className="flex gap-[13.99px] items-center">
                <img src="/whatsapp.png" alt="" />
                <p className="text-[#232323] font-[400] text-[20px]">+847 87 37 29 01</p>
              </li>
              <li className="flex gap-[16px] items-center">
                <img src="/mapBlack.png" alt="" />
                <p className="text-[#232323] font-[400] text-[20px]">Singapour, Bishan</p>
              </li>
              <li className="flex gap-[16px] items-center">
                <img src="/mapBlack.png" alt="" />
                <p className="text-[#232323] font-[400] text-[20px]">7j/7, 08:00 - 22:00</p>
              </li>
              <li className="flex gap-[16.39px] items-center">
                <img src="/email.png" alt="" />
                <p className="text-[#232323] font-[400] text-[20px] underline">www.bellaitalia.com</p>
              </li>
            </ul>
            <div className="mt-[27px] flex gap-[27.55px]">
                <img src="/facebook.png" alt="" />
                <img src="/instagram.png" alt="" />
                <img src="/tiktok.png" alt="" />
                <img src="/whatsapp.png" alt="" />
            </div>
          </div>
          <img src="/map2.png" alt="" />
          </div>
        <hr className="mt-[52px] mb-[57px] bg-[#DCDCDC]"/>
        </div>
        <div className="ps-[20px] xl:ps-[139px]">
            <div className="flex flex-col xl:flex-row gap-[52px]">
                <div className="flex gap-[15.94px] items-start">
                    <img src="/starFrame.png" alt="" />
                    <div>
                        <h1 className="text-[#232323] font-bold text-[32px]">Overall rating</h1>
                        <p className="text-[19px] font-[400] text-[#838383] pt-[9px]">834 Reviews</p>
                        <img src="starFullGroup.png" className="pt-7" alt="" />
                    </div>
                </div>
                <div className="w-[549px] h-[128px] rounded-sm">
                    <div className="flex gap-2.5 justify-between items-center w-[245px] md:w-auto">
                        <p className="text-[#484848] text-[17px] font-[400]">5 stars</p>
                        <div className="rounded h-[9px] w-[487px] bg-[#1677BD]"></div>
                    </div>
                    <div className="flex gap-2.5 justify-between items-center pt-[7px] w-[245px] md:w-auto">
                        <p className="text-[#484848] text-[17px] font-[400]">0 star</p>
                        <div className="rounded h-[9px] w-[487px] bg-[#D9D9D9]">
                            <div className="w-[170.25px] bg-[#268AD1] h-[9px] rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex gap-2.5 justify-between items-center pt-[7px] w-[245px] md:w-auto">
                        <p className="text-[#484848] text-[17px] font-[400]">0 star</p>
                        <div className="rounded h-[9px] w-[487px] bg-[#D9D9D9]">
                            <div className="w-[134.94px] bg-[#2E95DF] h-[9px] rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex gap-2.5 justify-between items-center pt-[7px] w-[245px] md:w-auto">
                        <p className="text-[#484848] text-[17px] font-[400]">0 star</p>
                        <div className="rounded h-[9px] w-[487px] bg-[#D9D9D9]">
                            <div className="w-[116.22px] bg-[#37A0EB] h-[9px] rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex gap-2.5 justify-between items-center pt-[7px] w-[245px] md:w-auto">
                        <p className="text-[#484848] text-[17px] font-[400]">0 star</p>
                        <div className="rounded h-[9px] w-[487px] bg-[#D9D9D9]">
                            <div className="w-[64.56px] bg-[#3DA6F2] h-[9px] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="hidden md:block mt-[60px] ms-[139px] me-[142px] mb-5 bg-[#DCDCDC]"/>

        <div className="mt-[160px] p-4 xl:p-0 xl:ps-[138px]">
            <div className="flex gap-[38px] items-center">
                {/* filter */}
                <button className="px-6 py-[14px] border border-[#5E5E5E] rounded-full flex gap-[7px] items-center"><img src="/filter.png" alt="" />Filter</button>
                {/* sort */}
                <button className="px-6 py-[14px] border border-[#5E5E5E] rounded-full flex gap-[7px] items-center"><img src="/sort.png" alt="" />Sort</button>
            </div>
            <div className="space-y-[27px] pt-[20px] md:pt-[43px]">
                {
                    detailsData.map(value => (
                        <div key={value.id} className="w-full xl:w-[1055px] h-auto bg-[#F8F8F8] rounded-[20px]">
                            <div className="ps-5 py-[21px]">
                                <div className="flex gap-[9px] items-start">
                                    <div className="w-[59px] h-[59px] rounded-full bg-white flex justify-center items-center">
                                    <img src={value.img} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-[#232323] text-[21px] font-semibold">{value.name}</h2>
                                        <p className="font-[400] text-[#8A8A8A] pt-[3px]">{value.location}</p>
                                        <div className="flex gap-3 items-end pt-[11px]">
                                        <img src={value.ratingImg} alt="" />
                                        <p className="text-[#343434] font-[400] text-sm">{value.date}</p>
                                        </div>
                                        <p className="font-[400] text-[#5E5E5E] pt-7 max-w-[511px]">{value.des}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="mt-[86px] flex mx-auto text-[19px] bg-[#1677BD] text-white px-10 py-3 rounded-full">Show more reviews</button>

            <div className="pt-[42px]">
                <h1 className="text-[#1E1E1E] font-extrabold text-[32px]">Also discover...</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[77px]">
                    {
                        discoverData.map((value, i) => (
                            <div key={i} className="lg:w-[319px] h-auto bg-[#F8F8F8] rounded-[14px] mt-[45px]">
                                <img src={value.img} alt="" className="w-full" />
                                <div className="ps-[14px]">
                                <h2 className="text-[#232323] font-semibold text-[22px] mt-[13px]">{value.name}</h2>
                                <p className="max-w-[280px] text-[#8F8F8F] font-[400] mt-[11px]">{value.des}</p>
                                <div className="flex gap-[12.67px] items-center pt-[27px]">
                                    <img src={value.ratingImg} alt="" />
                                    <p className="text-[15.5px] font-semibold">{value.rating} <span className="text-[#7A7A7A]">{value.reviews}</span></p>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Details;
