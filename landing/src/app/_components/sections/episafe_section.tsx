'use client';

import features from '@/app/_data/features.json';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { SectionWrapper } from '../SectionWrapper';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
    }
};

const EpisafeSection = () => {
    const [currentFeature, setCurrentFeature] = useState(0);

    return (
        <SectionWrapper
            id='episafe'
            className='w-full flex flex-col justify-center'>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
                className='flex flex-col justify-start items-center gap-6 h-[316px] md:h-auto p-4 px-6 sm:px-8 md:px-12 mt-60 relative overflow-hidden  w-full'>
                <div className='absolute left-10 top-1/2 transform -translate-y-1/2 hidden md:block'>
                    <div className='w-[162px] h-[175px] relative'>
                        <motion.div
                            animate={{
                                y: [200, 0, 200]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className='w-[50px] h-[50px] left-0 top-0 absolute bg-[#ffeb9e] rounded-full shadow-inner'>
                            <div className='w-[23.33px] h-[6.74px] left-[0.08px] top-[11.92px] absolute origin-top-left rotate-[-37.14deg] bg-white rounded-full blur-md' />
                            <div className='w-[23.33px] h-[6.74px] left-[54.25px] top-[31.04px] absolute origin-top-left rotate-[-119.61deg] bg-white rounded-full blur-md' />
                            <div className='w-[23.33px] h-[6.74px] left-[30.95px] top-[41.98px] absolute origin-top-left rotate-[-145.02deg] bg-white rounded-full blur-lg' />
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [-100, 0, -100]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className='w-20 h-20 left-[82px] top-[95px] absolute bg-[#f38e79] rounded-full shadow-inner'>
                            <div className='w-[37.33px] h-[10.78px] left-[0.13px] top-[19.08px] absolute origin-top-left rotate-[-37.14deg] bg-[#ffeb9e] rounded-full blur-lg' />
                            <div className='w-[37.33px] h-[10.78px] left-[86.81px] top-[49.66px] absolute origin-top-left rotate-[-119.61deg] bg-[#ffeb9e] rounded-full blur-lg' />
                            <div className='w-[37.33px] h-[10.78px] left-[49.52px] top-[67.17px] absolute origin-top-left rotate-[-145.02deg] bg-[#ffeb9e] rounded-full blur-xl' />
                        </motion.div>
                    </div>
                </div>
                <div className='absolute right-10 top-1/2 transform -translate-y-1/2 hidden md:block'>
                    <div className='w-[162px] h-[175px] relative'>
                        <motion.div
                            animate={{
                                y: [200, 0, 200]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className='w-[50px] h-[50px] left-0 top-0 absolute bg-[#ffeb9e] rounded-full shadow-inner'>
                            <div className='w-[23.33px] h-[6.74px] left-[0.08px] top-[11.92px] absolute origin-top-left rotate-[-37.14deg] bg-white rounded-full blur-md' />
                            <div className='w-[23.33px] h-[6.74px] left-[54.25px] top-[31.04px] absolute origin-top-left rotate-[-119.61deg] bg-white rounded-full blur-md' />
                            <div className='w-[23.33px] h-[6.74px] left-[30.95px] top-[41.98px] absolute origin-top-left rotate-[-145.02deg] bg-white rounded-full blur-lg' />
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [-100, 0, -100]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className='w-20 h-20 left-[82px] top-[95px] absolute bg-[#f38e79] rounded-full shadow-inner'>
                            <div className='w-[37.33px] h-[10.78px] left-[0.13px] top-[19.08px] absolute origin-top-left rotate-[-37.14deg] bg-[#ffeb9e] rounded-full blur-lg' />
                            <div className='w-[37.33px] h-[10.78px] left-[86.81px] top-[49.66px] absolute origin-top-left rotate-[-119.61deg] bg-[#ffeb9e] rounded-full blur-lg' />
                            <div className='w-[37.33px] h-[10.78px] left-[49.52px] top-[67.17px] absolute origin-top-left rotate-[-145.02deg] bg-[#ffeb9e] rounded-full blur-xl' />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='px-8 py-3 bg-gradient-to-r from-white/5 to-white/2 rounded-[88px] border border-white/10 backdrop-blur-lg'>
                    <div className="text-center text-white text-base font-light font-['Outfit']">
                        Explore Our Projects: Episafe
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-[56px] font-normal font-['Outfit'] leading-tight md:leading-[64px]">
                    Episafe: Smart Seizure Prediction{' '}
                    <br className='hidden md:block' /> & Care
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-[#d1d1d6] text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed md:leading-loose max-w-4xl mx-auto">
                    Episafe is revolutionizing epilepsy care with advanced AI
                    and IoT solutions. Designed for safety, independence, and
                    peace of mind, Episafe empowers both patients and
                    caregivers.
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8 }}
                className='relative w-full max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-24 px-4 sm:px-6 md:px-8 lg:px-4 flex flex-col items-center'>
                <div className='mx-auto relative bg-white/5 w-full md:w-[80%] lg:w-[65%] min-h-[400px] md:min-h-[550px] backdrop-blur-lg rounded-xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-16'>
                    <div className='relative'>
                        <div className='h-12 md:h-10 overflow-x-auto flex items-center gap-2 sm:gap-[17px] hide-scrollbar'>
                            {features.map((feature, index) => (
                                <button
                                    key={feature.id}
                                    className={`px-6 py-2.5 border-2 border-[#007bff]/0 shrink-0 justify-center items-center gap-2.5 flex cursor-pointer ${
                                        currentFeature === index &&
                                        'bg-[#007bff]'
                                    }`}
                                    onClick={() => setCurrentFeature(index)}>
                                    <span className='text-center text-white text-base font-light whitespace-nowrap'>
                                        {`0${feature.id}/`}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className='absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none'></div>
                    </div>
                    <Content
                        name={features[currentFeature].name}
                        description={features[currentFeature].description}
                    />
                </div>
                <h4 className='mt-4 px-2 sm:px-4 text-center text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8]'>
                    Experience the future of epilepsy care with Episafe.
                </h4>
            </motion.div>
        </SectionWrapper>
    );
};

type ContentProps = {
    name: string;
    description: string;
};

const Content = ({ name, description }: ContentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className='flex flex-col gap-4 md:gap-6 lg:gap-12 mt-6 sm:mt-8 md:mt-20 w-full md:max-w-[70%] lg:max-w-[60%]'>
                <div className='space-y-2'>
                    <AnimatePresence mode='wait'>
                        <motion.h3
                            key={name}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] break-words'>
                            {name}
                        </motion.h3>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <motion.p
                            key={description}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='text-base md:text-lg text-gray-300 pt-2 md:pt-4'>
                            {description}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='mt-6 sm:mt-8 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 relative right-0 md:-right-16 lg:-right-32 w-[120px] sm:w-[150px] md:w-[200px] lg:w-[300px] mx-auto'>
                <Image
                    className='w-full h-auto'
                    src='/images/epiSafe.webp'
                    alt='Feature Illustration'
                    width={300}
                    height={300}
                    priority
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <Image
                    className='w-16 sm:w-20 md:w-28 lg:w-40 absolute bottom-2 sm:bottom-4 left-2 sm:left-4'
                    src='/images/epi_logo.webp'
                    alt='Logo'
                    width={281}
                    height={102}
                />
            </motion.div>
        </motion.div>
    );
};

export default EpisafeSection;
