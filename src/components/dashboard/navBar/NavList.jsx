import React from 'react'
import { NAV_LIST } from "./list";
import {Link} from 'react-router-dom';
const NavList = () => {

    const listItem = NAV_LIST.map((list) => (
      <li
        key={list.id}
        className="flex items-center gap-4 space-y-12 sm:space-y-0 text-zinc-400 font-medium text-[1.4rem] leading-[1.7rem]"
      >
        <img src={list.icon} alt={list.desc} />
        <p className="">{list.desc}</p>
      </li>
    ));

  return (
    <ul className='flex flex-crow   items-center justify-between smm:justify-start sm:space-x-6  '>
       {listItem}
    </ul>
  )
}

export default NavList;