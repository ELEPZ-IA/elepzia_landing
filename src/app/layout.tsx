import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Footer } from './_components/footer';
import Navbar from './_components/navbar';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
    title: 'Elepzia',
    description: 'Innovating for a Better Future'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${outfit.className}`}>
                <div className='min-h-screen bg-[#1c1c1e] flex flex-col '>
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
