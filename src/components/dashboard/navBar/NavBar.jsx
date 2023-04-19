import React from "react";
import Members from "../../shared/members/Members";
import NavList from "./NavList";
const NavBar = () => {
  const IMAGES = [
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];
   return (
     <nav className="flex smm:items-center space-y-4 smm:space-y-0 flex-col sm:flex-row justify-between sm:px-[4.4rem] px-9 py-6 sticky top-60 transition-colors duration-300 sm:top-48  lg:relative lg:top-0 md:top-0 z-10">
       <div className="flex items-center gap-2 ">
         <Members image1={IMAGES[0]} image2={IMAGES[1]} image3={IMAGES[2]} />
         <p className="leading-[1.7rem] text-[1.4rem] text-zinc-400">
           8 members
         </p>
       </div>

       <NavList />
     </nav>
   );
};

export default NavBar;
