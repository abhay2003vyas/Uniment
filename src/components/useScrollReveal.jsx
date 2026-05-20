import { useEffect, useRef } from "react";

/**
 * Attach to a container ref; all children with .ua-reveal / .ua-reveal-left /
 * .ua-reveal-right will animate in when they enter the viewport.
 */
export function useScrollReveal(deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(
      ".ua-reveal, .ua-reveal-left, .ua-reveal-right"
    );

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ua-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach(t => obs.observe(t));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}