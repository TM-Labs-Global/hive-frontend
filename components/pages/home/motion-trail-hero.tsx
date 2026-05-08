'use client';

import { useEffect, useRef } from 'react';
import { preloadImages } from '@/lib/motion-trail';
import { ImageTrail } from './image-trail-classes';
import './motion-trail.css';

const images = [
    '/images/hero-motion-trail/apple-watch.png',
    '/images/hero-motion-trail/atm-card.png',
    '/images/hero-motion-trail/business-card-mockup.png',
    '/images/hero-motion-trail/fipro-type-pecimen-1png.png',
    '/images/hero-motion-trail/fipro-type-pecimen-2.png',
    '/images/hero-motion-trail/fipro-type-pecimen.png',
    '/images/hero-motion-trail/phone-mockup.png',
    '/images/hero-motion-trail/poster-02.png',
    '/images/hero-motion-trail/poster.png',
    '/images/hero-motion-trail/riple.png',
    '/images/hero-motion-trail/vertical-flag-mockups-for-free.png'
];

interface MotionTrailHeroProps {
    children: React.ReactNode;
}

export default function MotionTrailHero({ children }: MotionTrailHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            preloadImages('.trail-img-inner').then(() => {
                if (containerRef.current) {
                    new ImageTrail(containerRef.current);
                }
            });
        }
    }, []);

    return (
        <div className="trail-container" ref={containerRef}>
            {images.map((src, i) => (
                <div key={i} className="trail-img">
                    <div 
                        className="trail-img-inner" 
                        style={{ backgroundImage: `url(${src})` }}
                    />
                </div>
            ))}
            <div className="trail-content">
                {children}
            </div>
        </div>
    );
}
