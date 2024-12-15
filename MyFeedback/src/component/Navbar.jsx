import { data } from "@/Data/data";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen((e) => e === true ? false : true)
  }
  // Toggle the search suggestions visibility
  const handleClick = () => {
    setShow(true);
  };

  // useEffect(() => {
  //   const body = document.getElementsByTagName("body")[0];
  //   if (show) {
  //     body.style.backgroundColor = "#E5E5E5"; // Slightly darkish
  //   } else {
  //     body.style.backgroundColor = ""; // Reset to default
  //   }

  //   return () => {
  //     body.style.backgroundColor = ""; // Clean up to avoid unintended side effects
  //   };
  // }, [show]);

  return (
    <>
      <nav>
        <div className="pt-3 lg:pt-[27px] xl:pt-[47px] px-4 lg:px-5 xl:px-9 pb-3 lg:pb-2.5 xl:pb-[23px] border border-[#DCDCDC]">
          <div className="flex justify-between items-center">
        <button className="space-y-1 cursor-pointer lg:hidden" onClick={handleChange}>
          <div className="w-4 h-[1px] bg-gray-700"></div>
          <div className="w-4 h-[1px] bg-gray-700"></div>
          <div className="w-4 h-[1px] bg-gray-700"></div>
        </button>
            <div className="hidden lg:block">
              <NavLink to="/"><img src="/Logo.png" alt="Logo" /></NavLink>
            </div>
            <div>
              <div
                className={`flex justify-between py-1 border border-[#ADADAD] ps-[23px] ${
                  show
                    ? "rounded-t-3xl rounded-b-none border-b-0"
                    : "rounded-full"
                } w-[220px] md:w-[480px] xl:w-[625px] h-[40px] md:h-[51px]`}
              >
                <div className="flex items-center w-full">
                  {/* Left Input - Search */}
                  <input
                    type="text"
                    placeholder="restaurant, hotel, service...."
                    className="outline-none border-none pr-2 md:pr-[68px] w-full"
                    onChange={(e) => setSearch(e.target.value)} // Update input value
                    value={search} // Bind input value to state
                    onFocus={handleClick} // Show suggestions when focused
                    onBlur={() => setTimeout(() => setShow(false), 200)} // Delay hiding suggestions
                    id="suggestion"
                  />
                  {/* Divider */}
                  <div className="bg-[#7A7A7A] w-[1px] h-4 mr-3 md:mr-6"></div>
                  {/* Right Input - Location */}
                  <input
                    type="text"
                    placeholder="Singapore..."
                    className="outline-none border-none w-full"
                  />
                </div>
                <div className="pr-[5px]">
                  <button className="transform hover:scale-105 transition-all">
                    {
                      show ? <img src="/cross.png" alt="" /> : <img src="/search.png" alt="Search Icon" />
                    }
                  </button>
                </div>
              </div>
              {/* Show filtered results */}
              {show && (
                <div
                  className={`bg-white shadow-lg border border-[#DCDCDC] ${
                    show
                      ? "rounded-b-3xl rounded-t-none"
                      : "rounded-xl"
                  } absolute z-10 w-[220px] md:w-[480px] xl:w-[625px] overflow-hidden`}
                >
                  <div>
                  {data
                    .filter((item) => {
                      return search === ""
                        ? item
                        : item.name
                            .toLowerCase()
                            .includes(search.toLowerCase());
                    })
                    .map((value) => (
                      <div
                        key={value.id}
                        className="p-2 hover:bg-gray-200 cursor-pointer flex flex-col gap-[15px]"
                        onMouseDown={() => {
                          // Always update the input value on suggestion click
                          setSearch(value.name);
                          setShow(false); // Hide suggestions after selection
                        }}
                      >
                        <div className="flex items-center gap-2.5">
                        <div><img className="w-8 h-8" src="spoonKnief.png" alt="" /></div>
                        <p className="font-[400] text-sm lg:text-[19px]">{value.name}</p>
                        </div>
                        {
                          value.id !== data.length && (
                            <div className="w-[559px] bg-[#969696] h-[1px]"></div>
                          )
                        }
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="hidden lg:flex gap-3 lg:gap-[21px] items-center">
              <img src="/lang.png" alt="Language Icon" />
              <button className="text-sm md:text-base px-1 py-2 lg:px-7 lg:py-[14px] bg-[#1E1E1E] text-white md:font-semibold rounded-full">
                MyFeedback for business
              </button>
            </div>
          </div>
        </div>
      {
        open ?
        <div className="bg-gray-50/95 flex flex-col w-1/2 h-[30vh] lg:hidden pt-5 ps-4 rounded-br-full absolute shadow-md">
          <button className="absolute right-5 cursor-pointer w-6 h-6" onClick={() => setOpen(false)}><img src="/cross.png" alt="" /></button>
        <div className="w-1/2">
        <NavLink to="/"><img src="/Logo.png" alt="Logo" /></NavLink>
          </div>
        <div className="flex lg:hidden flex-col items-start pt-6 gap-3">
        <img src="/lang.png" alt="Language Icon" />
        <button className="text-[12px] lg:text-base px-2 py-2 lg:px-7 lg:py-[14px] bg-[#1E1E1E] text-white lg:font-semibold rounded-full">
          MyFeedback for business
        </button>
      </div>
      </div>  : null
      }
      </nav>
    </>
  );
}

export default Navbar;