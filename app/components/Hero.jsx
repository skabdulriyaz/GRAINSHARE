import React from "react";
import styles from "./Hero.module.css";

export default function Hero({ title, subtitle, cta }) {
  return (
    <section className={styles.hero}>
      <div className="max-w-6xl mx-auto px-6 py-32 flex items-center justify-between gap-12">
        <div className="flex-1">
          <h1 style={{
            fontSize: '3.75rem',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '32px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            {title}
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '48px',
            lineHeight: 1.6,
            maxWidth: '32rem'
          }}>{subtitle}</p>
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
        <div className="flex-1 hidden sm:block">
          <div className={styles.imageContainer}>
            <img src="/threekid.jpg" alt="Three children eating" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
