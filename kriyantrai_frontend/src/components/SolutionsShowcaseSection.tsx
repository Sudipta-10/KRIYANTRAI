"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "AI",
    description: "Accelerate your team with collaborative AI workflows",
    image: "https://framerusercontent.com/images/qktnranaPpFcKWyM60NJD9VvI.png?width=1920&height=1080",
    href: "https://miro.com/ai/ai-overview",
  },
  {
    title: "Intelligent Canvas",
    description: "Empower teamwork on one, infinite, multiplayer canvas",
    image: "https://framerusercontent.com/images/Yuc5oFlUGxrhIlp7DDzijhyh3k.png?width=3840&height=2160",
    href: "https://miro.com/intelligent-canvas",
  },
  {
    title: "Formats",
    description:
      "Move quickly from ideas to structured plans and work with Docs, Tables, Slides, Diagrams and more",
    image: "https://framerusercontent.com/images/jEBfMRQ9CEbwCHlIsSZ8arK5Jt0.png?width=3840&height=2160",
    href: "https://miro.com/intelligent-canvas/#formats",
  },
  {
    title: "Blueprints",
    description: "Automate key processes and ensure your workflows are scalable, repeatable, and efficient",
    image: "https://framerusercontent.com/images/UE6PN5AkKpZr9wiHr9XmecEwBe8.png?width=3840&height=2160",
    href: "https://miro.com/capabilities/blueprints",
  },
  {
    title: "Enterprise Security & Scale",
    description: "Secure and scalable collaboration on an enterprise-grade platform you can trust",
    image: "https://framerusercontent.com/images/t6nXozqt1IQNpt1ZoXulrivOM.png?width=3840&height=2160",
    href: "https://miro.com/enterprise-security",
  },
  {
    title: "Integrations",
    description: "Connects with 250+ apps so teams stay aligned and productive in one scalable, secure workspace.",
    image: "https://framerusercontent.com/images/wIqLXdrx2cUUItCcoSjzFjBMQ.png?width=1921&height=1080",
    href: "https://miro.com/integrations",
  },
];

export default function SolutionsShowcaseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isStuck, setIsStuck] = useState(false);
  const isStuckRef = useRef(false);
  useEffect(() => {
    isStuckRef.current = isStuck;
  }, [isStuck]);

  // Detect when section is stuck (below navbar) with hysteresis to avoid flicker
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const top = entry.boundingClientRect.top;
        setIsStuck((prev) => {
          if (top <= 66) return true;
          if (top > 72) return false;
          return prev;
        });
      },
      { threshold: [0, 0.01, 1], rootMargin: "-64px 0px 0px 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // When stuck: vertical wheel scrolls horizontal strip; at end/start allow vertical scroll.
  // Attach to section so wheel works whether cursor is over title or cards.
  useEffect(() => {
    const section = sectionRef.current;
    const scrollEl = scrollRef.current;
    if (!section || !scrollEl) return;

    const onWheel = (e: WheelEvent) => {
      if (!isStuckRef.current) return;
      const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
      if (maxScroll <= 0) return;
      const { scrollLeft } = scrollEl;
      const atStart = scrollLeft <= 1;
      const atEnd = scrollLeft >= maxScroll - 1;

      if (e.deltaY < 0) {
        if (atEnd) return;
        e.preventDefault();
        e.stopPropagation();
        scrollEl.scrollLeft = Math.min(scrollEl.scrollLeft - e.deltaY, maxScroll);
      } else {
        if (atStart) return;
        e.preventDefault();
        e.stopPropagation();
        scrollEl.scrollLeft = Math.max(0, scrollEl.scrollLeft - e.deltaY);
      }
    };

    section.addEventListener("wheel", onWheel, { passive: false, capture: true });
    return () => section.removeEventListener("wheel", onWheel, { capture: true } as EventListenerOptions);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sticky top-16 flex flex-col min-h-[calc(100vh-4rem)] pt-0 bg-transparent z-10 border-0"
    >
      <div className="shrink-0 px-6 pt-6 pb-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black"
        >
          Our Services
        </motion.h2>
      </div>

      {/* Full-height horizontal scroll area - flexbox method */}
      <div
        ref={scrollRef}
        className="scrolling-wrapper flex-1 min-h-0 px-6 pb-6 snap-x snap-mandatory"
      >
        <div className="flex gap-6 flex-nowrap items-stretch min-w-max shrink-0 h-full py-2">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="scrolling-card snap-center flex-[0_0_auto] w-[280px] sm:w-[320px] md:w-[360px]"
              style={{ opacity: 1, border: "none", borderRadius: 0 }}
            >
                <div
                  className="relative w-full h-[320px] sm:h-[360px] md:h-[382px] rounded-lg overflow-hidden bg-transparent"
                  style={{ borderRadius: 8, boxShadow: "none" }}
                >
                  {/* Image - absolute fill, rounded inherit */}
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{ borderRadius: "inherit" }}
                  >
                    <img
                      src={service.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="block w-full h-full object-cover object-center"
                      style={{ borderRadius: "inherit" }}
                    />
                  </div>

                  {/* Content overlay - bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-3"
                    style={{ opacity: 1 }}
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold text-black tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-snug text-left">
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-gray-900 bg-white/90 backdrop-blur-sm border border-gray-300 hover:bg-white transition-colors"
                        style={{
                          letterSpacing: "-0.01em",
                          lineHeight: "150%",
                        }}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          {/* End spacer */}
          <div
            className="flex-[0_0_auto] w-[280px] sm:w-[320px] md:w-[360px] rounded-xl border border-gray-200 bg-white"
            style={{ minHeight: 320 }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
