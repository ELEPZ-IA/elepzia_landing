import Image from 'next/image';

const Circle = ({ className }: { className: string }) => (
    <div
        className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full border border-[#a2a2a2]/20 ${className}`}
    />
);

const TextBlock = ({
    children,
    isEnd = false
}: {
    children: React.ReactNode;
    isEnd?: boolean;
}) => (
    <p
        className={`text-white text-left md:text-justify px-2 sm:px-4 md:px-10 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed w-full md:w-1/2 ${
            isEnd ? 'md:self-end' : ''
        }`}>
        {children}
    </p>
);

const WhyChooseUs = () => {
    return (
        <section className='container mx-auto px-2 sm:px-4 py-6 sm:py-10 md:py-20 relative'>
            <div className='flex flex-col gap-4 sm:gap-6 md:gap-10'>
                <TextBlock>
                    At Elepz'ia, our mission is to harness the power of
                    technology to create groundbreaking solutions. Our team is
                    dedicated to crafting tools that not only solve challenges
                    but also inspire a better tomorrow
                </TextBlock>

                <TextBlock isEnd>
                    Our clients trust us to deliver exceptional results that
                    transform their vision into reality. Stay tuned for their
                    inspiring stories and feedback.
                </TextBlock>
                <TextBlock>
                    Designed with precision and built with care, our solutions
                    deliver a seamless blend of performance and innovation. From
                    AI-driven insights to cutting-edge wearables, we redefine
                    what's possible
                </TextBlock>

                <TextBlock isEnd>
                    Ready to take the next step in innovation? Let us help you
                    bring your ideas to life with our expertise and creativity.
                    Together, we can shape the future.
                </TextBlock>

                {/* Decorative Circles - Desktop */}
                <div className='absolute inset-0 hidden md:block'>
                    <Circle className='absolute right-[20%] top-[30%] opacity-50 md:opacity-100' />
                    <Circle className='absolute left-[20%] top-[30%] opacity-50 md:opacity-100' />
                    <Circle className='absolute left-[30%] top-[5%] opacity-50 md:opacity-100' />
                    <Circle className='absolute right-[30%] top-[5%] opacity-50 md:opacity-100' />
                    <Circle className='absolute left-[30%] bottom-[5%] opacity-50 md:opacity-100' />
                    <Circle className='absolute right-[30%] bottom-[5%] opacity-50 md:opacity-100' />

                    <div className='absolute left-2/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full border border-[#a2a2a2]/40 overflow-hidden flex items-center justify-center'>
                        <Image
                            src='/images/logo.png'
                            alt='Feature'
                            width={200}
                            height={352}
                            className='w-[150px] md:w-[180px] lg:w-[200px] object-contain'
                            priority
                        />
                    </div>
                </div>

                {/* Mobile Circles */}
                <div className='md:hidden absolute inset-0 opacity-20'>
                    {/* <Circle className='absolute -right-10 top-[20%]' /> */}
                    {/* <Circle className='absolute -left-10 top-[50%]' /> */}
                    {/* <Circle className='absolute -right-10 bottom-[10%]' /> */}

                    <div className='absolute left-2/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full border border-[#a2a2a2]/40 overflow-hidden flex items-center justify-center'>
                        <Image
                            src='/images/logo.png'
                            alt='Feature'
                            width={100}
                            height={176}
                            className='w-[80px] sm:w-[100px] object-contain'
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
