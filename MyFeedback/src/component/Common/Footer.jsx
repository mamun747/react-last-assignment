import { ChevronDown } from "lucide-react";
import { useState } from "react";
const NavItems = [
    {
        title: "About",
        menus: ["About MyFeedback", "Investor Relations", "Trust & Safety", "Content Guidelines", "Terms of Service", "Privacy Policy", "Your Privacy Choices"]
    },
    {
        title: "MyFeedback",
        menus: ["MyFeedback for business", "Collections", "Talk", "Events", "MyFeedback blog", "Support", "Developers"],
    }
];
const languages = [
    "English",
    "Japanese",
    "Chinese",
    "Bengali",
    "French",
    "عربي"
];
const Country = [
    "Singapour",
    "United States",
    "United Kingdom",
    "Chine",
    "Japan",
    "Franch",
    "Japan",
    "Bangladesh",
    "المملكة العربية السعودية"
];
function MenuSection({ title, menus}) {
    return (
        <>
            <div>
                <h1 className="text-[#1E1E1E] text-xl font-extrabold pb-[11px]">{title}</h1>
                <div>
                    {menus.map((value, i) => (
                        <ul key={i}>
                            <li className="text-[#5E5E5E] text-sm pb-3">{value}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    );
}

function Footer() {
    const [selectedOption, setSelectedOption] = useState("English");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState("Singapour");
    const [isOpen2, setIsOpen2] = useState(false);
    return (
        <>
            <nav className="mt-[90px] overflow-y-hidden border">
                <div>
                <div className="flex gap-10 lg:gap-[200px] justify-center pt-[26px] pb-[66px] flex-wrap">
                    {NavItems.map((value, i) => (
                        <div key={i}>
                            <MenuSection title={value.title} menus={value.menus} />
                        </div>
                    ))}
                    <div>
                        <div>
                            <h1 className="text-[#1E1E1E] text-xl font-extrabold">Languages</h1>
                            <div className="pt-3">
                                <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-[#5E5E5E] flex items-center gap-0 md:gap-1">
                                    {selectedOption}
                                <ChevronDown className="size-5 text-[#5E5E5E]"/>
                                </div>
                                {isOpen && (
                                <ul className="border rounded-xl">
                                    {
                                        languages.map((value, i) => (
                                            <li key={i} onClick={() => {
                                                setSelectedOption(value);
                                                setIsOpen(false);
                                            }}
                                            className="cursor-pointer px-10 py-1.5 hover:bg-gray-200 font-semibold transition-all duration-300 text-[#5E5E5E]">{value}
                                            </li>
                                        ))
                                    }
                                </ul>
                            )}
                            </div>
                        </div>
                        <div className="pt-5 lg:pt-[30px]">
                            <h1 className="text-[#1E1E1E] text-xl font-extrabold">Countries</h1>
                            <div className="pt-3">
                                <div onClick={() => setIsOpen2(!isOpen2)} className="cursor-pointer text-[#5E5E5E] flex items-center gap-1 ">
                                    {selectedOption2}
                                    <ChevronDown className="size-5 text-[#5E5E5E]"/>
                                </div>
                                {isOpen2 && (
                                <ul className="border rounded-xl">
                                    {
                                        Country.map((value, i) => (
                                            <li key={i} onClick={() => {
                                                setSelectedOption2(value);
                                                setIsOpen2(false);
                                            }}
                                            className="cursor-pointer px-10 py-1.5 hover:bg-gray-200 font-semibold transition-all duration-300 text-[#5E5E5E]">{value}
                                            </li>
                                        ))
                                    }
                                </ul>
                            )}
                            </div>
                        </div>
                    </div>
                    </div>
                <p className="text-[#1E1E1E] font-semibold text-center pb-[27px] text-sm md:text-base">Copyright &copy; {new Date().getUTCFullYear()} myfeedback, designed by scott</p>
                </div>
            </nav>
        </>
    );
}

export default Footer;
