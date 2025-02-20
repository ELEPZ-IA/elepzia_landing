import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Outfit } from 'next/font/google';
import { Footer } from './_components/layout/footer';
import Navbar from './_components/layout/navbar';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
    title: 'Elepzia',
    description: 'Innovating for a Better Future'
};

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${outfit.className}`}>
                <NextIntlClientProvider messages={messages}>
                    <div className='min-h-screen bg-[#1c1c1e] flex flex-col '>
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
