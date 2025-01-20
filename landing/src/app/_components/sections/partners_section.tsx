"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
 
const PartnersSection = () => {
    const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [partnersRef1, partners1InView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [partnersRef2, partners2InView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className='relative px-4 sm:px-6 md:px-8 pt-16 sm:pt-24 max-w-7xl mx-auto w-full flex flex-col items-center overflow-hidden' >
            <div className='absolute top-0 left-0 w-full h-[300px] sm:h-[400px] md:h-[500px] bg-[url("/images/donwer.svg")] bg-cover bg-center'></div>
            
            <motion.div 
                ref={titleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className='relative z-10 flex flex-col justify-start items-center gap-2 sm:gap-3'
            >
                <div className="text-center text-white text-xl sm:text-2xl font-normal font-['Outfit'] leading-normal">
                    Our Partners
                </div>
                <div className="opacity-80 text-center text-white text-base sm:text-lg font-normal font-['Outfit'] leading-relaxed max-w-[90%] sm:max-w-none px-4">
                    We are proud to collaborate with leading institutions
                </div>
            </motion.div>

            <div className='relative z-10 flex flex-col justify-center items-center gap-6 sm:gap-8'>
                <motion.div 
                    ref={partnersRef1}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: partners1InView ? 1 : 0, x: partners1InView ? 0 : -50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8'
                >
                    {['Charles Nicolles', 'MIT', 'Nvidia Inception'].map((partner) => (
                        <div
                            key={partner}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-2xl sm:text-3xl md:text-[40px] font-normal font-['Outfit'] leading-tight sm:leading-[48px] text-center px-2 sm:px-4"
                        >
                            {partner}
                        </div>
                    ))}
                </motion.div>

                <motion.div 
                    ref={partnersRef2}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: partners2InView ? 1 : 0, x: partners2InView ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8'
                >
                    {['Fab Lab', 'Winwin', 'Orange'].map((partner) => (
                        <div
                            key={partner}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-2xl sm:text-3xl md:text-[40px] font-normal font-['Outfit'] leading-tight sm:leading-[48px] text-center px-2 sm:px-4"
                        >
                            {partner}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default PartnersSection;
