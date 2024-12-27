'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
    return (
        <div className='relative w-full h-[1100px] z-0'>
            <Image
                src='/images/bg.webp'
                alt='Hero Background'
                fill
                className='absolute top-0 left-0 w-full h-full object-cover'
            />
            <div className='relative px-5 md:px-[90px] pt-16 md:pt-[189px] flex flex-col items-center gap-6'>
                <motion.div
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className='px-8 py-3 bg-gradient-to-r from-white/5 to-white/2 rounded-[88px] border border-white/10 backdrop-blur-lg flex items-center'>
                    <span className="text-white text-base font-light font-['Outfit']">
                        Innovating for a Better Future
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-7xl font-normal font-['Outfit'] leading-[40px] md:leading-[80px]">
                    Empowering Lives Through Technology{' '}
                    <br className='hidden md:block' /> and Community
                </motion.h1>
                <motion.p
                    initial={{ y: 500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="text-center text-[#d1d1d6] text-lg md:text-xl font-normal font-['Outfit'] leading-loose">
                    Welcome to Elepzia Resources, where groundbreaking solutions
                    meet community-driven innovation.{' '}
                    <br className='hidden md:block' />
                    Our mission is to transform lives by leveraging technology
                    to address real-world challenges.
                </motion.p>
                <motion.div
                    initial={{ y: 500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className='flex flex-wrap justify-center gap-6'>
                    <button className="px-10 py-3 bg-gradient-to-r from-white/14 to-white/8 rounded-xl shadow-inner border border-white/25 text-white text-base font-normal font-['Outfit']">
                        Explore our projects
                    </button>
                    <button className="px-10 py-3 bg-[#007bff] rounded-xl shadow-inner border-2 border-[#007bff]/30 text-white text-base font-normal font-['Outfit']">
                        Learn About Episafe
                    </button>
                </motion.div>
            </div>
            <div className='absolute bottom-0 left-0 w-full h-[254px] bg-[#1c1c1e] blur-[150px]' />
        </div>
    );
}
