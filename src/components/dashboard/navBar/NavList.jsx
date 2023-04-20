import React from 'react'
import { NAV_LIST } from "./list";
const NavList = () => {

    const listItem = NAV_LIST.map((list) => (
      <li
        key={list.id}
        className="flex items-center gap-2  space-y-12 min-[280px]:space-y-0 sm:space-y-0 text-zinc-400 font-medium text-[1.4rem] sm:text-[1rem] min-[280px]:text-[.5rem]  md:text-[1.2rem] lg:text-[1.4rem] leading-[1.7rem]"
      >
        <img
          src={list.icon}
          alt={list.desc}
          className="h-5 min-[280px]:h-2 min-[320px]:h-3 sm:h-5"
        />
        <p className="">{list.desc}</p>
      </li>
    ));

  return (
    <ul className="flex gap-3 sm:gap-1 min-[280px]:gap-0 min-[280px]:space-x-0 flex-crow hover:cursor-pointer  items-center justify-between smm:justify-start sm:space-x-6  ">
      {listItem}
    </ul>
  );
}

export default NavList;