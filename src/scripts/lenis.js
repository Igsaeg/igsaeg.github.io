import Lenis from "lenis";

export const lenis = new Lenis({
    duration: 1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);