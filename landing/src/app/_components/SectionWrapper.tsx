'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const SectionWrapper = ({
    children,
    className = '',
    id = ''
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-100px'
    });

    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.8,
                ease: 'easeOut'
            }}
            className={className}>
            {children}
        </motion.section>
    );
};
