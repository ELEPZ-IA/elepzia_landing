'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { RoadmapProvider } from '../../_contexts/RoadmapContext';
import { RoadmapItem } from '../RoadmapItem';
import { SectionWrapper } from '../SectionWrapper';

const roadmapData = [
    {
        period: '2023',
        description: '🥉 Third place at OSC 2023 (Orange Summer Challenge) with our innovative Episafe solution, demonstrating our commitment to health innovation.',
        link: 'https://www.linkedin.com/posts/khalil-azzabi-6915771bb_episafe-revolutionizing-epilepsy-care-ugcPost-7132063815210295296-FGlt?utm_source=social_share_sheet&utm_medium=member_desktop_web',
    },
    {
        period: '2024',
        description: '🤝 Integration into the NVIDIA Inception program, enhancing our internal AI projects with cutting-edge resources.',
        link: 'https://www.linkedin.com/posts/elepzia_ai-technology-nvidia-activity-7259224477190746113-HTPe?utm_source=social_share_sheet&utm_medium=member_desktop_web',
    },
    {
        period: '2024',
        description: '🇹🇳 Collaboration with IEEE ESSTHS at IASTAM 2024, organizing workshops on AI and entrepreneurship to inspire future engineers.',
        link: 'https://www.linkedin.com/posts/elepzia_innovation-ai-entrepreneurship-activity-7254900913792831491-UsJN?utm_source=social_share_sheet&utm_medium=member_desktop_web',
    },
    {
        period: '2024',
        description: '🌍 Participation in ADAPT AFRICA BC & Resilience Conference, highlighting our impact on the healthcare industry with our EPISAFE solution.',
        link: 'https://www.linkedin.com/posts/elepzia_elepzia-healthcare-africa-activity-7255653134759247873-ncnN?utm_source=social_share_sheet&utm_medium=member_desktop_web',
    },
    {
        period: '2024',
        description: '🎥 Presentation of Episafe on Dclick, a national TV show, with medical experts to raise awareness and collect funds for clinical trials.',
        link: 'https://www.linkedin.com/posts/elepzia_elepzia-episafe-healthcareinnovation-activity-7262425383403196417-1SK1?utm_source=social_share_sheet&utm_medium=member_desktop_web',
    },

];

const RoadmapSection = () => {
    const roadmapRef = useRef(null);
    const roadmapInView = useInView(roadmapRef, { once: true, margin: '-100px' });

    return (
        <SectionWrapper id="roadmap" className="py-20 mt-24 w-full flex justify-center">
            <RoadmapProvider>
                <div className="max-w-7xl w-full px-4 md:px-6 lg:px-8 mx-auto relative">
                    {/* Section Title */}
                    <motion.div
                        ref={roadmapRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center gap-6"
                    >
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-5xl lg:text-[56px] font-normal">
                            Milestones
                        </h2>
                    </motion.div>

                    {/* Vertical Timeline */}
                    <div className="relative mt-16">
                        {/* Timeline Line for Desktop */}
                        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#F38E79] to-[#FFEB9E]"></div>

                        {/* Timeline Line for Mobile */}
                        <div className="sm:hidden absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#F38E79] to-[#FFEB9E]"></div>

                        <div className="flex flex-col items-start sm:items-center gap-12">
                            {roadmapData.map((item, index) => (
                                <RoadmapItem
                                    key={index}
                                    period={item.period}
                                    description={item.description}
                                    link={item.link}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </RoadmapProvider>
        </SectionWrapper>
    );
};

export default RoadmapSection;
