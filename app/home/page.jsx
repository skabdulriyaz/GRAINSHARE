import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";
import howStyles from "../how-it-works/HowItWorks.module.css";
import styles from "./Home.module.css";

export default function HomePage() {
  const roles = [
    {
      icon: "🍎",
      title: "For Donors",
      desc: "List surplus food and coordinate pickups with recipient organizations.",
      cta: { label: "Start Donating", href: "/donate-food" },
    },
    {
      icon: "🤝",
      title: "For Recipients",
      desc: "Request donations and manage distributions to those in need.",
      cta: { label: "Request Food", href: "/request-food" },
    },
    {
      icon: "📊",
      title: "For Analysts",
      desc: "Track trends and generate insights to reduce waste.",
      cta: { label: "View Analytics", href: "#" },
    },
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Food Donor",
      story: "We saved 500kg of perfectly good produce monthly using GrainShare. It feels amazing knowing our surplus feeds families instead of landfills.",
      icon: "👩‍🍳",
    },
    {
      name: "Marcus Johnson",
      role: "Community Center Manager",
      story: "GrainShare simplified our food procurement. We've doubled our reach and helped 200+ families weekly without increasing costs.",
      icon: "👨‍💼",
    },
    {
      name: "Dr. Aisha Patel",
      role: "Data Analyst",
      story: "The platform's data is invaluable for our research. We've documented 2M kg of food waste prevented in just 6 months.",
      icon: "👩‍🔬",
    },
  ];

  const impactStats = [
    { label: "Food Saved", value: "1.3B", unit: "tonnes annually", icon: "🌍" },
    { label: "People Hungry", value: "828M", unit: "globally", icon: "🍽️" },
    { label: "CO₂ Prevented", value: "3.3Gt", unit: "per year", icon: "🌱" },
    { label: "Economic Impact", value: "$408B", unit: "food waste cost", icon: "💰" },
  ];

  const donorSteps = [
    {
      icon: "📝",
      title: "Create Your Listing",
      desc: "Sign up and add details about your surplus food: type, quantity, quality, and availability window.",
      details: ["Food type & description", "Quantity & unit (kg, boxes, etc.)", "Expiration/use-by date", "Pickup window"],
    },
    {
      icon: "📍",
      title: "Set Pickup Details",
      desc: "Specify your location, pickup address, and preferred logistics (delivery or pickup).",
      details: ["Business address", "Accessibility info", "Parking instructions", "Contact person details"],
    },
    {
      icon: "✅",
      title: "Get Matched",
      desc: "Recipients browse your listing and submit requests. Accept matches that work for you.",
      details: ["View interested recipients", "Accept/decline requests", "Confirm pickup time", "Receive recipient info"],
    },
    {
      icon: "📸",
      title: "Complete Transfer",
      desc: "Hand over food to recipient or arrange logistics partner. Take photos for verification.",
      details: ["Coordinate final timing", "Take photos of donation", "Get recipient signature", "Receive confirmation"],
    },
  ];

  const recipientSteps = [
    {
      icon: "🔍",
      title: "Browse Listings",
      desc: "Search available donations by food type, location, quantity, and availability date.",
      details: ["Filter by food category", "Search by location radius", "Sort by available quantity", "View pickup times"],
    },
    {
      icon: "📋",
      title: "Submit Request",
      desc: "Request specific items that match your organization's needs and capacity.",
      details: ["Specify quantity needed", "Add special requirements", "Choose preferred pickup time", "Add notes for donor"],
    },
    {
      icon: "🤝",
      title: "Confirm with Donor",
      desc: "Donor reviews and accepts your request. Coordinate final pickup arrangements.",
      details: ["Receive donor acceptance", "Confirm pickup address", "Exchange contact info", "Discuss logistics"],
    },
    {
      icon: "📊",
      title: "Track Impact",
      desc: "Log the donation and see your organization's impact on food waste reduction.",
      details: ["Record items received", "Log distribution to beneficiaries", "Track impact metrics", "Generate reports"],
    },
  ];

  const benefits = [
    {
      icon: "🌍",
      title: "Environmental Impact",
      desc: "Reduce methane emissions from landfills and lower carbon footprint.",
    },
    {
      icon: "❤️",
      title: "Community Support",
      desc: "Feed more families and strengthen local food security networks.",
    },
    {
      icon: "💰",
      title: "Cost Savings",
      desc: "Save disposal costs for donors and acquisition costs for recipients.",
    },
    {
      icon: "📈",
      title: "Data-Driven Decisions",
      desc: "Track trends and optimize food waste reduction strategies.",
    },
  ];

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black">
      <Hero
        title="Reduce Food Waste"
        subtitle="Coordinate food donations across your community. Help fight hunger and create a sustainable future."
        cta={{ href: "/donate-food", label: "Donate Now" }}
      />
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Role Cards with CTAs */}
        <section className="grid gap-8 sm:grid-cols-3 mb-20">
          {roles.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{r.icon}</div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-black">{r.title}</h3>
              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed mb-6">{r.desc}</p>
              <a
                href={r.cta.href}
                className="inline-block px-4 py-2 rounded text-sm font-semibold transition-all bg-cyan-500 dark:bg-cyan-500 light:bg-cyan-600 text-black hover:shadow-lg hover:translate-y-[-2px]"
              >
                {r.cta.label} →
              </a>
            </div>
          ))}
        </section>

        {/* How It Works (merged) */}
        <section className="pt-12 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300 mb-20">
          <ScrollAnimator className="mb-8">
            <div>
              <h2 className="text-4xl font-black mb-4 dark:text-white light:text-black tracking-tight">How It Works</h2>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">GrainShare connects food donors with recipient organizations through a simple, transparent process. Whether you're donating surplus or requesting food, we've made it easy and impactful.</p>
            </div>
          </ScrollAnimator>

          <div className="mb-12">
            <ScrollAnimator className="mb-6">
              <h3 className="text-2xl font-bold dark:text-white light:text-black">For Food Donors</h3>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">Turn your surplus into community benefit in 4 simple steps.</p>
            </ScrollAnimator>
            <div className={howStyles.timeline}>
              {donorSteps.map((s, i) => (
                <ScrollAnimator key={i} delay={i * 120}>
                  <div className={howStyles.step}>
                    <div className={howStyles.badge}>{s.icon}</div>
                    <div className={howStyles.content}>
                      <div className={howStyles.stepNumber}>Step {i + 1}</div>
                      <h4 className="font-bold dark:text-white light:text-black text-lg mb-2">{s.title}</h4>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                      <ul className={howStyles.detailsList}>
                        {s.details.map((d, j) => (
                          <li key={j} className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-600">• {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>

          <div className="mb-12 pt-6 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300">
            <ScrollAnimator className="mb-6">
              <h3 className="text-2xl font-bold dark:text-white light:text-black">For Recipients</h3>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">Access available donations and expand your reach in 4 steps.</p>
            </ScrollAnimator>
            <div className={howStyles.timeline}>
              {recipientSteps.map((s, i) => (
                <ScrollAnimator key={i} delay={i * 120}>
                  <div className={howStyles.step}>
                    <div className={howStyles.badge}>{s.icon}</div>
                    <div className={howStyles.content}>
                      <div className={howStyles.stepNumber}>Step {i + 1}</div>
                      <h4 className="font-bold dark:text-white light:text-black text-lg mb-2">{s.title}</h4>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                      <ul className={howStyles.detailsList}>
                        {s.details.map((d, j) => (
                          <li key={j} className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-600">• {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300">
            <ScrollAnimator className="mb-6">
              <h3 className="text-2xl font-bold dark:text-white light:text-black">Why Join GrainShare?</h3>
            </ScrollAnimator>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <ScrollAnimator key={i} delay={i * 80}>
                  <div className={howStyles.benefitCard}>
                    <div className={howStyles.benefitIcon}>{b.icon}</div>
                    <h4 className="font-bold dark:text-white light:text-black mb-2">{b.title}</h4>
                    <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">{b.desc}</p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* Expanded Stats Section */}
        <section className="pt-12 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300 mb-20">
          <h2 className="text-4xl font-black mb-12 text-white dark:text-white light:text-black tracking-tight">Why It Matters</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, i) => (
              <div key={i} className={styles.stat}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-black text-cyan-400 dark:text-cyan-400 light:text-cyan-600">{stat.value}</div>
                <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mt-2 font-semibold">{stat.label}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-500 mt-1">{stat.unit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="pt-12 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300">
          <h2 className="text-4xl font-black mb-12 text-white dark:text-white light:text-black tracking-tight">Success Stories</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {successStories.map((story, i) => (
              <div key={i} className={styles.testimonial}>
                <div className={styles.testimonialIcon}>{story.icon}</div>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-6 leading-relaxed italic">"{story.story}"</p>
                <div className={styles.testimonialFooter}>
                  <h4 className="font-bold text-white dark:text-white light:text-black">{story.name}</h4>
                  <p className="text-xs text-cyan-400 dark:text-cyan-400 light:text-cyan-600">{story.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
