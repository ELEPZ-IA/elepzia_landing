'use client';
import { createContext, useContext, useState } from 'react';

interface RoadmapContextType {
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

const RoadmapContext = createContext<RoadmapContextType | null>(null);

export const RoadmapProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <RoadmapContext.Provider value={{ currentIndex, setCurrentIndex }}>
            {children}
        </RoadmapContext.Provider>
    );
};

export const useRoadmap = () => {
    const context = useContext(RoadmapContext);
    if (!context) throw new Error('useRoadmap must be used within RoadmapProvider');
    return context;
};
