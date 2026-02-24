"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Artificial Intelligence",
    description: "Accelerate your team with collaborative AI workflows",
    image: "https://framerusercontent.com/images/qktnranaPpFcKWyM60NJD9VvI.png?width=1920&height=1080",
    href: "#",
  },
  {
    title: "Data Solutions",
    description: "Empower decisions with unified, actionable data",
    image: "https://framerusercontent.com/images/Yuc5oFlUGxrhIlp7DDzijhyh3k.png?width=3840&height=2160",
    href: "#",
  },
  {
    title: "Process Automation",
    description: "Move quickly from ideas to structured plans and execution",
    image: "https://framerusercontent.com/images/jEBfMRQ9CEbwCHlIsSZ8arK5Jt0.png?width=3840&height=2160",
    href: "#",
  },
  {
    title: "Generative AI Services",
    description: "Automate key processes with scalable, repeatable workflows",
    image: "https://framerusercontent.com/images/UE6PN5AkKpZr9wiHr9XmecEwBe8.png?width=3840&height=2160",
    href: "#",
  },
  {
    title: "Business Intelligence",
    description: "Secure and scalable insights on a platform you can trust",
    image: "https://framerusercontent.com/images/t6nXozqt1IQNpt1ZoXulrivOM.png?width=3840&height=2160",
    href: "#",
  },
  {
    title: "Application Development",
    description: "Connects with your stack so teams stay aligned and productive",
    image: "https://framerusercontent.com/images/wIqLXdrx2cUUItCcoSjzFjBMQ.png?width=1921&height=1080",
    href: "#",
  },
];

export default function SolutionsShowcaseSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-(--background) z-10 border-0">
      <div className="w-full">
        <div className="px-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black"
          >
            Our Services
          </motion.h2>
        </div>

        {/* Scroll track - Framer-style horizontal scroll */}
        <div className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
          <div className="flex gap-6 pl-6 pr-6 pb-4 min-w-max" style={{ borderBottomWidth: 0 }}>
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="snap-center shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
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
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[rgb(28,28,30)] border border-[rgb(28,28,30)] hover:bg-[rgb(40,40,42)] transition-colors"
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

            {/* End spacer - Framer-style border card */}
            <div
              className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[320px] sm:h-[360px] md:h-[382px] rounded-xl border border-gray-200 bg-white"
              style={{ opacity: 1 }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
