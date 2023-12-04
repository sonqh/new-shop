import { FC, useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Menu } from "../..";

const LayoutHeader: FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = ["English", "Spanish", "French"];

  const handleLanguageSelect = () => {
    setIsLanguageOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsLanguageOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-start">
            <Menu
              links={[
                { name: "HOME", href: "/" },
                { name: "ABOUT US", href: "/about" },
                { name: "OUR TEAMS", href: "/teams" },
                { name: "MARKETPLACE", href: "/marketplace" },
                { name: "ROADMAP", href: "/roadmap" },
                { name: "WHITEPAPER", href: "/whitepaper" },
              ]}
            />
          </div>

          <div className="navbar-end relative">
            <button className="text-white btn bg-gradient-to-br from-pink-600 to-purple-600">
              Connect Wallet
            </button>

            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="btn-ghost btn relative z-10 mx-2"
            >
              <TbWorld size={20} />
              <RiArrowDropDownLine size={20} />
            </button>
            {isLanguageOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full right-0 mt-2 shadow-md rounded-md"
                style={{
                  top: "calc(100% + 8px)",
                  right: "0",
                }}
              >
                {languages.map((language, index) => (
                  <button
                    key={index}
                    onClick={handleLanguageSelect}
                    className="w-full block text-left px-4 py-2 hover:bg-gradient-to-br from-pink-600 to-purple-600 rounded-md"
                  >
                    {language}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
