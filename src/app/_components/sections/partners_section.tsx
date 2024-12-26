const PartnersSection = () => {
    return (
        <div className='relative'>
            <div className='absolute -top-10 left-0 w-full h-[500px] bg-[url("/images/donwer.svg")] bg-cover  z-[999999999999]'></div>
            <div className='relative -top-20 z-10 flex flex-col justify-start items-center gap-3'>
                <div className="text-center text-white text-2xl font-normal font-['Outfit'] leading-normal">
                    Our Partners
                </div>
                <div className="opacity-80 text-center text-white text-lg font-normal font-['Outfit'] leading-7">
                    We are proud to collaborate with leading institutions
                </div>
            </div>
            <div className='relative z-10 flex flex-col justify-center items-center gap-8'>
                <div className='flex flex-wrap justify-center items-center gap-8'>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        Charles Nicolles
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        MIT
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        Nvidia Inception
                    </div>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-8'>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        Fab Lab
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        Winwin
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-[40px] font-normal font-['Outfit'] leading-[48px]">
                        Orange
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersSection;
