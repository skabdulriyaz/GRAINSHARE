import React from "react";
import styles from "./Hero.module.css";

export default function Hero({ title, subtitle, cta }) {
  return (
    <section className={styles.hero}>
      <div className="max-w-6xl mx-auto px-6 sm:px-6 py-20 sm:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 w-full md:w-1/2">
          <h1 className="font-black tracking-tight mb-8 text-3xl sm:text-5xl md:text-[3.75rem] leading-tight" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 dark:text-gray-300 light:text-gray-600 mb-12 max-w-xl" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {subtitle}
          </p>
          {cta && (
            <a
              href={cta.href}
              className={styles.ctaBtn}
            >
              {cta.label}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          )}
        </div>
        <div className="w-full md:flex-1">
          <div className={styles.imageContainer}>
            <img src="/threekid.jpg" alt="Three children eating" className={`${styles.heroImage} w-full h-full object-cover`} />
          </div>
        </div>
      </div>
    </section>
  );
}
