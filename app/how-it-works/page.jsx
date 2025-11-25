import React from "react";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
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
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <ScrollAnimator className="mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 dark:text-white light:text-black tracking-tight">How It Works</h1>
            <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-3xl">
              GrainShare connects food donors with recipient organizations through a simple, transparent process. 
              Whether you're donating surplus or requesting food, we've made it easy and impactful.
            </p>
          </div>
        </ScrollAnimator>

        {/* For Donors Section */}
        <section className="mb-24">
          <ScrollAnimator className="mb-12">
            <div>
              <h2 className="text-4xl font-black mb-4 dark:text-white light:text-black tracking-tight">For Food Donors</h2>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">Turn your surplus into community benefit in 4 simple steps.</p>
            </div>
          </ScrollAnimator>
          <div className={styles.timeline}>
            {donorSteps.map((s, i) => (
              <ScrollAnimator key={i} delay={i * 150}>
                <div className={styles.step}>
                  <div className={styles.badge}>{s.icon}</div>
                  <div className={styles.content}>
                    <div className={styles.stepNumber}>Step {i + 1}</div>
                    <h4 className="font-bold dark:text-white light:text-black text-lg mb-2">{s.title}</h4>
                    <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <ul className={styles.detailsList}>
                      {s.details.map((detail, j) => (
                        <li key={j} className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-600">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </section>

        {/* For Recipients Section */}
        <section className="mb-24 pt-12 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300">
          <ScrollAnimator className="mb-12">
            <div>
              <h2 className="text-4xl font-black mb-4 dark:text-white light:text-black tracking-tight">For Recipients</h2>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">Access available donations and expand your reach in 4 steps.</p>
            </div>
          </ScrollAnimator>
          <div className={styles.timeline}>
            {recipientSteps.map((s, i) => (
              <ScrollAnimator key={i} delay={i * 150}>
                <div className={styles.step}>
                  <div className={styles.badge}>{s.icon}</div>
                  <div className={styles.content}>
                    <div className={styles.stepNumber}>Step {i + 1}</div>
                    <h4 className="font-bold dark:text-white light:text-black text-lg mb-2">{s.title}</h4>
                    <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <ul className={styles.detailsList}>
                      {s.details.map((detail, j) => (
                        <li key={j} className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-600">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="pt-12 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300">
          <ScrollAnimator className="mb-12">
            <h2 className="text-4xl font-black dark:text-white light:text-black tracking-tight">Why Join GrainShare?</h2>
          </ScrollAnimator>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <ScrollAnimator key={i} delay={i * 100}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <h3 className="font-bold dark:text-white light:text-black mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
