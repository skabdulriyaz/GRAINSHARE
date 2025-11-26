"use client";

'use client';

import React from "react";

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      borderTop: `1px solid var(--border)`,
      backgroundColor: 'var(--bg-primary)',
      padding: '32px 0 24px',
      color: 'var(--text-secondary)',
      transition: 'all 0.3s ease'
    }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <h4 style={{
              fontWeight: 'bold',
              color: 'var(--text-primary)',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '12px'
            }} className="sm:text-xs sm:mb-4">Platform</h4>
            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
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
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '12px'
            }} className="sm:text-xs sm:mb-4">Support</h4>
            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
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
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '12px'
            }} className="sm:text-xs sm:mb-4">Company</h4>
            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
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
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '12px'
            }} className="sm:text-xs sm:mb-4">Follow Us</h4>
            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Instagram</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Twitter</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Facebook</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div style={{
          borderTop: `1px solid var(--border)`,
          paddingTop: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }} className="sm:pt-8 sm:gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="text-2xs sm:text-xs" style={{ color: 'var(--text-secondary)' }}>© {new Date().getFullYear()} GRAINSHARE. All rights reserved.</div>
          <div className="text-2xs sm:text-xs space-x-3 sm:space-x-6" style={{ color: 'var(--text-secondary)' }}>
            <a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Privacy</a>
            <a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Terms</a>
            <a href="#" style={{ color: 'var(--text-secondary)' }} className={`transition hover:text-cyan-400`}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
