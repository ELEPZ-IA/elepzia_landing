const ExploreProjectSection = () => {
    return (
        <div className="flex flex-col justify-start items-center gap-6 h-[316px] md:h-auto p-4 mt-60 relative overflow-hidden">
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
                <div className="w-[162px] h-[175px] relative">
                    <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-[#ffeb9e] rounded-full shadow-inner">
                        <div className="w-[23.33px] h-[6.74px] left-[0.08px] top-[11.92px] absolute origin-top-left rotate-[-37.14deg] bg-white rounded-full blur-md" />
                        <div className="w-[23.33px] h-[6.74px] left-[54.25px] top-[31.04px] absolute origin-top-left rotate-[-119.61deg] bg-white rounded-full blur-md" />
                        <div className="w-[23.33px] h-[6.74px] left-[30.95px] top-[41.98px] absolute origin-top-left rotate-[-145.02deg] bg-white rounded-full blur-lg" />
                    </div>
                    <div className="w-20 h-20 left-[82px] top-[95px] absolute bg-[#f38e79] rounded-full shadow-inner">
                        <div className="w-[37.33px] h-[10.78px] left-[0.13px] top-[19.08px] absolute origin-top-left rotate-[-37.14deg] bg-[#ffeb9e] rounded-full blur-lg" />
                        <div className="w-[37.33px] h-[10.78px] left-[86.81px] top-[49.66px] absolute origin-top-left rotate-[-119.61deg] bg-[#ffeb9e] rounded-full blur-lg" />
                        <div className="w-[37.33px] h-[10.78px] left-[49.52px] top-[67.17px] absolute origin-top-left rotate-[-145.02deg] bg-[#ffeb9e] rounded-full blur-xl" />
                    </div>
                </div>
            </div>
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                <div className="w-[162px] h-[175px] relative">
                    <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-[#ffeb9e] rounded-full shadow-inner">
                        <div className="w-[23.33px] h-[6.74px] left-[0.08px] top-[11.92px] absolute origin-top-left rotate-[-37.14deg] bg-white rounded-full blur-md" />
                        <div className="w-[23.33px] h-[6.74px] left-[54.25px] top-[31.04px] absolute origin-top-left rotate-[-119.61deg] bg-white rounded-full blur-md" />
                        <div className="w-[23.33px] h-[6.74px] left-[30.95px] top-[41.98px] absolute origin-top-left rotate-[-145.02deg] bg-white rounded-full blur-lg" />
                    </div>
                    <div className="w-20 h-20 left-[82px] top-[95px] absolute bg-[#f38e79] rounded-full shadow-inner">
                        <div className="w-[37.33px] h-[10.78px] left-[0.13px] top-[19.08px] absolute origin-top-left rotate-[-37.14deg] bg-[#ffeb9e] rounded-full blur-lg" />
                        <div className="w-[37.33px] h-[10.78px] left-[86.81px] top-[49.66px] absolute origin-top-left rotate-[-119.61deg] bg-[#ffeb9e] rounded-full blur-lg" />
                        <div className="w-[37.33px] h-[10.78px] left-[49.52px] top-[67.17px] absolute origin-top-left rotate-[-145.02deg] bg-[#ffeb9e] rounded-full blur-xl" />
                    </div>
                </div>
            </div>
            <div className="px-8 py-3 bg-gradient-to-r from-white/5 to-white/2 rounded-[88px] border border-white/10 backdrop-blur-lg flex justify-center items-center gap-2.5">
                <div className="text-center text-white text-base font-light font-['Outfit']">Explore Our Projects: Episafe</div>
            </div>
            <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-[56px] font-normal font-['Outfit'] leading-tight md:leading-[64px]">
                Episafe: Smart Seizure Prediction <br className="hidden md:block"/> & Care
            </div>
            <div className="text-center text-[#d1d1d6] text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed md:leading-loose">
                Episafe is revolutionizing epilepsy care with advanced AI and IoT solutions. Designed for <br className="hidden md:block"/> safety, independence, and peace of mind, Episafe empowers both patients <br className="hidden md:block"/> and caregivers.
            </div>
        </div>
    );
};

export default ExploreProjectSection;
