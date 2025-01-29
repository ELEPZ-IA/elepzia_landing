'use client';

import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { SectionWrapper } from '../SectionWrapper';

const teamMembers = [
    {
        name: 'Khalil Azzabi',
        role: 'CEO',
        description: 'Visionary leader and tech enthusiast',
        image: '/images/khalil.jpg',
        email: 'khalil.azzabi@elepzia.tn',
        group: 'founders'
    },
    {
        name: 'Fedi Naimi',
        role: 'COO',
        description: 'Expert in strategic planning and execution',
        image: '/images/fedi.jpg',
        email: 'fedi.naimi@elepzia.tn',
        group: 'founders'
    },
    {
        name: 'Jihed Ben Salah',
        role: 'CTO',
        description: 'Tech innovator and system architect',
        image: '/images/jihed.png',
        email: 'jihed.bensalah@elepzia.tn',
        group: 'founders'
    },
    {
        name: 'Amir Ben Arbia',
        role: 'IoT Lead',
        description: 'IoT specialist and solution developer',
        image: '/images/amir.jpg',
        email: 'amir.benarbia@elepzia.tn',
        group: 'founders'
    }
];

const TeamSection = () => {
    const teamRef = useRef(null);
    const teamInView = useInView(teamRef, { once: true, margin: '-100px' });

    const founders = teamMembers.filter(
        (member) => member.group === 'founders'
    );
    const team = teamMembers.filter((member) => member.group === 'team');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <SectionWrapper
            id='team'
            className='w-full flex flex-col justify-center mt-20'>
            <motion.div
                ref={teamRef}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className='flex flex-col justify-start items-center gap-6 h-[316px] md:h-auto p-4 px-6 sm:px-8 md:px-12 relative overflow-hidden w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={teamInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className='px-8 py-3 bg-gradient-to-r from-white/5 to-white/2 rounded-[88px] border border-white/10 backdrop-blur-lg'>
                    <div className="text-center text-white text-base font-light font-['Outfit']">
                        Elepzia Founders
                    </div>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={teamInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-[56px] font-normal font-['Outfit'] leading-tight md:leading-[64px]">
                    Passionate Innovators <br className='hidden md:block' />{' '}
                    Behind Elepzia
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={teamInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-[#d1d1d6] text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed md:leading-loose max-w-4xl mx-auto">
                    Dedicated to revolutionizing healthcare technology through
                    innovation and expertise
                </motion.p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial='hidden'
                animate={teamInView ? 'visible' : 'hidden'}
                className='mt-20 max-w-7xl w-full px-4 md:px-6 lg:px-8 mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {founders.map((member) => (
                        <motion.div
                            key={member.email}
                            variants={itemVariants}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                            className='group relative h-[400px] rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0'>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent' />
                            <div className='absolute bottom-0 w-full p-6'>
                                <div className='space-y-0 group-hover:space-y-3 transition-all duration-500'>
                                    <div className='transform transition-all duration-500 ease-out group-hover:-translate-y-2'>
                                        <div className='transform translate-y-0 transition-all duration-300'>
                                            <h3 className='text-2xl font-bold text-white transition-all duration-500 group-hover:scale-105 origin-left'>
                                                {member.name}
                                            </h3>
                                        </div>
                                        <div className='transform translate-y-0 transition-all duration-300'>
                                            <p className='text-[#F38E79] font-medium'>
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='h-0 group-hover:h-auto overflow-hidden transition-all duration-500'>
                                        <div className='opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150'>
                                            <p className='text-gray-300 text-sm transform transition-all duration-300 delay-200'>
                                                {member.description}
                                            </p>
                                            <div className='opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-300'>
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className='mt-3 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm transition-all duration-300 hover:scale-105'>
                                                    <EnvelopeIcon className='h-4 w-4 mr-2' />
                                                    <span className='mr-1 transform transition-transform duration-300 group-hover:translate-x-1'>
                                                        Contact
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {team.length > 0 && (
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate={teamInView ? 'visible' : 'hidden'}
                    className='mt-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {team.map((member) => (
                            <motion.div
                                key={member.email}
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                                className='group relative h-[400px] rounded-2xl overflow-hidden'>
                                <div className='absolute inset-0'>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent' />
                                <div className='absolute bottom-0 w-full p-6'>
                                    <div className='transition-all duration-500'>
                                        <div className='transform transition-all duration-500 ease-out group-hover:-translate-y-2'>
                                            <div className='transform translate-y-0 transition-all duration-300'>
                                                <h3 className='text-2xl font-bold text-white transition-all duration-500 group-hover:scale-105 origin-left'>
                                                    {member.name}
                                                </h3>
                                            </div>
                                            <div className='transform translate-y-0 transition-all duration-300'>
                                                <p className='text-[#F38E79] font-medium'>
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='h-0 group-hover:h-auto overflow-hidden transition-all duration-500'>
                                            <div className='opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150'>
                                                <p className='text-gray-300 text-sm transform transition-all duration-300 delay-200'>
                                                    {member.description}
                                                </p>
                                                <div className='opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-300'>
                                                    <a
                                                        href={`mailto:${member.email}`}
                                                        className='mt-3 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm transition-all duration-300 hover:scale-105'>
                                                        <EnvelopeIcon className='h-4 w-4 mr-2' />
                                                        <span className='mr-1 transform transition-transform duration-300 group-hover:translate-x-1'>
                                                            Contact
                                                        </span>
                                                        {/* <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span> */}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </SectionWrapper>
    );
};

export default TeamSection;
