'use client';

import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { Globe } from '@heroicons/react/20/solid';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useTransition } from 'react';

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const t = useTranslations('nav');

    function handleLanguageChange(value: string) {
        const newLocale = value as Locale;
        startTransition(() => {
            setUserLocale(newLocale);
            setIsOpen(false);
        });
    }

    return (
        <div className='relative'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='p-2 bg-[#007bff] rounded-full shadow-inner border-2 border-[#007bff]/30 flex items-center justify-center transition-transform transform hover:scale-105 active:scale-95'
                disabled={isPending}>
                <GlobeIcon
                    className={`h-6 w-6 text-white ${isPending ? 'opacity-50' : ''}`}
                />
            </button>

            {isOpen && (
                <>
                    <div
                        className='fixed inset-0 z-40'
                        onClick={() => setIsOpen(false)}
                    />
                    <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50'>
                        {['en', 'fr', 'ar'].map(lang => (
                            <button
                                key={lang}
                                onClick={() => handleLanguageChange(lang)}
                                className={`w-full px-4 py-2 text-left text-sm ${
                                    locale === lang
                                        ? 'bg-[#007bff] text-white'
                                        : 'text-white/80 hover:bg-white/5'
                                }`}
                                disabled={isPending}>
                                {lang === 'en'
                                    ? t('english')
                                    : lang === 'fr'
                                      ? t('french')
                                      : t('arabic')}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
