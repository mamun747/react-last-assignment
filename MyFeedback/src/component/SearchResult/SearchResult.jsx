import { resultData } from "@/Data/data"; // Importing your restaurant data
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation

function SearchResult() {
  const [filter, setFilter] = useState("All"); // Default filter is 'All'
  const [open, setOpen] = useState(false); // For handling the sort dropdown
  const navigate = useNavigate(); // Hook to navigate to details page

  // Function to handle clicking on a card
  const handleCardClick = (id) => {
    navigate('/details'); // Navigate to Details page with card id
  };

  // Filtering the restaurants based on the selected filter
  const filteredData = resultData.filter((item) => {
    if (filter === "All") return true; // Show all items if 'All' is selected
    if (filter === "Highest rated") return item.rating >= 4.5; // Show items with 4.5 stars or more
    if (filter === "Oldest rated") return item.rating <= 3; // Show items with 3 stars or less
    return false;
  });

  return (
    <section className="pt-5 pb-[145px]">
      <div>
        {/* Filter and Sorting */}
        <div className="mx-2 lg:mx-0 md:ps-5 xl:ps-[100px]">
          <p className="text-[#232323] font-semibold text-base">Home / All restaurants</p>
          <div className="flex gap-2.5 md:gap-[30px] relative">
            <h1 className="text-[#1E1E1E] font-extrabold text-2xl md:text-[32px] leading-10">
              Best restaurants in Singapore
            </h1>
            {/* Sort Button */}
            <button
              className="text-sm md:text-base border border-[#5E5E5E] rounded-full px-5 py-3 flex gap-2 items-center pt-[11px] group hover:bg-[#5E5E5E] transition-all"
              onClick={() => setOpen(!open)}
            >
              <img className="group-hover:filter group-hover:invert group-hover:brightness-0" src="/sort.png" alt="" />
              <p className="text-[#5E5E5E] font-[500] text-[17px] leading-5 group-hover:text-white">Sort</p>
            </button>

            {open && (
              <div className="w-[276px] h-[173px] bg-white border border-[#E6E6E6] rounded-[15px] shadow-lg absolute -bottom-52 right-[10px] md:right-[150px] lg:right-[380px] xl:right-[750px] 2xl:right-[1200px] 3xl:right-[1850px] z-50">
                <div className="pt-[29px] ps-3 relative">
                  <div>
                    <button
                      className="text-[17px] font-[400] text-[#5D5D5D] hover:bg-[#B0C2FF]/15 hover:text-[#2146C7] px-6 py-[7px] rounded-sm"
                      onClick={() => setFilter("All")}
                    >
                      All feedbacks
                    </button>
                    <button
                      className="text-[17px] font-[400] text-[#5D5D5D] hover:bg-[#B0C2FF]/15 hover:text-[#2146C7] px-6 py-[7px] rounded-sm"
                      onClick={() => setFilter("Highest rated")}
                    >
                      Highest rated
                    </button>
                    <button
                      className="text-[17px] font-[400] text-[#5D5D5D] hover:bg-[#B0C2FF]/15 hover:text-[#2146C7] px-6 py-[7px] rounded-sm"
                      onClick={() => setFilter("Oldest rated")}
                    >
                      Oldest rated
                    </button>
                  </div>
                  <button
                    className="w-[33px] h-[33px] text-center bg-[#D9D9D9]/40 rounded-full text-2xl font-semibold text-[#717171] absolute right-2 top-2"
                    onClick={() => setOpen(false)}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Render Filtered Cards */}
          <div className="flex xl:items-start xl:justify-between flex-col xl:flex-row">
            <div className="pt-[47px]">
              {filteredData.map((value) => (
                <div
                  key={value.id}
                  className="flex flex-col gap-[34px]"
                  onClick={() => handleCardClick(value.id)} // Add the click handler
                >
                  <div className="flex flex-col md:flex-row gap-[15px] xl:w-[504px] h-auto cursor-pointer">
                    <img src={value.img} alt="" />
                    <div>
                      <h3 className="text-[#232323] font-semibold text-[22px]">{value.name}</h3>
                      <p className="text-[#8F8F8F] pt-[11px] max-w-[273px]">{value.des}</p>
                      <div className="flex gap-[13px] pt-[27px]">
                        <img src={value.ratingImg} alt="" />
                        <p className="text-[#232323] text-[15.5px] font-semibold">
                          {value.rating} <span className="text-[#7A7A7A]">{value.reviews}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="pb-[34px]" />
                </div>
              ))}
            </div>
            <img className="w-[600px] h-[600px] xl:w-auto xl:h-auto object-cover bg-cover xl:-mt-[89px]" src="/map.png" alt="" />
          </div>
          <button className="mt-[61px] px-2.5 py-2 md:px-10 md:py-3 bg-[#1677BD] rounded-full text-[19px] text-center text-white">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
