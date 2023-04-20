import React from "react";
import Members from "../../shared/members/Members";
import NavList from "./NavList";

export const PROFILE = [
  "https://i.ibb.co/rv5HP4d/Profile01.png",
   "https://i.ibb.co/rv5HP4d/Profile01.png",
    "https://i.ibb.co/rv5HP4d/Profile01.png",
];



const NavBar = () => {


   return (
     <nav className="flex smm:items-center space-y-4 smm:space-y-0 flex-col sm:flex-row justify-between sm:px-[4.4rem] px-9 py-6 sticky top-60 transition-colors duration-300 sm:top-48  lg:relative lg:top-0 md:top-0 z-10">
       <div className="flex items-center gap-2 ">
         <Members
           image1={PROFILE[0]}
           image2={PROFILE[1]}
           image3={PROFILE[2]}
         />

         <p className="leading-[1.7rem] text-[1.4rem] text-zinc-400">
           8 members
         </p>
       </div>

       <NavList />
     </nav>
   );
};

export default NavBar;
