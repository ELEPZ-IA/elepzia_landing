import { useEffect, useState } from 'react';

export const useMouseRotation = (ref: React.RefObject<HTMLElement>) => {
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate angle between mouse and center
            const angleRad = Math.atan2(
                e.clientY - centerY,
                e.clientX - centerX
            );
            const angleDeg = (angleRad * 180) / Math.PI;

            setAngle(angleDeg);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [ref]);

    return angle;
};
