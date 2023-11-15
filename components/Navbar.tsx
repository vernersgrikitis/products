'use client'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import burger from '../assets/burger.svg'
import close from '../assets/close.svg'
import { useState } from 'react';
import Search from './Search'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className="w-full bg-midnight z-10">
                <div className="max-w-[1440px] mx-auto lg:max-w-7xl md:items-center md:px-8 md:py-1">
                    <div className='pb-2'>
                        <div className='flex justify-end mx-auto pt-1 pr-1'>
                            <Search />
                        </div>
                        <div className="md:hidden">
                            <button className="p-1 rounded-md outline-none pl-4 focus:border" 
                                onClick={() => setOpen(!open)} >
                                    {open ? (
                                    <Image src={close} width={30} height={30} alt="logo" />
                                ) : (
                                    <Image
                                        src={burger}
                                        width={30}
                                        height={30}
                                        alt='burger menu'
                                        className="focus:border-none active:border-none"
                                    />
                                )}
                            </button> 
                        </div>
                    </div>
                    <div>
                        <div className={`justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${ open ? 'p-12 md:p-0 block' : 'hidden'}`} >
                            <ul className='h-screen md:h-auto items-center pb-3 justify-start md:flex'>      
          
                                {NAV_LINKS.map((link) => (
                                    <li key={link.key} className="lg:text-lg xl:text-xl py-3 text-black md:px-6 text-center border-b-2 md:border-b-0 hover:bg-lime-300 border-lime-600 md:hover:text-lime-300 md:hover:bg-transparent cursor-pointer transition-all hover:text-black">
                                        <Link href={link.href} onClick={() => setOpen(!open)}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
