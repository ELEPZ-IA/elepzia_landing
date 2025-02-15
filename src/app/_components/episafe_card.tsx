import Image from 'next/image';

type Props = {
    title: string;
    description: string;
    image: string;
};

export default function EpisafeCard({
    title,
    description,
    image
}: Readonly<Props>) {
    return (
        <div className='flex flex-col gap-16 items-center justify-between px-12 py-12 bg-[#202021]'>
            <div className='flex flex-col gap-4 items-center'>
                <h2 className='text-4xl text-center gradiant-title'>{title}</h2>
                <p className='text-center text-white/50'>{description}</p>
            </div>
            <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className='rounded-lg'
            />
        </div>
    );
}
