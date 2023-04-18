import React from 'react'
import { NAV_LIST } from "./list";
import {Link} from 'react-router-dom';
const NavList = () => {

    const listItem = NAV_LIST.map((list) => (
      <li key={list.id}>
        <Link
          to="/"
          className="flex items-center gap-2 space-y-12 smm:space-y-0 text-zinc-400 font-medium text-[1.4rem] leading-[1.7rem]"
        >
          <img src={list.icon} alt="" />
          <p className="hidden smm:block">{list.desc}</p>
        </Link>
      </li>
    ));

  return (
    <ul className='flex flex-crow   items-center justify-between smm:justify-start sm:space-x-6  '>
       {listItem}
    </ul>
  )
}

export default NavList;