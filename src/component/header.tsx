import { useEffect, useState } from "react";
import { motion } from "motion/react"


export default function Header() {
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
    <motion.header  initial={{ transform: "translateY(-100px)" , opacity: 0 }} animate={{transform: "translateY(0px)", opacity: 1}}   transition={{ duration: 2, type: "spring" }}
      className={`fixed top-0 backdrop-blur-[5px]  w-full z-50 transition-all duration-400 bg-[#fff] shadow-[0px_1px_20px_0px_rgba(224,215,198,0.5)]
        ${isScrolled ? "max-w-full border-b border-[#ffffff4d] rounded-0 bg-[rgba(245,245,245,0.2)]" : "border-[#ffffff4d] border-0 rounded-full max-w-[900px] mt-5 bg-[#fffffff2]"}
      `}
    >
      <div className="max-w-[1200px] mx-auto py-[10px] pl-7 pr-[10px] flex justify-between items-center">
        <div>
            <h1 className="text-[24px] font-extrabold">UooFer</h1>
        </div>

        <div>
            <ul className="flex gap-7">
                <li>Services</li>
                <li>Pricing</li>
                <li>Projects</li>
            </ul>
        </div>

        <div>
            <a className="btn flex font-[500] gap-3 items-center text-white bg-black hover:bg-[#000000e0] py-2 px-2 pl-6 rounded-full cursor-pointer">
                Contact Us
                <div className=" relative h-[30px] w-[30px] flex items-center justify-center bg-white rounded-full overflow-hidden">
                    <img className="btn-1 absolute" width={"13px"} src="../assets/right-arrow.png"/>
                    <img className="btn-2 absolute " width={"13px"} src="../assets/right-arrow.png"/>
                </div>
            </a>
        </div>
      </div>
    </motion.header>
  );
}
