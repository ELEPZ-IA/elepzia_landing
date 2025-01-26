import { ContactSection } from './_components/sections/contact_section';
import EpisafeSection from './_components/sections/episafe_section';
import ExpertsSection from './_components/sections/ExpertsSection';
import { HeroSection } from './_components/sections/hero_section';
import PartnersSection from './_components/sections/partners_section';
import RoadmapSection from './_components/sections/RoadmapSection';
import TeamSection from './_components/sections/TeamSection';
import WhyChooseUs from './_components/sections/why_choose_us';
export default function Home() {
    return (
        <>
            <HeroSection />
            <PartnersSection />
            {/* <h1 className='text-[77px] font-bold leading-[88px] text-center mt-[200px] text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8]'>Explore Our Projects</h1> */}
            <EpisafeSection /> 
            {/* <HackiniSection /> */}
            <RoadmapSection />
            <TeamSection />
            <ExpertsSection />
            <WhyChooseUs />
            <ContactSection />
        </>
    );
}
