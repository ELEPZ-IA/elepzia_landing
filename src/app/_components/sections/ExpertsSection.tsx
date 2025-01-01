'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { SectionWrapper } from '../SectionWrapper';

const experts = [
    {
        name: 'Ghassen Horrigue',
        role: 'Founder & Executive Manager of the WinWin Club',
        description: 'Global Head of Operational Excellence at BorderlessCX, Lean SixSigma Black Belt Expert',
        image: '/images/ghassen.jpg',
    },
    {
        name: 'Nadia Benali',
        role: 'Professor of Neurology, CHU Charles Nicolle',
        description: 'Medical Advisor at Elepzia',
        image: '/images/nadia.jpg',
    },
    {
        name: 'Mohamed Khelifi',
        role: 'Founder of Easy-Bank',
        description: 'Financial Advisor at Elepzia',
        image: '/images/mohamed.jpg',
    },
];


const ExpertsSection = () => {
    const expertsRef = useRef(null);
    const expertsInView = useInView(expertsRef, { once: true, margin: '-100px' });

    return (
        <SectionWrapper id="experts" className="py-20 mt-24 w-full flex justify-center">
            <div className="max-w-7xl w-full px-4 md:px-6 lg:px-8 mx-auto">
                <motion.div
                    ref={expertsRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={expertsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center gap-6"
                >
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-5xl lg:text-[56px] font-normal">
                        Our Experts
                    </h2>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experts.map((expert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={expertsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="p-6 rounded-3xl bg-gradient-to-r from-[#FFEB9E]/10 via-[#F38E79]/10 to-[#B2CFF8]/10 shadow-lg text-center"
                        >
                            <Image
                                src={expert.image}
                                alt={expert.name}
                                width={100}
                                height={100}
                                className="rounded-full mx-auto mb-4 border-2 border-white"
                            />
                            <h3 className="text-xl font-bold text-[#F38E79]">{expert.name}</h3>
                            <p className="text-sm font-semibold text-white mt-2">{expert.role}</p>
                            <p className="text-sm text-[#d1d1d6] mt-2">{expert.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ExpertsSection;
