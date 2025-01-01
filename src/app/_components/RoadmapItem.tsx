'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { useRoadmap } from './RoadmapContext';

interface RoadmapItemProps {
    period: string;
    description: string;
    link?: string;
    index: number;
}

const cardVariants = {
    hidden: (isEven: boolean) => ({
        opacity: 0,
        x: isEven ? 100 : -100,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            ease: "easeInOut"
        }
    }
};

export const RoadmapItem = ({ period, description, link, index }: RoadmapItemProps) => {
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, margin: "-50px" });
    const { currentIndex, setCurrentIndex } = useRoadmap();
    const isReady = currentIndex >= index;

    const handleCardAnimationComplete = () => {
        if (isReady) {
            setCurrentIndex(index + 1);
        }
    };

    return (
        <div className="relative w-full min-h-[120px] flex items-center">
            {/* Fixed circle with dependent animation */}
            <div className="absolute left-0 sm:left-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 z-10">
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView && isReady ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                        delay: 1.2, // Delay circle animation until after card animation
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className="h-6 w-6 rounded-full bg-gradient-to-br from-[#F38E79] to-[#FFEB9E] border-4 border-white"
                />
            </div>

            {/* Animated card container */}
            <motion.div
                ref={itemRef}
                custom={index % 2 === 0}
                variants={cardVariants}
                initial="hidden"
                animate={isInView && isReady ? "visible" : "hidden"}
                onAnimationComplete={handleCardAnimationComplete}
                className="w-full flex justify-center"
            >
                <motion.div
                    className={`
                        w-[calc(100%-2rem)] sm:w-[45%] 
                        p-4 sm:p-6 
                        rounded-lg bg-white/[5%] border border-white/10 shadow-lg
                        ml-8 sm:ml-0
                        ${index % 2 === 0 
                            ? 'sm:translate-x-[-50%] sm:text-right' 
                            : 'sm:translate-x-[50%] sm:text-left'
                        }
                    `}
                >
                    <motion.h3 
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-xl font-bold text-white"
                    >
                        {period}
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="mt-2 sm:mt-4 text-sm text-[#d1d1d6]"
                    >
                        {description}
                    </motion.p>
                    {link && (
                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center mt-4 text-sm text-[#F38E79] hover:text-[#FFEB9E] transition-colors"
                        >
                            <FaLinkedin className="mr-2" /> View on LinkedIn
                        </motion.a>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};
