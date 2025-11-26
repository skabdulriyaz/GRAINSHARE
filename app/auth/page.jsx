'use client';

import React from "react";
import Footer from "../components/Footer";
import styles from "./Auth.module.css";

export default function Auth() {
  const [isLogin, setIsLogin] = React.useState(true);
  const [selectedRole, setSelectedRole] = React.useState(null);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    organizationName: '',
    phone: '',
  });

  const roles = [
    {
      icon: "🔒",
      title: "Admin",
      desc: "Manage platform content and oversee user interactions.",
      value: "admin",
    },
    {
      icon: "🍎",
      title: "Food Donor",
      desc: "List surplus food and coordinate donations.",
      value: "donor",
    },
    {
      icon: "🤝",
      title: "Recipient Org",
      desc: "Request donations and manage logistics.",
      value: "recipient",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, role: selectedRole, isLogin });
  };

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black">
      <main className="max-w-6xl mx-auto px-6 py-20">
        {!selectedRole ? (
          // Role Selection View
          <>
            <div className="mb-16">
              <h1 className="text-5xl font-black mb-4 tracking-tight dark:text-white light:text-black">Join GrainShare</h1>
              <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600">Select your role to get started.</p>
            </div>

            <div className={styles.grid}>
              {roles.map((r) => (
                <button 
                  key={r.value} 
                  onClick={() => setSelectedRole(r.value)}
                  className={styles.roleBtn}
                >
                  <div className={styles.roleIcon}>{r.icon}</div>
                  <h3 className="font-bold text-lg text-white dark:text-white light:text-black">{r.title}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mt-3">{r.desc}</p>
                </button>
              ))}
            </div>
          </>
        ) : (
          // Auth Form View
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className={styles.formContainer}>
              <div className="mb-8">
                <button
                  onClick={() => setSelectedRole(null)}
                  className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600 hover:underline mb-6 flex items-center gap-2"
                >
                  ← Back to Role Selection
                </button>
                
                <h2 className="text-4xl font-black mb-2 dark:text-white light:text-black">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">
                  {isLogin 
                    ? 'Sign in to your account to continue' 
                    : 'Join GrainShare and start making an impact'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Name Field - Registration Only */}
                {!isLogin && (
                  <div>
                    <label className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                )}

                {/* Organization Name - For Recipient & Donor */}
                {!isLogin && (selectedRole === 'recipient' || selectedRole === 'donor') && (
                  <div>
                    <label className={styles.label}>
                      {selectedRole === 'recipient' ? 'Organization Name' : 'Business Name'} *
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder={selectedRole === 'recipient' ? 'e.g. Community Food Bank' : 'e.g. Fresh Foods Co.'}
                      required
                    />
                  </div>
                )}

                {/* Email */}
                <div>
                  <label className={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Phone - Registration Only */}
                {!isLogin && (
                  <div>
                    <label className={styles.label}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                )}

                {/* Password */}
                <div>
                  <label className={styles.label}>Password *</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Create a strong password"
                    required
                  />
                  {!isLogin && (
                    <p className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-600 mt-2">
                      Minimum 8 characters, include uppercase, numbers, and symbols
                    </p>
                  )}
                </div>

                {/* Confirm Password - Registration Only */}
                {!isLogin && (
                  <div>
                    <label className={styles.label}>Confirm Password *</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="Re-enter your password"
                      required
                    />
                  </div>
                )}

                {/* Submit Button */}
                <button type="submit" className={styles.submitBtn}>
                  {isLogin ? 'Sign In' : 'Create Account'} →
                </button>
              </form>

              {/* Toggle Auth Mode */}
              <div className="mt-8 text-center border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300 pt-8">
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-2">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}
                </p>
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setFormData({
                      email: '',
                      password: '',
                      confirmPassword: '',
                      fullName: '',
                      organizationName: '',
                      phone: '',
                    });
                  }}
                  className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600 hover:underline font-semibold"
                >
                  {isLogin ? 'Sign up here' : 'Sign in here'}
                </button>
              </div>
            </div>

            {/* Info Section */}
            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="font-bold text-lg dark:text-white light:text-black mb-3">Secure & Verified</h3>
                <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                  Your data is encrypted and secured. All organizations are verified before joining the platform.
                </p>
              </div>

              <div className={styles.infoCard}>
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="font-bold text-lg dark:text-white light:text-black mb-3">Make an Impact</h3>
                <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                  Every donation saved from waste reduces carbon emissions and feeds families in your community.
                </p>
              </div>

              <div className={styles.infoCard}>
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-bold text-lg dark:text-white light:text-black mb-3">Quick Setup</h3>
                <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                  Complete your profile in minutes and start listing or requesting donations immediately.
                </p>
              </div>

              {/* Role Info */}
              <div className={styles.roleInfo}>
                <h4 className="font-bold text-white dark:text-white light:text-black mb-3">
                  {roles.find(r => r.value === selectedRole)?.title}
                </h4>
                <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                  {roles.find(r => r.value === selectedRole)?.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
