'use client';

import features from '@/app/_data/features.json';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const FeatureSection = () => {
    const [currentFeature, setCurrentFeature] = useState(0);

    return (
        <div className='relative w-full max-w-screen-xl mx-auto mt-12 md:mt-24 px-4 md:px-0'>
            <div className='mx-auto relative bg-white/5 w-full md:w-[65%] min-h-[550px] backdrop-blur-lg rounded-xl shadow-xl p-4 md:p-8 lg:p-16'>
                <div className='relative'>
                    <div className='h-10 overflow-x-auto flex items-center gap-[17px] hide-scrollbar'>
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                className={`px-6 py-2.5 border-2 border-[#007bff]/0 shrink-0 justify-center items-center gap-2.5 flex cursor-pointer ${
                                    currentFeature === index && 'bg-[#007bff]'
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
            <h4 className='mt-4 px-4 text-center text-base md:text-lg lg:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8]'>
                Experience the future of epilepsy care with Episafe.
            </h4>
        </div>
    );
};

type ContentProps = {
    name: string;
    description: string;
};

const Content = ({ name, description }: ContentProps) => {
    return (
        <>
            <div className='flex flex-col gap-4 md:gap-8 lg:gap-12 mt-8 md:mt-20 w-full md:max-w-[60%]'>
                <div className='space-y-2'>
                    <AnimatePresence mode='wait'>
                        <motion.h3 
                            key={name}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] break-words'
                        >
                            {name}
                        </motion.h3>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <motion.p 
                            key={description}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='text-base md:text-lg text-gray-300 pt-2 md:pt-4'
                        >
                            {description}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>

            <div className='mt-8 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 relative right-0 md:-right-20 lg:-right-32 w-[150px] md:w-[200px] lg:w-[300px] mx-auto'>
                <Image
                    className='w-full h-auto'
                    src='/images/epiSafe.png'
                    alt='Feature Illustration'
                    width={300}
                    height={300}
                    priority
                />
            </div>

            <Image
                className='w-20 md:w-28 lg:w-40 absolute bottom-0 left-4'
                src='/images/epi_logo.png'
                alt='Logo'
                width={281}
                height={102}
            />
        </>
    );
};

export default FeatureSection;
