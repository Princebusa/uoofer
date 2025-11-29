import { motion, useScroll, useTransform,useSpring  } from "motion/react"
import rightArrow from "../../assets/right-arrow.png"
import cloude from "../../assets/cloud.png"
import cloude2 from "../../assets/cloud-2.png"
import ai from "../../assets/ai.png"



export default function hero() {
 const { scrollYProgress } = useScroll();

  // smooth the scroll position
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.2
  });

  // height: 70px → 100px
  const barHeight = useTransform(smoothScroll, [0, 1], [590, 590]);

  // opacity: 1 → 0
  const barOpacity = useTransform(smoothScroll, [0, 1], [1, 0]);

const line1 = "Get Your Website A next"
const line2 ="Generation Update With UooFer"

const sentence = {
  hidden :{opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.03,
    },
  },
}
const letter = {
  transition: { duration: 1},
  hidden: {opacity: 0, y: 50},
  visible: {
    opacity : 1,
    y: 0,
  },
}


  return (
    <div className="relative flex flex-col items-center  w-screen overflow-hidden bg-[linear-gradient(180deg,rgba(107,200,237,0.21)_42%,rgba(255,242,97,0.31)_100%)] h-[200vh]">
     <div className="tex-bg absolute z-2 inset-0 pointer-events-none flex h-[min-content]"
    //  style={{background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))"}}
     >
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            height: barHeight,
            opacity: barOpacity,
            width: "100%",
            willChange: "height, opacity"
          }}
          className=" jjj relative
          bg-[linear-gradient(90deg,rgba(107,200,237,0.40)_0%,rgba(126,209,242,0.3)_75%,rgba(54,54,54,0.06)_100%)]
          
          "
        />
      ))}
    </div>
      <img
        src={cloude}
        className="absolute top-10  w-50"
        style={{ animation: "cloudMove 30s linear infinite" }}
      />
      <img
        src={cloude}
        className="absolute top-12 z-3 w-62"
        style={{
          animation: "cloudMove 35s linear infinite",
          animationDelay: "-.5s",
        }}
      />
      <img
        src={cloude2}
        className="absolute top-60 z-3 w-62"
        style={{
          animation: "cloudMove 40s linear infinite",
          animationDelay: "-.1s",
        }}
      />



      <div className="max-section relative block z-10">
        <div className="my-[150px] flex flex-col gap-7 items-center relative">
            
           <p className="pr-[15px] pl-[8px] py-[2px] font-[400] text-[13px] border-[#ffffff4d] border rounded-full backdrop-blur-[5px] bg-[#ffffff52] flex items-center gap-2"><img width={"20px"} src={ai} alt="ai" />Ai Automation</p>

         
          {/* <motion.h1 className="relative head font-[500] md:text-[53px] text-[32px] md:leading-[70px] leading-[44px] tracking-tight text-center max-w-[800px] w-[100%] mx-auto">Get Your Website A next Generation Update With <span className="text-red-800">UooFer.</motion.h1.h1>
       */}
       <motion.h1
       className="relative head font-[500] md:text-[53px] text-[32px] md:leading-[70px] leading-[44px] tracking-tight text-center max-w-[800px] w-[100%] mx-auto"
       variants={sentence}
       initial="hidden"
       animate="visible"
       >
{line1.split("").map((char, index)=>{
  return(
    <motion.span key={char + "-" + index} variants={letter}>
      {char}
    </motion.span>
  )
})}
<br/>
{line2.split("").map((char, index)=>{
  return(
    <motion.span key={char + "-" + index} variants={letter}>
      {char}
    </motion.span>
  )
})}

       </motion.h1>
       <div className="flex gap-3 mt-2">
         <a className="btn flex font-[500] gap-3 border border-black items-center text-white bg-black hover:bg-[#000000e0] py-2 px-2 pl-6 rounded-full cursor-pointer">
                Contact Us
                <div className=" relative h-[30px] w-[30px] flex items-center justify-center bg-white rounded-full overflow-hidden">
                    <img className="btn-1 absolute" width={"13px"} src={rightArrow}/>
                    <img className="btn-2 absolute " width={"13px"} src={rightArrow}/>
                </div>
            </a>
             <a className="btn flex font-[500] gap-3 items-center border border-black text-[#000] py-[0px] px-5 rounded-full cursor-pointer">
                See Our Services
                
            </a>
       </div>
        </div>

      </div>
    </div>
  );
}
