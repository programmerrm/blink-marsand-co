"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

type Props = {
    children: ReactNode;
};

export default function SmoothScroll({ children }: Props) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
            duration: 1.5,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
