import { useEffect, useState } from "react";
import { motion } from "motion/react";
import rightArrow from "../assets/right-arrow.png";

export default function Header() {
  const [istogal, setIstogal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ transform: "translateY(-100px)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{ duration: 2, type: "spring" }}
      className={`fixed top-0 backdrop-blur-[5px]  w-full z-50 transition-all duration-400 bg-[#fff] shadow-[0px_1px_20px_0px_rgba(224,215,198,0.5)]
        ${
          isScrolled
            ? "max-w-full border-b border-[#ffffff4d] rounded-0 bg-[rgba(245,245,245,0.2)]"
            : "border-[#ffffff4d] border-0 rounded-full max-w-[900px] mt-5 bg-[#fffffff2]"
        }
      `}
    >
      <div className="max-w-[1200px] mx-auto py-[10px] md:pl-7 md:pr-[10px] max-md:py-[7px] max-md:px-[20px] flex justify-between items-center">
        <div>
          <h1 className="text-[24px] font-extrabold">UooFer</h1>
        </div>

        <div
          className={`transition-all duration-400  max-md:absolute top-0 max-md:bg-[#fff] backdrop-blur-[5px] max-md:w-full left-0 max-md:px-4 max-md:py-5 
        ${
          istogal
            ? "z-2 opacity-100 max-md:max-h-[100vh] max-md:h-[100vh] pointer-events-auto"
            : "max-md:opacity-0 max-md:max-h-0 pointer-events-none"
        }
        
        `}
        >
          <ul className="flex max-md:flex-col gap-7 max-md:text-[14px] text-center">
            <li>Services</li>
            <li>Pricing</li>
            <li>Projects</li>
          </ul>
        </div>

        <div>
          <a className="max-md:hidden btn flex font-[500] gap-3 items-center text-white bg-black hover:bg-[#000000e0] py-2 px-2 pl-6 rounded-full cursor-pointer">
            Contact Us
            <div className=" relative h-[30px] w-[30px] flex items-center justify-center bg-white rounded-full overflow-hidden">
              <img className="btn-1 absolute" width={"13px"} src={rightArrow} />
              <img
                className="btn-2 absolute "
                width={"13px"}
                src={rightArrow}
              />
            </div>
          </a>

          <div
            className="z-3 relative md:hidden flex flex-col gap-1 items-end"
            onClick={() => setIstogal(!istogal)}
          >
            <span className={`transition-all duration-400 rounded-full min-w-[24px] w-full h-[3px] bg-black block ${istogal ? "rotate-40 translate-y-[3.5px]" : ""}`}></span>
            <span className={` rounded-full min-w-[16px] max-w-[16px] w-full h-[3px] bg-black block ${istogal ? "hidden" : ""}`}></span>
            <span className={`transition-all duration-400 rounded-full min-w-[24px] w-full h-[3px] bg-black block ${istogal ? "rotate-[-40deg] translate-y-[-3.5px]" : ""}`}>
              
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
