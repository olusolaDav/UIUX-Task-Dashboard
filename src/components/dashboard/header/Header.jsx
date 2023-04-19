import React from 'react'
import Button from '../../shared/button/Button';

const Header = () => {
  return (
    <header className='flex flex-col space-y-12 items-start sm:space-y-0 sm:flex-row smm:items-center justify-between sticky top-0 lg:relative bg-white z-50 px-9 py-12 sm:px-[4.4rem] sm:py-[3rem] '>
        <div>
        <h1 className='text-[3rem] sm:text-[3.8rem] leading-[4.6rem] font-semibold tracking-[-0.02rem] line-clamp-1 sm:line-clamp-none'>New Campaign Run </h1>
        <p className='text-zinc-300 text-[1.4rem] leading-[1.7rem] line-clamp-1 sm:line-clamp-none'>A new campaign launch work for brand new featur in May month</p>
        </div>
        <Button className='py-[1.2rem] px-[2rem] bg-black text-white text-[1.2rem] leading-[1.4rem]'> ADD MEMBERS</Button>
    </header>
  )
}

export default Header