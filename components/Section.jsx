"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dcard from "./Dcard";

gsap.registerPlugin(ScrollTrigger);


function Section() {
  const txt = useRef(null);
  const sec = useRef(null);

  useEffect(() => {
    gsap.fromTo(txt.current, { opacity: 0, x: -50 }, {
      opacity: 1, x: 0, duration: 1.2, delay: 0.3, scrollTrigger: {
        trigger: txt.current, // element to watch
        start: "top 80%", // when top of element hits 80% of viewport
        end: "bottom 60%",
      },
    });

    //for the section tag
    gsap.fromTo(sec.current, { opacity: 0 }, {
      opacity: 1, duration: 1.4, delay: 0.5, scrollTrigger: {
        trigger: txt.current, // element to watch
        start: "top 80%", // when top of element hits 80% of viewport
        end: "bottom 60%",
      },
    });

    // Animate each card individually
    gsap.utils.toArray(".place").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          duration: 0.4,
          x: 0,
          delay: i * 0.1, // stagger effect
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "bottom 60%",

          },
        }
      );
    });


  }, [])
  return (
    <div className="   w-full max-w-screen flex items-center justify-center  bg-white mt-10  ">
      <div className=" w-full h-full py-10 text-center flex items-center justify-center lg:w-[95%] bg-[#FFF8F6] rounded-[3rem] flex-col ">
        <h1 className=" text-[1rem] md:text-xl font-bold text-[#FF3600]"><i className="fa-solid fa-asterisk text-xl font-bold text-[#FF3600]"></i> Our Services</h1>
        <h1 ref={txt} className=" font-bogle  font-bold p-5 md:p-10 text-xl text-center md:text-5xl text-black">Book for Destinations in Varanasi</h1>

        <div className=" flex items-center h-full w-full justify-center mt-10 ">
          <div className=" h-full w-[90%] grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 justify-center gap-3">

            <Dcard url={"Kashi"} name={"Kashi Vishwanath Temple"} des={"Visit the sacred temple dedicated to Lord Shiva in the heart of Varanasi."} />
            <Dcard url={"Sarnath"} des={"A peaceful Buddhist site where Lord Buddha gave his first sermon."} name={"Sarnath"} />
            <Dcard url={"Airport"} des={"Reliable taxi transfers to and from Lal Bahadur Shastri Airport."} name={"Varanasi Airport"} />
            <Dcard url={"Ghat"} des={"Famous for sunrise rituals, Ganga aarti, and boat rides."} name={"Assi Ghat"} />
            <Dcard url={"Fort"} des={"A historic 17th-century fort and museum along the Ganges."} name={"Ramnagar Fort"} />
            <Dcard url={"BHU"} des={"A vast historic campus with temples and peaceful surroundings."} name={"Banaras Hindu University"} />
            <Dcard
              url={"Ayodhya"}
              name={"Ayodhya Ram Mandir"}
              des={"The sacred birthplace of Lord Rama and a major pilgrimage site."}
            />
            <Dcard
              url={"Prayag"}
              name={"Triveni Sangam, Prayagraj"}
              des={"The holy confluence of the Ganga, Yamuna, and Saraswati rivers."}
            />
            <Dcard
              url={"Bodh"}
              name={"Bodh Gaya"}
              des={"Home to the Mahabodhi Temple where Buddha attained enlightenment."}
            />
          </div>
        </div>
      </div>

    </div>
  )
}
export default Section;
