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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { 
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8
        }
    }
};

const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
        scale: 1, 
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            duration: 0.5
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const ExpertsSection = () => {
    const expertsRef = useRef(null);
    const expertsInView = useInView(expertsRef, { once: true, margin: '-100px' });

    return (
        <SectionWrapper id="experts" className="w-full flex flex-col justify-center mt-20">
            <motion.div
                ref={expertsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={expertsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-start items-center gap-6 h-[316px] md:h-auto p-4 px-6 sm:px-8 md:px-12 relative overflow-hidden w-full"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={expertsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="px-8 py-3 bg-gradient-to-r from-white/5 to-white/2 rounded-[88px] border border-white/10 backdrop-blur-lg"
                >
                    <div className="text-center text-white text-base font-light font-['Outfit']">
                        Meet Our Experts
                    </div>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={expertsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-[56px] font-normal font-['Outfit'] leading-tight md:leading-[64px]"
                >
                    Expert Advisors Driving <br className="hidden md:block" /> Innovation
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={expertsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-[#d1d1d6] text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed md:leading-loose max-w-4xl mx-auto"
                >
                    Our team of expert advisors brings diverse expertise to shape the future of healthcare technology
                </motion.p>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={expertsInView ? "visible" : "hidden"}
                className="mt-16 max-w-7xl w-full px-4 md:px-6 lg:px-8 mx-auto"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {experts.map((expert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="p-6 rounded-3xl bg-gradient-to-r from-[#FFEB9E]/10 via-[#F38E79]/10 to-[#B2CFF8]/10 shadow-lg text-center backdrop-blur-sm flex flex-col items-center"
                        >
                            <motion.div
                                variants={imageVariants}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="w-24 h-24 md:w-28 md:h-28 relative"
                            >
                                <Image
                                    src={expert.image}
                                    alt={expert.name}
                                    fill
                                    className="rounded-full object-cover border-2 border-white"
                                />
                            </motion.div>
                            <motion.div variants={textVariants} className="mt-4 space-y-2">
                                <h3 className="text-xl font-bold text-[#F38E79]">{expert.name}</h3>
                                <p className="text-sm font-semibold text-white">{expert.role}</p>
                                <p className="text-sm text-[#d1d1d6]">{expert.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default ExpertsSection;
