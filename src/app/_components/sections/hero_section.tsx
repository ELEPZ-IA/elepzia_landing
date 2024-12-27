'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
    return (
        <div
            id='home'
            className='relative w-full max-h-[calc(100vh+200px)] sm:h-[1100px] flex items-center justify-center pt-28 sm:pt-0 '>
            <Image
                src='/images/bg.webp'
                alt='Hero Background'
                fill
                className='absolute top-0 left-0 w-full h-full object-cover object-center'
                priority
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent pointer-events-none' />

            <div className='absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#1c1c1e] to-transparent' />

            <div className='relative w-full px-4 sm:px-6 md:px-[90px] flex flex-col items-center gap-4 sm:gap-6 pt-20 sm:pt-0 max-w-screen z-10'>
                <motion.div
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className='px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-white/5 to-white/2 rounded-[88px] border border-white/10 backdrop-blur-lg flex items-center'>
                    <span className="text-white text-sm sm:text-base font-light font-['Outfit']">
                        Innovating for a Better Future
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className='text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal max-w-[90%] sm:max-w-full'>
                    Empowering Lives Through Technology and Community
                </motion.h1>
                <motion.p
                    initial={{ y: 500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="text-center text-[#d1d1d6] text-base sm:text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed px-4 sm:px-6 md:px-0 max-w-4xl mx-auto">
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
                    className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0'>
                    <button className="w-full sm:w-auto px-6 sm:px-10 py-3 bg-gradient-to-r from-white/14 to-white/8 rounded-xl shadow-inner border border-white/25 text-white text-sm sm:text-base font-normal font-['Outfit'] hover:from-white/20 hover:to-white/10 transition-all">
                        Explore our projects
                    </button>
                    <button className="w-full sm:w-auto px-6 sm:px-10 py-3 bg-[#007bff] rounded-xl shadow-inner border-2 border-[#007bff]/30 text-white text-sm sm:text-base font-normal font-['Outfit'] hover:bg-[#007bff]/90 transition-all">
                        Learn About Episafe
                    </button>
                </motion.div>
            </div>
            <div className='absolute bottom-0 left-0 w-full h-[154px] sm:h-[254px] bg-[#1c1c1e] blur-[100px] sm:blur-[150px]' />
        </div>
    );
}
