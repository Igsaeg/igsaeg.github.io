import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

export { gsap, CustomEase };
export const triggerAt = "top 70%";

export function createSplit(el) {
    return new SplitText(el, {
        type: "lines,chars,words",
        mask: "lines",
    });
}

export function revealText(el, { type = "chars", ...opts } = {}) {
    const split = createSplit(el);
    const targets = split[type];
    
    return gsap.from(targets, {
        yPercent: 100,
        ...opts,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: triggerAt },
        onComplete: () => split.revert(),
    });
}