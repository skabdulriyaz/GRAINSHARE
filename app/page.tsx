'use client';

import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)'
    }}>
      <Hero
        title="Reduce Food Waste"
        subtitle="Coordinate food donations across your community. Help fight hunger and create a sustainable future."
        cta={{ href: "/donate-food", label: "Donate Now" }}
      />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="grid gap-8 sm:grid-cols-3 mb-20">
          <div style={{
            background: 'linear-gradient(135deg, var(--input-bg) 0%, var(--bg-secondary) 100%)',
            padding: '32px',
            borderRadius: '4px',
            border: `1px solid var(--border)`,
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `var(--border)`;
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div className="text-4xl mb-6">🍎</div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px' }}>For Donors</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.5' }}>List surplus food and coordinate pickups with recipient organizations.</p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, var(--input-bg) 0%, var(--bg-secondary) 100%)',
            padding: '32px',
            borderRadius: '4px',
            border: `1px solid var(--border)`,
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `var(--border)`;
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div className="text-4xl mb-6">🤝</div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px' }}>For Recipients</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.5' }}>Request donations and manage distributions to those in need.</p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, var(--input-bg) 0%, var(--bg-secondary) 100%)',
            padding: '32px',
            borderRadius: '4px',
            border: `1px solid var(--border)`,
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `var(--border)`;
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div className="text-4xl mb-6">📊</div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px' }}>For Analysts</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.5' }}>Track trends and generate insights to reduce food waste.</p>
          </div>
        </section>

        <section style={{
          paddingTop: '80px',
          borderTop: `1px solid var(--border)`
        }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '48px', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Why It Matters</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div style={{
              background: 'linear-gradient(135deg, var(--input-bg) 0%, var(--bg-secondary) 100%)',
              padding: '40px',
              borderRadius: '4px',
              border: `1px solid var(--border)`
            }}>
              <div style={{ fontSize: '3.75rem', fontWeight: 900, color: 'var(--accent)', marginBottom: '16px' }}>1.3B</div>
              <p style={{ color: 'var(--text-secondary)' }}>tonnes of food wasted annually worldwide</p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, var(--input-bg) 0%, var(--bg-secondary) 100%)',
              padding: '40px',
              borderRadius: '4px',
              border: `1px solid var(--border)`
            }}>
              <div style={{ fontSize: '3.75rem', fontWeight: 900, color: 'var(--accent)', marginBottom: '16px' }}>828M</div>
              <p style={{ color: 'var(--text-secondary)' }}>people facing hunger globally</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
