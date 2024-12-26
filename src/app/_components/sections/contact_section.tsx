'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section className='relative w-full max-w-[40%] mx-auto px-4 py-16 flex flex-col items-center'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-[#d37604] rounded-full blur-[100px] opacity-20' />
                <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#6ecab0] rounded-full blur-[100px] opacity-20' />
            </div>
            <span className='inline-block px-6 py-2 bg-white/5 rounded-full text-white/80 mb-4'>
                Contact
            </span>
            <div className='relative bg-[#1c1c1e]/50 rounded-2xl border-2 border-[#a2a2a2]/10 backdrop-blur-xl p-8 md:p-10'>
                <div className='text-center mb-8 flex flex-col gap-4 items-center'>
                    <div className='inline-flex items-center gap-4'>
                        <Image src='/icons/email.svg' width={25} height={25} alt='email-icon' />
                        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#F38E79] via-[#FFEB9E] to-[#B2CFF8] text-2xl font-normal'>
                            Let's Innovate Together
                        </h2>
                    </div>
                    <p className='text-white/80'>
                        Contact us to learn how we can bring your ideas to life
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='space-y-2'>
                            <label className='text-white/80 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                placeholder='Enter Full name'
                                className='w-full px-5 py-3 bg-white/5 rounded-xl border-2 border-[#a2a2a2]/10 backdrop-blur-md text-white'
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-white/80 text-sm'>
                                Email
                            </label>
                            <input
                                type='email'
                                placeholder='Enter Email address'
                                className='w-full px-5 py-3 bg-white/5 rounded-xl border-2 border-[#a2a2a2]/10 backdrop-blur-md text-white'
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <label className='text-white/80 text-sm'>Message</label>
                        <textarea
                            placeholder='Enter message'
                            className='w-full px-5 py-3 bg-white/5 rounded-xl border-2 border-[#a2a2a2]/10 backdrop-blur-md text-white h-40 resize-none'
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
                        className='w-full px-10 py-4 bg-[#2d7afe] rounded-xl shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.25)] border-2 border-[#2d7afe]/30 text-white transition-all hover:bg-[#2d7afe]/90'>
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};
