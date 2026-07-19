"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms for sequenced reveals */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Fades and lifts children into view once, on scroll intersection.
 * Falls back to visible immediately when reduced motion is preferred
 * (handled in CSS) or IntersectionObserver is unavailable.
 */
type RevealState = "idle" | "armed" | "visible";

export default function Reveal({
  children,
  delay = 0,
  as,
  className = "",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  // "idle": server render + pre-hydration — content is visible, no animation.
  // "armed": off-screen on mount — hidden, waiting to animate in.
  // "visible": revealed. Content is never hidden unless we can guarantee a reveal.
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    // Already in view on mount (e.g. above the fold): reveal immediately,
    // never arm — avoids a hide-then-show flash on first paint.
    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      setState("visible");
      return;
    }

    // Off-screen: safe to hide, then animate in on intersection.
    setState("armed");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stateClass =
    state === "armed" ? "reveal-armed" : state === "visible" ? "is-visible" : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${stateClass} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
