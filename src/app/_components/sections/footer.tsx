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
        <footer className='relative bg-[#1c1c1e] border-t border-[#a2a2a2] px-4 md:px-20 pt-20 pb-16'>
            {/* Blur Effects */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute bottom-1/4 left-1/4 w-[300px] h-[247px] bg-[#d37604] rounded-full opacity-30 blur-[500px]' />
                <div className='absolute bottom-1/4 right-1/4 w-[300px] h-[247px] bg-[#6ecab0] rounded-full opacity-30 blur-[500px]' />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16'>
                    {/* Brand Section */}
                    <div className='lg:col-span-1'>
                        <Image
                            src='/logo.png'
                            alt='Brand Logo'
                            width={65}
                            height={102}
                            className='mb-5'
                        />
                        <p className='text-[#a2a2a2] text-lg mb-6'>
                            Experience the best of the future now!
                        </p>
                        <Link
                            href='/get-started'
                            className='inline-block px-10 py-3 bg-[#007bff] rounded-xl shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.25)] border-2 border-[#007bff]/30 text-white hover:bg-[#007bff]/90 transition-colors'>
                            Get started
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className='lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8'>
                        <nav>
                            <h3 className='text-white text-lg mb-6'>
                                Platform
                            </h3>
                            <ul className='space-y-4'>
                                {navigationLinks.platform.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className='text-[#a2a2a2] hover:text-white transition-colors'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav>
                            <h3 className='text-white text-lg mb-6'>Support</h3>
                            <ul className='space-y-4'>
                                {navigationLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className='text-[#a2a2a2] hover:text-white transition-colors'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav>
                            <h3 className='text-white text-lg mb-6'>Legals</h3>
                            <ul className='space-y-4'>
                                {navigationLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className='text-[#a2a2a2] hover:text-white transition-colors'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav>
                            <h3 className='text-white text-lg mb-6'>Socials</h3>
                            <ul className='space-y-4'>
                                {navigationLinks.social.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className='flex items-center gap-4 text-[#a2a2a2] hover:text-white transition-colors'>
                                            <span>{link.name}</span>
                                            <Image
                                                src={link.icon}
                                                alt={link.name}
                                                width={28}
                                                height={28}
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className='border-t border-[#a2a2a2] pt-8'>
                    <p className='text-center text-[#a2a2a2]'>
                        2024 "Brand". All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};
