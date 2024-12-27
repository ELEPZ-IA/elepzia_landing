'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { SectionWrapper } from '../SectionWrapper';

const HackiniSection = () => {
    const featuresRef = useRef(null);
    const featuresInView = useInView(featuresRef, {
        once: true,
        margin: '-100px'
    });

    const features = [
        {
            image: '/icons/file.svg',
            title: 'Discover Hackathons',
            description:
                'Find national and global opportunities in one centralized platform.'
        },
        {
            image: '/icons/leaderboard.svg',
            title: 'Climb the Leaderboard',
            description:
                'Earn points for participation and performance, with exclusive bi-monthly rewards.'
        },
        {
            image: '/icons/unlock.svg',
            title: 'Unlock Rewards',
            description: 'Compete for cash prizes, internships, and more'
        },
        {
            image: '/icons/token.svg',
            title: 'Build Connections',
            description:
                'Join teams and collaborate with like-minded innovators.'
        },
        {
            image: '/icons/people.svg',
            title: 'Seamless Participation',
            description: 'Register easily for events tailored to your goals.'
        }
    ];

    return (
        <SectionWrapper id='hackini' className='py-20 mt-24 relative px-4 md:px-6 lg:px-8'>
            <Image
                src='/images/left-circle.svg'
                alt='Right Circle'
                height={600}
                width={600}
                className='absolute -left-0 top-0'
            />
            <Image
                src='/images/right-circle.svg'
                alt='Right Circle'
                height={600}
                width={600}
                className='absolute -right-0 top-0 w-1/4'
            />
            <div className='flex flex-col items-center gap-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-0'>
                <motion.div
                    ref={featuresRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col items-center gap-6 text-center'>
                    <div className='px-8 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm'>
                        <span className='text-white font-light'>
                            Explore Our Projects: Hackini
                        </span>
                    </div>

                    <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-5xl lg:text-[56px] font-normal'>
                        Hackini: Your Gateway to Innovation Through Hackathons
                    </h2>
                    <p className='text-[#d1d1d6] text-lg md:text-xl max-w-3xl'>
                        Hackini connects students, innovators, and organizations
                        with hackathons worldwide, creating a dynamic ecosystem
                        for creativity and problem-solving.
                    </p>
                </motion.div>

                <div className='flex flex-col gap-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {features.slice(0, 2).map((feature, index) => (
                            <div
                                key={index}
                                className='relative p-8 rounded-2xl border border-[#a2a2a2]/20 bg-white/[2%] backdrop-blur-sm
                          flex flex-col items-center justify-center gap-4 min-h-[300px]
                          hover:border-[#f38e79]/20 transition-all group'>
                                <Image
                                    src={feature.image}
                                    alt='Feature Icon'
                                    width={100}
                                    height={100}
                                    className='transition-transform duration-500 ease-in-out group-hover:scale-125'
                                />
                                <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-2xl md:text-3xl font-normal text-center'>
                                    {feature.title}
                                </h3>
                                <p className='text-[#d1d1d6] text-lg md:text-xl text-center'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {features.slice(2, 5).map((feature, index) => (
                            <div
                                key={index + 2}
                                className='relative p-8 rounded-2xl border border-[#a2a2a2]/20 bg-white/[2%] backdrop-blur-sm 
                                flex flex-col items-center justify-center gap-4 min-h-[300px] 
                                hover:border-[#f38e79]/20 transition-all group'>
                                <Image
                                    src={feature.image}
                                    alt='Feature Icon'
                                    width={100}
                                    height={100}
                                    className='transition-transform duration-500 ease-in-out group-hover:scale-125'
                                />
                                <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-2xl md:text-3xl font-normal text-center'>
                                    {feature.title}
                                </h3>
                                <p className='text-[#d1d1d6] text-lg md:text-xl text-center'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default HackiniSection;
