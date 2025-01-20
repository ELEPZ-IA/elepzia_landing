'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import { SectionWrapper } from '../SectionWrapper';

export const ContactSection = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const scrollY = window.scrollY;
            mouseX.set(e.clientX - 100);
            mouseY.set(e.clientY + scrollY - 100);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <SectionWrapper
            id='contact'
            className='relative overflow-x-hidden mt-6 sm:mt-10 z-30 '>
            <motion.div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    x: springX
                }}
                className='w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full bg-gradient-to-r from-[#FFEB9E]/50 via-[#FFEB9E]/50 to-[#F38E79]/50 blur-[10px] pointer-events-none z-0 mt-10'
            />
            <div className='max-w-7xl relative w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[40%] mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col items-center z-10'>
                <span className='inline-block px-4 sm:px-6 py-2 bg-white/5 rounded-full text-white/80 text-sm sm:text-base mb-4'>
                    Contact
                </span>
                <div className='relative w-full bg-[#1c1c1e]/50 rounded-2xl border-2 border-[#a2a2a2]/10 backdrop-blur-xl p-4 sm:p-6 md:p-8 lg:p-10'>
                    <div className='absolute inset-0 overflow-hidden'>
                        <div className='absolute top-0 left-0 w-40 h-40 bg-[#d37604]/20 rounded-full blur-[100px]' />
                        <div className='absolute top-0 right-0 w-40 h-40 bg-[#6ecab0]/20 rounded-full blur-[100px]' />
                    </div>
                    <div className='text-center mb-6 sm:mb-8 flex flex-col gap-3 sm:gap-4 items-center'>
                        <div className='inline-flex items-center gap-2 sm:gap-4'>
                            <Image
                                src='/icons/email.svg'
                                width={20}
                                height={20}
                                alt='email-icon'
                                className='w-5 sm:w-6'
                            />
                            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-xl sm:text-2xl font-normal'>
                                Let's Innovate Together
                            </h2>
                        </div>
                        <p className='text-white/80 text-sm sm:text-base'>
                            Contact us to learn how we can bring your ideas to
                            life
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className='space-y-4 sm:space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                            <div className='space-y-1 sm:space-y-2'>
                                <label className='text-white/80 text-xs sm:text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter Full name'
                                    className='w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-white/5 rounded-xl border-2 border-[#a2a2a2]/10 backdrop-blur-md text-white text-sm sm:text-base'
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value
                                        })
                                    }
                                />
                            </div>
                            <div className='space-y-1 sm:space-y-2'>
                                <label className='text-white/80 text-xs sm:text-sm'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    placeholder='Enter Email address'
                                    className='w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-white/5 rounded-xl border-2 border-[#a2a2a2]/10 backdrop-blur-md text-white text-sm sm:text-base'
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className='space-y-1 sm:space-y-2'>
                            <label className='text-white/80 text-xs sm:text-sm'>
                                Message
                            </label>
                            <textarea
                                placeholder='Enter message'
                                className='w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-white/5 rounded-xl border-2 border-[#a2a2a2]/10 backdrop-blur-md text-white h-32 sm:h-40 resize-none text-sm sm:text-base'
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value
                                    })
                                }
                            />
                        </div>

                        <button
                            type='submit'
                            className='w-full px-8 sm:px-10 py-3 sm:py-4 bg-[#2d7afe] rounded-xl shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.25)] border-2 border-[#2d7afe]/30 text-white text-sm sm:text-base transition-all hover:bg-[#2d7afe]/90'>
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};
