import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const triggerAt = "top 65%";

export function createSplit(el) {
    return new SplitText(el, {
        type: "lines,chars,words",
        mask: "lines",
    });
}

export { gsap };