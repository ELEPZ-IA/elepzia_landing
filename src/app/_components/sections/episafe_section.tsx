'use client';

import SectionHeader from '@/components/SectionHeader';
import { useMouseRotation } from '@/hooks/useMouseRotation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';
import EpisafeCard from '../episafe_card';
import { SectionWrapper } from '../SectionWrapper';

const EpisafeSection = () => {
    const t = useTranslations('episafe');
    const imageRef = useRef<HTMLDivElement>(null);
    const angle = useMouseRotation(imageRef);

    const services = [
        {
            title: t('services.predictSeizures.title'),
            description: t('services.predictSeizures.description'),
            image: '/images/episafe/epi1.svg'
        },
        {
            title: t('services.continuousMonitoring.title'),
            description: t('services.continuousMonitoring.description'),
            image: '/images/episafe/epi2.svg'
        },
        {
            title: t('services.realTimeAlerts.title'),
            description: t('services.realTimeAlerts.description'),
            image: '/images/episafe/epi3.svg'
        },
        {
            title: t('services.medicationReminders.title'),
            description: t('services.medicationReminders.description'),
            image: '/images/episafe/epi4.svg'
        }
    ];

    return (
        <SectionWrapper
            id='episafe'
            className='w-full flex flex-col justify-center mt-60'>
            <SectionHeader
                title={t('title')}
                description={t('description')}
                tag={t('tag')}
            />
            <motion.div
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0 mt-5 mb-20'>
                <a
                    href='https://forms.gle/UdmuFt8SM8Me5KVp6'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="w-full sm:w-auto px-6 sm:px-10 py-3 bg-gradient-to-r from-white/14 to-white/8 rounded-xl shadow-inner border border-white/25 text-white text-sm sm:text-base font-normal font-['Outfit'] hover:bg-white/10 duration-300 transition-all">
                    {t('internationalSurvey')}
                </a>
                <a
                    href='https://forms.gle/wDK3ZxnR86Jpb68o9'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="w-full sm:w-auto px-6 sm:px-10 py-3 bg-[#007bff] rounded-xl shadow-inner border-2 border-[#007bff]/30 text-white text-sm sm:text-base font-normal font-['Outfit'] hover:bg-[#007bff]/80 transition-all duration-300">
                    {t('localSurvey')}
                </a>
            </motion.div>
            <div className='relative'>
                {/* Horizontal lines */}
                <div className='hidden md:block absolute h-0.5 bg-white/10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[90%]'></div>
                <div className='hidden md:block absolute h-0.5 bg-white/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[90%]'></div>
                <div className='hidden md:block absolute h-0.5 bg-white/10 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[90%]'></div>

                <div className='grid md:grid-cols-2 max-w-6xl mx-auto relative'>
                    {/* Intersection Circles */}
                    <div
                        ref={imageRef}
                        className='hidden md:block absolute w-[136px] h-[136px] rounded-full bg-[#272527] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 border border-white/10 backdrop-blur-[90px]'
                        style={{
                            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                            transition: 'transform 0.1s ease-out'
                        }}>
                        <div className='w-full h-full rounded-full overflow-hidden p-8'>
                            <div className='w-full h-full relative'>
                                <Image
                                    src='/images/circle_epi.svg'
                                    alt='Episafe Logo'
                                    fill
                                    className='object-cover mask-circle'
                                    style={{
                                        clipPath: 'circle(50%)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {services.map((service, index) => (
                        <EpisafeCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                    ))}
                    {/* Vertical lines */}
                    <div className='hidden md:block absolute w-0.5 bg-white/10 top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10 h-full'></div>
                    <div className='hidden md:block absolute w-0.5 bg-white/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-full'></div>
                    <div className='hidden md:block absolute w-0.5 bg-white/10 top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 z-10 h-full'></div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default EpisafeSection;
