import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { data, country } from "@/Data/data"; // Import datasets

function Navbar() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle navigation
  const handleNavigate = () => {
    if (search.toLowerCase() === "kakune restaurant" && location.toLowerCase() === "singapore") {
      navigate("/trends");
    }
  };

  return (
    <>
      <nav>
        <div className="pt-3 lg:pt-[27px] xl:pt-[47px] px-4 lg:px-5 xl:px-9 pb-3 lg:pb-2.5 xl:pb-[23px] border border-[#DCDCDC]">
          <div className="flex justify-between items-center">
            {/* Menu Button */}
            <button
              className="space-y-1 cursor-pointer lg:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              <div className="w-4 h-[1px] bg-gray-700"></div>
              <div className="w-4 h-[1px] bg-gray-700"></div>
              <div className="w-4 h-[1px] bg-gray-700"></div>
            </button>

            {/* Logo */}
            <div className="hidden lg:block">
              <NavLink to="/">
                <img src="/Logo.png" alt="Logo" />
              </NavLink>
            </div>

            {/* Search and Location Inputs */}
            <div>
              <div
                className={`flex justify-between py-1 border border-[#ADADAD] ps-[23px] ${
                  showSearch || showLocation
                    ? "rounded-t-3xl rounded-b-none border-b-0"
                    : "rounded-full"
                } w-[220px] md:w-[480px] xl:w-[625px] h-[40px] md:h-[51px]`}
              >
                <div className="flex items-center w-full relative">
                  {/* Left Input - Search */}
                  <input
                    type="text"
                    placeholder="restaurant, hotel, service...."
                    className="outline-none border-none pr-2 md:pr-[68px] w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setShowSearch(true)}
                    onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                  />

                  {/* Divider */}
                  <div className="bg-[#7A7A7A] w-[1px] h-4 mr-3 md:mr-6"></div>

                  {/* Right Input - Location */}
                  <input
                    type="text"
                    placeholder="Singapore..."
                    className="outline-none border-none w-full"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => setShowLocation(true)}
                    onBlur={() => setTimeout(() => setShowLocation(false), 200)}
                  />

                  {/* Location Suggestions */}
                  {showLocation && (
                    <div className="absolute top-10 right-0 bg-white shadow-lg border border-[#DCDCDC] rounded-b-3xl z-10 w-[200px]">
                      {country
                        .filter((item) =>
                          location === ""
                            ? item
                            : item.name
                                .toLowerCase()
                                .includes(location.toLowerCase())
                        )
                        .map((value) => (
                          <div
                            key={value.id}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onMouseDown={() => {
                              setLocation(value.name);
                              setShowLocation(false);
                            }}
                          >
                            {value.name}
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Search Icon */}
                <div className="pr-[5px]">
                  <button
                    className="transform hover:scale-105 transition-all"
                    onClick={handleNavigate} // Check for navigation condition
                  >
                    {showSearch ? (
                      <img src="/cross.png" alt="Cross" />
                    ) : (
                      <img src="/search.png" alt="Search Icon" />
                    )}
                  </button>
                </div>
              </div>

              {/* Search Suggestions */}
              {showSearch && (
                <div
                  className={`bg-white shadow-lg border border-[#DCDCDC] absolute z-10 w-[220px] md:w-[480px] xl:w-[625px] overflow-hidden rounded-b-3xl`}
                >
                  {data
                    .filter((item) =>
                      search === ""
                        ? item
                        : item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((value) => (
                      <div
                        key={value.id}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onMouseDown={() => {
                          setSearch(value.name);
                          setShowSearch(false);
                        }}
                      >
                        {value.name}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Language and Business Button */}
            <div className="hidden lg:flex gap-3 lg:gap-[21px] items-center">
              <img src="/lang.png" alt="Language Icon" />
              <button className="text-sm md:text-base px-1 py-2 lg:px-7 lg:py-[14px] bg-[#1E1E1E] text-white md:font-semibold rounded-full">
                MyFeedback for business
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="bg-gray-50/95 flex flex-col w-1/2 h-[30vh] lg:hidden pt-5 ps-4 rounded-br-full absolute shadow-md z-50">
            <button
              className="absolute right-5 cursor-pointer w-6 h-6"
              onClick={() => setOpen(false)}
            >
              <img src="/cross.png" alt="" />
            </button>
            <div className="w-1/2">
              <NavLink to="/">
                <img src="/Logo.png" alt="Logo" />
              </NavLink>
            </div>
            <div className="flex lg:hidden flex-col items-start pt-6 gap-3">
              <img src="/lang.png" alt="Language Icon" />
              <button className="text-[12px] lg:text-base px-2 py-2 lg:px-7 lg:py-[14px] bg-[#1E1E1E] text-white lg:font-semibold rounded-full">
                MyFeedback for business
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
