import { Footer } from './_components/footer';
import Navbar from './_components/navbar';
import { ContactSection } from './_components/sections/contact_section';
import EpisafeSection from './_components/sections/episafe_section';
import HackiniSection from './_components/sections/hackini_section';
import { HeroSection } from './_components/sections/hero_section';
import PartnersSection from './_components/sections/partners_section';
import WhyChooseUs from './_components/sections/why_choose_us';
import RoadmapSection from './_components/sections/RoadmapSection';
import TeamSection from './_components/sections/TeamSection';
import ExpertsSection from './_components/sections/ExpertsSection';
export default function Home() {
    return (
        <div className='min-h-screen bg-[#1c1c1e] flex flex-col '>
            <Navbar />
            <HeroSection />
            <PartnersSection />
            <EpisafeSection />
            <RoadmapSection />
            <TeamSection  />
            <ExpertsSection />

            <WhyChooseUs />
            <ContactSection />
            <Footer />
        </div>
    );
}
