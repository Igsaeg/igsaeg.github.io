import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

export { gsap, CustomEase };
export const triggerAt = "top 70%";

const createSplit = (el) => new SplitText(el, { type: "lines,chars,words", mask: "lines" });

export function revealText(el, { type, scroll, ...opts }) {
    const split = createSplit(el);
    
    return gsap.from(split[type], {
        yPercent: 100,
        ease: "power3.out",
        ...opts,
        ...(scroll ? { scrollTrigger: { trigger: el, start: triggerAt } } : {}),
        onComplete: () => split.revert(),
    });
};