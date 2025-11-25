"use client";

'use client';

import React from "react";

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      borderTop: `1px solid var(--border)`,
      backgroundColor: 'var(--bg-primary)',
      padding: '64px 0',
      color: 'var(--text-secondary)',
      transition: 'all 0.3s ease'
    }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 style={{
              fontWeight: 'bold',
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px'
            }}>Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/home" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Home</a></li>
              <li><a href="/how-it-works" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>How It Works</a></li>
              <li><a href="/donate-food" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Donate Food</a></li>
              <li><a href="/request-food" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Request Food</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{
              fontWeight: 'bold',
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px'
            }}>Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Contact</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>FAQ</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{
              fontWeight: 'bold',
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px'
            }}>Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>About Us</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Careers</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Blog</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Press</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{
              fontWeight: 'bold',
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px'
            }}>Follow Us</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Instagram</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Twitter</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Facebook</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div style={{
          borderTop: `1px solid var(--border)`,
          paddingTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }} className="sm:flex-row sm:justify-between sm:items-center">
          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>© {new Date().getFullYear()} GRAINSHARE. All rights reserved.</div>
          <div className="text-xs space-x-6" style={{ color: 'var(--text-secondary)' }}>
            <a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Privacy</a>
            <a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Terms</a>
            <a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
