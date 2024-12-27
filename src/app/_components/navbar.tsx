'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
            className='fixed top-0 w-full h-[84px] px-2 sm:px-5 md:px-20 pt-4 flex flex-col gap-2.5 z-50 overflow-visible'>
            <div className='w-full max-w-[90%] mx-auto px-4 py-3 bg-[#1c1c1e]/50 rounded-[18px] border border-white/10 backdrop-blur-xl flex items-center justify-between'>
                <Logo />
                <NavLinks />
                <div className='flex items-center gap-4'>
                    <div className='hidden md:block'>
                        <GetStartedButton />
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='md:hidden p-2'>
                        <MenuIcon />
                    </button>
                </div>
            </div>
            <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </motion.div>
    );
}

function Logo() {
    return (
        <div className='flex items-center'>
            <Image
                src='/images/logo.webp'
                alt='Logo'
                width={40}
                height={40}
                className='h-full object-contain'
            />
        </div>
    );
}

function NavLinks() {
    const links = [
        { name: 'Home', href: 'home' },
        { name: 'Episafe', href: 'episafe' },
        { name: 'Hackini', href: 'hackini' },
        { name: 'Contact', href: 'contact' }
    ];

    return (
        <div className='hidden md:flex gap-4 items-center'>
            {links.map((link) => (
                <a
                    key={link.name}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                    }}
                    href={`#${link.href}`}
                    className='px-4 py-2 rounded-xl flex items-center transition-transform transform hover:scale-105 cursor-pointer'>
                    <span className='text-white text-base font-light'>
                        {link.name}
                    </span>
                </a>
            ))}
        </div>
    );
}

function MenuIcon() {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            strokeWidth='2'>
            <path d='M3 12h18M3 6h18M3 18h18' />
        </svg>
    );
}

function MobileDrawer({
    isOpen,
    onClose
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const links = [
        { name: 'Home', href: 'home' },
        { name: 'Episafe', href: 'episafe' },
        { name: 'Hackini', href: 'hackini' },
        { name: 'Contact', href: 'contact' }
    ];

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity md:hidden ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed right-0 top-0 h-full w-[250px] bg-[#1c1c1e] transform transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className='p-4 flex flex-col gap-4'>
                    <div className='flex justify-between items-center mb-8'>
                        <Logo />
                        <button onClick={onClose} className='p-2'>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='white'
                                strokeWidth='2'>
                                <path d='M18 6L6 18M6 6l12 12' />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-col gap-2'>
                        {links.map((link) => (
                            <a
                                key={link.name}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                    onClose();
                                }}
                                href={`#${link.href}`}
                                className='px-4 py-3 rounded-xl hover:bg-white/10 cursor-pointer'>
                                <span className='text-white text-base'>
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className='mt-4 w-full'>
                        <GetStartedButton />
                    </div>
                </div>
            </div>
        </>
    );
}

function GetStartedButton() {
    return (
        <button className='px-6 py-2 bg-[#007bff] rounded-xl shadow-inner border-2 border-[#007bff]/30 flex items-center transition-transform transform hover:scale-105 active:scale-95'>
            <span className="text-white text-base font-normal font-['Outfit']">
                Get Started
            </span>
        </button>
    );
}
