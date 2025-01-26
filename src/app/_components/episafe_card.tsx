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
        <div className='flex flex-col gap-16 items-center px-12 py-12 bg-[#202021]'>
            <div className='flex flex-col gap-4 items-center'>
                <h2 className='text-2xl font-bold text-center'>{title}</h2>
                <p className='text-center'>{description}</p>
            </div>
            <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className='rounded-lg'
            />
        </div>
    );
}
