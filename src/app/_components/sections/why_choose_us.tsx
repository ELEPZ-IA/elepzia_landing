'use client';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { SectionWrapper } from '../SectionWrapper';

const Circle = ({
    className,
    initialX
}: {
    className: string;
    initialX: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ x: initialX, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, type: 'spring' }}
            className={`w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] rounded-full border border-[#a2a2a2]/20 ${className}`}
        />
    );
};

const TextBlock = ({
    children,
    index
}: {
    children: React.ReactNode;
    index: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-100px'
    });

    const fromRight = index % 2 === 1;

    return (
        <motion.p
            ref={ref}
            initial={{ x: fromRight ? 100 : -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{
                duration: 0.8,
                type: 'spring',
                delay: index * 0.2 // Stagger effect
            }}
            className={`text-white text-left md:text-justify px-4 sm:px-6 md:px-16 lg:px-20 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed w-full md:w-1/2 ${
                fromRight ? 'md:self-end' : ''
            }`}>
            {children}
        </motion.p>
    );
};

const WhyChooseUs = () => {
    const mobileLogoRef = useRef(null);
    
    // Add scroll rotation
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]); // Increased rotation for more effect

    return (
        <SectionWrapper className='container max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-10 md:py-20 relative'>
            <div className='flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
                <TextBlock index={0}>
                    At Elepz'ia, our mission is to harness the power of
                    technology to create groundbreaking solutions. Our team is
                    dedicated to crafting tools that not only solve challenges
                    but also inspire a better tomorrow
                </TextBlock>

                <TextBlock index={1}>
                    Our clients trust us to deliver exceptional results that
                    transform their vision into reality. Stay tuned for their
                    inspiring stories and feedback.
                </TextBlock>
                <TextBlock index={2}>
                    Designed with precision and built with care, our solutions
                    deliver a seamless blend of performance and innovation. From
                    AI-driven insights to cutting-edge wearables, we redefine
                    what's possible
                </TextBlock>

                <TextBlock index={3}>
                    Ready to take the next step in innovation? Let us help you
                    bring your ideas to life with our expertise and creativity.
                    Together, we can shape the future.
                </TextBlock>

                {/* Decorative Circles - Desktop */}
                <div className='absolute inset-0 hidden md:block'>
                    <Circle
                        className='absolute right-[15%] sm:right-[20%] top-[25%] sm:top-[30%] opacity-50 md:opacity-100'
                        initialX={100}
                    />
                    <Circle
                        className='absolute left-[15%] sm:left-[20%] top-[25%] sm:top-[30%] opacity-50 md:opacity-100'
                        initialX={-100}
                    />
                    <Circle
                        className='absolute left-[25%] sm:left-[30%] top-[5%] opacity-50 md:opacity-100'
                        initialX={-100}
                    />
                    <Circle
                        className='absolute right-[25%] sm:right-[30%] top-[5%] opacity-50 md:opacity-100'
                        initialX={100}
                    />
                    <Circle
                        className='absolute left-[25%] sm:left-[30%] bottom-[5%] opacity-50 md:opacity-100'
                        initialX={-100}
                    />
                    <Circle
                        className='absolute right-[25%] sm:right-[30%] bottom-[5%] opacity-50 md:opacity-100'
                        initialX={100}
                    />

                    {/* Desktop Logo */}
                    <div className='absolute left-2/4 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                                duration: 0.8,
                                type: 'spring',
                                bounce: 0.3
                            }}
                            style={{ rotate }}
                            className='w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[250px] xl:h-[250px] rounded-full border border-[#a2a2a2]/40 overflow-hidden flex items-center justify-center'
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <Image
                                    src='/images/logo.webp'
                                    alt='Feature'
                                    width={200}
                                    height={352}
                                    className='w-[80px] sm:w-[100px] md:w-[120px] lg:w-[160px] xl:w-[180px] object-contain'
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Logo */}
                <div className='md:hidden absolute left-2/4 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <motion.div
                        ref={mobileLogoRef}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                            duration: 0.8,
                            type: 'spring',
                            bounce: 0.3
                        }}
                        style={{ rotate }}
                        className='w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full border border-[#a2a2a2]/40 bg-black/20 backdrop-blur-sm flex items-center justify-center'
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <Image
                                src='/images/logo.webp'
                                alt='Logo'
                                width={100}
                                height={100}
                                className='w-[60px] sm:w-[80px] object-contain'
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default WhyChooseUs;