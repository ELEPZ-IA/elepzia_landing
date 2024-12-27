'use client';

import Image from 'next/image';
import Link from 'next/link';

const navigationLinks = {
    platform: [
        { name: 'Home', href: '/' },
        { name: "Elepz'ia", href: '/elepzia' },
        { name: 'Development Services', href: '/services' },
        { name: 'Contact', href: '/contact' }
    ],
    support: [
        { name: 'Help Centre', href: '/help' },
        { name: 'FAQs', href: '/faqs' }
    ],
    legal: [
        { name: 'Terms of services', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' }
    ],
    social: [
        { name: 'Instagram', href: '#', icon: '/icons/insta.svg' },
        { name: 'YouTube', href: '#', icon: '/icons/youtube.svg' },
        { name: 'Twitter', href: '#', icon: '/icons/twitter.svg' }
    ]
};

export const Footer = () => {
    return (
        <footer className='relative bg-[#1c1c1e] px-4 sm:px-6 md:px-12 lg:px-20 pt-[200px] sm:pt-[250px] pb-8 sm:pb-16 -mt-[180px] sm:-mt-[220px] overflow-hidden'>
            {/* Blur Effects */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute bottom-1/4 left-1/4 w-[300px] h-[247px] bg-[#d37604] rounded-full opacity-30 blur-[500px]' />
                <div className='absolute bottom-1/4 right-1/4 w-[300px] h-[247px] bg-[#6ecab0] rounded-full opacity-30 blur-[500px]' />
                <div className="w-[300px] h-[247px] absolute top-[220px] left-0 bg-[#d37604]/50 rounded-[900px] blur-[300px]" />
                <div className="w-[300px] h-[247px] absolute top-[220px] right-0 bg-[#6ecab0]/50 rounded-[900px] blur-[300px]" />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-16'>
                    {/* Brand Section */}
                    <div className='col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1'>
                        <Image
                            src='/images/logo.webp'
                            alt='Brand Logo'
                            width={65}
                            height={102}
                            className='w-14 sm:w-16 md:w-[65px] mb-4 sm:mb-5'
                        />
                        <p className='text-[#a2a2a2] text-base sm:text-lg mb-4 sm:mb-6'>
                            Experience the best of the future now!
                        </p>
                        <Link
                            href='/get-started'
                            className='inline-block px-6 sm:px-10 py-2.5 sm:py-3 bg-[#007bff] rounded-xl shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.25)] border-2 border-[#007bff]/30 text-white text-sm sm:text-base hover:bg-[#007bff]/90 transition-colors'>
                            Get started
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className='col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8'>
                        <nav>
                            <h3 className='text-white text-base sm:text-lg mb-4 sm:mb-6'>
                                Platform
                            </h3>
                            <ul className='space-y-3 sm:space-y-4'>
                                {navigationLinks.platform.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className='text-[#a2a2a2] text-sm sm:text-base hover:text-white transition-colors'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav>
                            <h3 className='text-white text-base sm:text-lg mb-4 sm:mb-6'>Support</h3>
                            <ul className='space-y-3 sm:space-y-4'>
                                {navigationLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className='text-[#a2a2a2] text-sm sm:text-base hover:text-white transition-colors'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav>
                            <h3 className='text-white text-base sm:text-lg mb-4 sm:mb-6'>Legals</h3>
                            <ul className='space-y-3 sm:space-y-4'>
                                {navigationLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className='text-[#a2a2a2] text-sm sm:text-base hover:text-white transition-colors'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav>
                            <h3 className='text-white text-base sm:text-lg mb-4 sm:mb-6'>Socials</h3>
                            <ul className='grid grid-rows-3 grid-cols-2 gap-3 sm:gap-4'>
                                {navigationLinks.social.map((link) => (
                                    <li key={link.name} className='contents'>
                                        <Link
                                            href={link.href}
                                            className='flex items-center text-[#a2a2a2] text-sm sm:text-base hover:text-white transition-colors'>
                                            {link.name}
                                        </Link>
                                        <Link
                                            href={link.href}
                                            className='flex justify-start items-center text-[#a2a2a2] hover:text-white transition-colors'>
                                            <Image
                                                src={link.icon}
                                                alt={link.name}
                                                width={28}
                                                height={28}
                                                className='w-5 sm:w-6 md:w-7'
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className='border-t border-[#a2a2a2] pt-4 sm:pt-8'>
                    <p className='text-center text-[#a2a2a2] text-sm sm:text-base'>
                        2024 "Brand". All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};
