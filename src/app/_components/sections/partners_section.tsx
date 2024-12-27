"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
 
const PartnersSection = () => {
    const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [partnersRef1, partners1InView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [partnersRef2, partners2InView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className='relative'>
            <div className='absolute -top-10 left-0 w-full h-[500px] bg-[url("/images/donwer.svg")] bg-cover z-[999999999999]'></div>
            
            <motion.div 
                ref={titleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className='relative -top-20 z-10 flex flex-col justify-start items-center gap-3'
            >
                <div className="text-center text-white text-2xl font-normal font-['Outfit'] leading-normal">
                    Our Partners
                </div>
                <div className="opacity-80 text-center text-white text-lg font-normal font-['Outfit'] leading-7">
                    We are proud to collaborate with leading institutions
                </div>
            </motion.div>

            <div className='relative z-10 flex flex-col justify-center items-center gap-8'>
                <motion.div 
                    ref={partnersRef1}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: partners1InView ? 1 : 0, x: partners1InView ? 0 : -50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='flex flex-wrap justify-center items-center gap-8'
                >
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        Charles Nicolles
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        MIT
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        Nvidia Inception
                    </div>
                </motion.div>

                <motion.div 
                    ref={partnersRef2}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: partners2InView ? 1 : 0, x: partners2InView ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='flex flex-wrap justify-center items-center gap-8'
                >
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        Fab Lab
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        Winwin
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        Orange
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PartnersSection;
