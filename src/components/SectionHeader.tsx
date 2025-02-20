import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
    }
};

type Props = {
    title: string;
    description: string;
    tag: string;
};
export default function SectionHeader({
    title,
    description,
    tag
}: Readonly<Props>) {
    return (
        <div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
                className='flex flex-col justify-start items-center gap-6 h-[316px] md:h-auto p-4 px-6 sm:px-8 md:px-12 relative overflow-hidden  w-full'>
                <div className='absolute left-10 top-1/2 transform -translate-y-1/2 hidden md:block'>
                    <div className='w-[162px] h-[175px] relative'>
                        <motion.div
                            animate={{
                                y: [200, 0, 200]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className='w-[50px] h-[50px] left-0 top-0 absolute bg-[#ffeb9e] rounded-full shadow-inner'>
                            <div className='w-[23.33px] h-[6.74px] left-[0.08px] top-[11.92px] absolute origin-top-left rotate-[-37.14deg] bg-white rounded-full blur-md' />
                            <div className='w-[23.33px] h-[6.74px] left-[54.25px] top-[31.04px] absolute origin-top-left rotate-[-119.61deg] bg-white rounded-full blur-md' />
                            <div className='w-[23.33px] h-[6.74px] left-[30.95px] top-[41.98px] absolute origin-top-left rotate-[-145.02deg] bg-white rounded-full blur-lg' />
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [-100, 0, -100]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className='w-20 h-20 left-[82px] top-[95px] absolute bg-[#f38e79] rounded-full shadow-inner'>
                            <div className='w-[37.33px] h-[10.78px] left-[0.13px] top-[19.08px] absolute origin-top-left rotate-[-37.14deg] bg-[#ffeb9e] rounded-full blur-lg' />
                            <div className='w-[37.33px] h-[10.78px] left-[86.81px] top-[49.66px] absolute origin-top-left rotate-[-119.61deg] bg-[#ffeb9e] rounded-full blur-lg' />
                            <div className='w-[37.33px] h-[10.78px] left-[49.52px] top-[67.17px] absolute origin-top-left rotate-[-145.02deg] bg-[#ffeb9e] rounded-full blur-xl' />
                        </motion.div>
                    </div>
                </div>
                <div className='absolute right-10 top-1/2 transform -translate-y-1/2 hidden md:block'>
                    <div className='w-[162px] h-[175px] relative'>
                        <motion.div
                            animate={{
                                y: [200, 0, 200]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className='w-[50px] h-[50px] left-0 top-0 absolute bg-[#ffeb9e] rounded-full shadow-inner'>
                            <div className='w-[23.33px] h-[6.74px] left-[0.08px] top-[11.92px] absolute origin-top-left rotate-[-37.14deg] bg-white rounded-full blur-md' />
                            <div className='w-[23.33px] h-[6.74px] left-[54.25px] top-[31.04px] absolute origin-top-left rotate-[-119.61deg] bg-white rounded-full blur-md' />
                            <div className='w-[23.33px] h-[6.74px] left-[30.95px] top-[41.98px] absolute origin-top-left rotate-[-145.02deg] bg-white rounded-full blur-lg' />
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [-100, 0, -100]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className='w-20 h-20 left-[82px] top-[95px] absolute bg-[#f38e79] rounded-full shadow-inner'>
                            <div className='w-[37.33px] h-[10.78px] left-[0.13px] top-[19.08px] absolute origin-top-left rotate-[-37.14deg] bg-[#ffeb9e] rounded-full blur-lg' />
                            <div className='w-[37.33px] h-[10.78px] left-[86.81px] top-[49.66px] absolute origin-top-left rotate-[-119.61deg] bg-[#ffeb9e] rounded-full blur-lg' />
                            <div className='w-[37.33px] h-[10.78px] left-[49.52px] top-[67.17px] absolute origin-top-left rotate-[-145.02deg] bg-[#ffeb9e] rounded-full blur-xl' />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='px-8 py-3 bg-gradient-to-r from-white/5 to-white/2 rounded-[88px] border border-white/10 backdrop-blur-lg'>
                    <div className="text-center text-white text-base font-light font-['Outfit']">
                        {tag}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-4xl md:text-[56px] font-normal font-['Outfit'] leading-tight md:leading-[64px]">
                    {title}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-[#d1d1d6] text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed md:leading-loose max-w-4xl mx-auto">
                    {description}
                </motion.div>
            </motion.div>
        </div>
    );
}
