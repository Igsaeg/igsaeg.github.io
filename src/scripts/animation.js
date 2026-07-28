import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const triggerAt = "top 70%";

gsap.registerPlugin(SplitText, ScrollTrigger);

document.fonts.ready.then(() => {
    document.querySelectorAll(".char-slow").forEach((el) => {
        const split = new SplitText(el, {
            type: "lines,chars",
            mask: "lines",
        });

        gsap.from(split.chars, {
            yPercent: 100,
            duration: 1,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: triggerAt,
            },
        });
    });

    document.querySelectorAll(".char-fast").forEach((el) => {
        const split = new SplitText(el, {
            type: "lines,chars",
            mask: "lines",
        });

        gsap.from(split.chars, {
            yPercent: 100,
            duration: 0.8,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: triggerAt,
            },
        });
    });

    document.querySelectorAll(".line-slow").forEach((el) => {
        const split = new SplitText(el, {
            type: "lines",
            mask: "lines",
        });

        gsap.from(split.lines, {
            yPercent: 100,
            duration: 1.1,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: triggerAt,
            },
            onComplete: () => split.revert()
        });
    });

    document.querySelectorAll(".line-fast").forEach((el) => {
        const split = new SplitText(el, {
            type: "lines",
            mask: "lines",
        });

        gsap.from(split.lines, {
            yPercent: 100,
            duration: 0.8,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: triggerAt,
            },
            onComplete: () => split.revert()
        });
    });
});