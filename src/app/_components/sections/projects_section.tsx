import Image from 'next/image';

const ProjectsSection = () => {
    const features = [
        {
            image: '/icons/file.svg',
            title: 'Discover Hackathons',
            description:
                'Find national and global opportunities in one centralized platform.'
        },
        {
            image: '/icons/leaderboard.svg',
            title: 'Climb the Leaderboard',
            description:
                'Earn points for participation and performance, with exclusive bi-monthly rewards.'
        },
        {
            image: '/icons/unlock.svg',
            title: 'Unlock Rewards',
            description: 'Compete for cash prizes, internships, and more'
        },
        {
            image: '/icons/token.svg',
            title: 'Build Connections',
            description:
                'Join teams and collaborate with like-minded innovators.'
        },
        {
            image: '/icons/people.svg',
            title: 'Seamless Participation',
            description: 'Register easily for events tailored to your goals.'
        }
    ];

    return (
        <section className='py-20 mt-24 relative'>
            <Image
                src='/images/left-circle.svg'
                alt='Right Circle'
                height={600}
                width={600}
                className='absolute -left-0 top-0'
            />
             <Image
                src='/images/right-circle.svg'
                alt='Right Circle'
                height={600}
                width={600}
                className='absolute -right-0 top-0 w-1/4'
            />
            {/* <Image
                src='/images/left-circle.svg'
                alt='Hackini Logo'
                height={600}
                width={600}
                className='absolute -left-80 top-0'
            /> */}
            {/* <Image
                src='/images/right-circle.svg'
                alt='Hackini Logo'
                height={800}
                width={800}
                className='absolute -right-40 top-0'
            /> */}
            <div className='flex flex-col items-center gap-20 max-w-7xl mx-auto'>
                <div className='flex flex-col items-center gap-6 text-center'>
                    <div className='px-8 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm'>
                        <span className='text-white font-light'>
                            Explore Our Projects: Hackini
                        </span>
                    </div>

                    <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-5xl lg:text-[56px] font-normal'>
                        Hackini: Your Gateway to Innovation Through Hackathons
                    </h2>
                    <p className='text-[#d1d1d6] text-lg md:text-xl max-w-3xl'>
                        Hackini connects students, innovators, and organizations
                        with hackathons worldwide, creating a dynamic ecosystem
                        for creativity and problem-solving.
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-8 w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {features.slice(0, 2).map((feature, index) => (
                            <div
                                key={index}
                                className='relative p-8 rounded-2xl border border-[#a2a2a2]/20 bg-white/[2%] backdrop-blur-sm
                          flex flex-col items-center justify-center gap-4 min-h-[300px]
                          hover:border-[#f38e79]/20 transition-colors'>
                                <Image
                                    src={feature.image}
                                    alt='Feature Icon'
                                    width={100}
                                    height={100}
                                />
                                <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-2xl md:text-3xl font-normal text-center'>
                                    {feature.title}
                                </h3>
                                <p className='text-[#d1d1d6] text-lg md:text-xl text-center'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {features.slice(2, 5).map((feature, index) => (
                            <div
                                key={index + 2}
                                className='relative p-8 rounded-2xl border border-[#a2a2a2]/20 bg-white/[2%] backdrop-blur-sm flex flex-col items-center justify-center gap-4 min-h-[300px] hover:border-[#f38e79]/20 transition-colors'>
                                <Image
                                    src={feature.image}
                                    alt='Feature Icon'
                                    width={100}
                                    height={100}
                                />
                                <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-2xl md:text-3xl font-normal text-center'>
                                    {feature.title}
                                </h3>
                                <p className='text-[#d1d1d6] text-lg md:text-xl text-center'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
