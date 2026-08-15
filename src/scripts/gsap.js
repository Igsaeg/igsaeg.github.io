import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export { gsap };
export const triggerAt = "top 70%";

const createSplit = (el) => new SplitText(el, { type: "lines,chars,words", mask: "lines" });

export function revealText(el, { type, scroll, customTrigger, ...opts }) {
    const split = createSplit(el);
    
    return gsap.from(split[type], {
        yPercent: 100,
        ease: "power2.out",
        ...opts,
        ...(scroll ? {
            scrollTrigger: {
                trigger: (customTrigger ? customTrigger : el),
                start: triggerAt,
            }
        } : {}),
        onComplete: () => split.revert()
    });
}