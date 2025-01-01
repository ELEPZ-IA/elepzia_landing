'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { SectionWrapper } from '../SectionWrapper';

const teamMembers = [
    // Founders
    { 
        name: 'Khalil Azzabi', 
        role: 'CEO & Co-founder', 
        description: 'Visionary leader and tech enthusiast', 
        image: '/images/khalil.jpg', 
        email: 'khalil.azzabi@elepzia.tn', 
        group: 'founders' 
    },
    { 
        name: 'Fedi Naimi', 
        role: 'Co-CEO & Co-founder', 
        description: 'Expert in strategic planning and execution', 
        image: '/images/fedi.jpg', 
        email: 'fedi.naimi@elepzia.tn', 
        group: 'founders' 
    },
    { 
        name: 'Jihed Ben Salah', 
        role: 'CTO & Co-founder', 
        description: 'Tech innovator and system architect', 
        image: '/images/jihed.png', 
        email: 'jihed.bensalah@elepzia.tn', 
        group: 'founders' 
    },
    { 
        name: 'Amir Ben Arbia', 
        role: 'IoT Lead & Co-founder', 
        description: 'IoT specialist and solution developer', 
        image: '/images/amir.jpg', 
        email: 'amir.benarbia@elepzia.tn', 
        group: 'founders' 
    },

];

const TeamSection = () => {
    const teamRef = useRef(null);
    const teamInView = useInView(teamRef, { once: true, margin: '-100px' });

    const founders = teamMembers.filter(member => member.group === 'founders');
    const team = teamMembers.filter(member => member.group === 'team');

    return (
        <SectionWrapper id="team" className="py-20 mt-24 w-full flex justify-center">
            <div className="max-w-7xl w-full px-4 md:px-6 lg:px-8 mx-auto">
                <motion.div
                    ref={teamRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={teamInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center gap-6"
                >
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-5xl lg:text-[56px] font-normal">
                        Meet Our Team
                    </h2>
                </motion.div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {founders.map((member) => (
                            <motion.div
                                key={member.email}
                                initial={{ opacity: 0, y: 30 }}
                                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8 }}
                                className="p-6 rounded-3xl bg-gradient-to-r from-[#FFEB9E]/10 via-[#F38E79]/10 to-[#B2CFF8]/10 shadow-lg text-center"
                            >
                                <div className="relative w-20 h-20 mx-auto mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full border-2 border-white"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#F38E79]">{member.name}</h3>
                                <p className="text-sm font-semibold text-white mt-2">{member.role}</p>
                                <p className="text-sm text-[#d1d1d6] mt-2">{member.description}</p>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center justify-center mt-3 text-sm text-[#F38E79] hover:text-[#FFEB9E] transition-colors"
                                >
                                    📧 Email
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <motion.div
                                key={member.email}
                                initial={{ opacity: 0, y: 30 }}
                                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8 }}
                                className="p-6 rounded-3xl bg-gradient-to-r from-[#FFEB9E]/10 via-[#F38E79]/10 to-[#B2CFF8]/10 shadow-lg text-center"
                            >
                                <div className="relative w-20 h-20 mx-auto mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full border-2 border-white"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#F38E79]">{member.name}</h3>
                                <p className="text-sm font-semibold text-white mt-2">{member.role}</p>
                                <p className="text-sm text-[#d1d1d6] mt-2">{member.description}</p>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center justify-center mt-3 text-sm text-[#F38E79] hover:text-[#FFEB9E] transition-colors"
                                >
                                    📧 Email
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default TeamSection;
