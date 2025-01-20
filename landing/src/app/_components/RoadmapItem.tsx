'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';

interface RoadmapItemProps {
    period: string;
    description: string;
    link?: string;
    index: number;
}

export const RoadmapItem = ({ period, description, link, index }: RoadmapItemProps) => {
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, margin: "-50px" });

    return (
        <div className="relative w-full min-h-[120px] flex items-center">
            <div className="absolute left-0 sm:left-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 z-10">
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 1 }}
                    className="h-6 w-6 rounded-full bg-gradient-to-br from-[#F38E79] to-[#FFEB9E] border-4 border-white"
                />
            </div>

            <motion.div
                ref={itemRef}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full flex justify-center"
            >
                <div className={`
                    w-[calc(100%-2rem)] sm:w-[45%] 
                    p-4 sm:p-6 
                    rounded-lg bg-white/[5%] border border-white/10 shadow-lg
                    ml-8 sm:ml-0
                    ${index % 2 === 0 
                        ? 'sm:translate-x-[-50%] sm:text-right' 
                        : 'sm:translate-x-[50%] sm:text-left'
                    }
                `}>
                    <h3 className="text-xl font-bold text-white">{period}</h3>
                    <p className="mt-2 sm:mt-4 text-sm text-[#d1d1d6]">{description}</p>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center mt-4 text-sm text-[#F38E79] hover:text-[#FFEB9E] transition-colors"
                        >
                            <FaLinkedin className="mr-2" /> View on LinkedIn
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    );
};
