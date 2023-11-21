'use client'
import { NAV_LINKS, BURGER_MENU } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import Search from './Search'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [results, setResults] = useState<any[]>([]);
    const [input, setInput] = useState('');

    const handleEmptyList = () => {
        setResults([]);
        setInput('');
    };

    return (
        <div onClick={handleEmptyList} className='h-full'>
            <nav className='w-full'>
                <div className='max-w-[1440px] mx-auto lg:max-w-7xl items-center md:px-8 md:py-1'>
                    <div className='pb-2'>
                        <div className='flex justify-end mx-auto pt-1 pr-1'>
                            <Search 
                                input={input} 
                                setInput={setInput} 
                                results={results} 
                                setResults={setResults}
                            />
                        </div>
                        <div className='md:hidden'>
                            <button className='p-1 rounded-md outline-none pl-4 focus:border' 
                                onClick={() => setOpen(!open)} >
                                    {open ? (
                                    <Image src={BURGER_MENU.closeMenu} width={30} height={30} alt='logo' />
                                ) : (
                                    <Image
                                        src={BURGER_MENU.openMenu}
                                        width={30}
                                        height={30}
                                        alt='burger menu'
                                        className='focus:border-none active:border-none'
                                    />
                                )}
                            </button> 
                        </div>
                    </div>
                    <div>
                        <div className={`justify-self-center mt-8 md:block md:pb-0 md:mt-0 
                            ${ open ? 'p-12 md:p-0 block' : 'hidden'}`}
                        >
                            <ul className='h-screen md:h-auto items-center pb-3 justify-start md:flex'>      
          
                                {NAV_LINKS.map((link) => (
                                    <li key={link.key} className='navbar'>
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