'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
    return (
        <div
            id='home'
            className='relative w-full min-h-[100svh] md:h-[100vh] flex items-center justify-center'>
            <Image
                src='/images/bg.webp'
                alt='Hero Background'
                fill
                className='absolute top-0 left-0 w-full h-full object-cover object-center '
                priority
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none' />

            <div className='absolute bottom-0 left-0 w-full h-[300px] xs:h-[350px] sm:h-[400px] bg-gradient-to-t from-[#1c1c1e] to-transparent' />

            <div className='relative w-full px-3 sm:px-6 lg:px-[90px] flex flex-col items-center gap-6 sm:gap-8 md:gap-10 pt-16 xs:pt-20 sm:pt-0 max-w-screen z-10'>
                <motion.div
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className='px-8 py-2 sm:py-3 bg-gradient-to-r from-white/5 to-white/2 rounded-[88px] border border-white/10 backdrop-blur-lg flex items-center'>
                    <span className="text-white ext-base">
                        Innovating for a Better Future
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className='text-center gradiant-title text-4xl md:text-6xl lg:text-7xl font-normal max-w-[95%] xs:max-w-[90%] sm:max-w-full leading-tight xs:leading-normal sm:leading-normal pb-2'>
                    Empowering Lives Through Technology
                </motion.h1> 
                <motion.p
                    initial={{ y: 500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="text-center text-[#d1d1d6] text-base sm:text-lg md:text-xl px-2 xs:px-4 sm:px-6 md:px-0 max-w-6xl mx-auto">
                    Welcome to Elepzia, where innovation meets impact!
                    <br className='hidden md:block' />
                    {' '}At Elepzia, we are dedicated to transforming lives through cutting-edge technology, tackling real-world healthcare challenges with groundbreaking solutions.
                </motion.p>
                
            </div>
            <div className='absolute bottom-0 left-0 w-full h-[50vh] bg-[#1c1c1e] blur-[250px]' />
        </div>
    );
}
