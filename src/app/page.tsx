import Navbar from './_components/navbar';
import { ContactSection } from './_components/sections/contact_section';
import ExploreProjectSection from './_components/sections/explore_project_section';
import FeatureSection from './_components/sections/feature_section';
import { Footer } from './_components/sections/footer';
import { HeroSection } from './_components/sections/hero_section';
import PartnersSection from './_components/sections/partners_section';
import ProjectsSection from './_components/sections/projects_section';
import WhyChooseUs from './_components/sections/why_choose_us';

export default function Home() {
    return (
        <div className='min-h-screen bg-[#1c1c1e] flex flex-col '>
            <Navbar />
            <HeroSection />
            <PartnersSection />
            <ExploreProjectSection />
            <FeatureSection />
            <ProjectsSection />
            <WhyChooseUs />
            <ContactSection />
            <Footer />
        </div>
    );
}
