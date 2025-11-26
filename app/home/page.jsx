import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";
import styles from "./Home.module.css";

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

export default function HomePage() {

  return (
    <div className={styles.pageContainer}>
      <Hero
        title="Reduce Food Waste"
        subtitle="Coordinate food donations across your community. Help fight hunger and create a sustainable future."
        cta={{ href: "/donate-food", label: "Donate Now" }}
      />
      <main className={styles.mainContent}>
        {/* Role Cards */}
        <section className={styles.rolesGrid}>
          {roles.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{r.icon}</div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              <a href={r.cta.href} className={styles.cardCta}>
                {r.cta.label} →
              </a>
            </div>
          ))}
        </section>

        {/* How It Works */}
        <section className={styles.sectionDivider} style={{ marginBottom: "5rem" }}>
          <ScrollAnimator style={{ marginBottom: "2rem" }}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.subtitle}>GrainShare connects food donors with recipient organizations through a simple, transparent process. Whether you're donating surplus or requesting food, we've made it easy and impactful.</p>
          </ScrollAnimator>

          <div style={{ marginBottom: "3rem" }}>
            <ScrollAnimator style={{ marginBottom: "1.5rem" }}>
              <h3 className={styles.h2Title}>For Food Donors</h3>
              <p className={styles.subtitle}>Turn your surplus into community benefit in 4 simple steps.</p>
            </ScrollAnimator>
            <div className={styles.timeline}>
              {donorSteps.map((s, i) => (
                <ScrollAnimator key={i} delay={i * 120}>
                  <div className={styles.step}>
                    <div className={styles.badge}>{s.icon}</div>
                    <div className={styles.content}>
                      <div className={styles.stepNumber}>Step {i + 1}</div>
                      <h4 className={styles.stepTitle}>{s.title}</h4>
                      <p className={styles.stepDesc}>{s.desc}</p>
                      <ul className={styles.detailsList}>
                        {s.details.map((d, j) => (
                          <li key={j} className={styles.bulletItem}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,212,255,0.12)", paddingTop: "1.5rem", marginBottom: "3rem" }}>
            <ScrollAnimator style={{ marginBottom: "1.5rem" }}>
              <h3 className={styles.h2Title}>For Recipients</h3>
              <p className={styles.subtitle}>Access available donations and expand your reach in 4 steps.</p>
            </ScrollAnimator>
            <div className={styles.timeline}>
              {recipientSteps.map((s, i) => (
                <ScrollAnimator key={i} delay={i * 120}>
                  <div className={styles.step}>
                    <div className={styles.badge}>{s.icon}</div>
                    <div className={styles.content}>
                      <div className={styles.stepNumber}>Step {i + 1}</div>
                      <h4 className={styles.stepTitle}>{s.title}</h4>
                      <p className={styles.stepDesc}>{s.desc}</p>
                      <ul className={styles.detailsList}>
                        {s.details.map((d, j) => (
                          <li key={j} className={styles.bulletItem}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,212,255,0.12)", paddingTop: "1.5rem" }}>
            <ScrollAnimator style={{ marginBottom: "1.5rem" }}>
              <h3 className={styles.h2Title}>Why Join GrainShare?</h3>
            </ScrollAnimator>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              {benefits.map((b, i) => (
                <ScrollAnimator key={i} delay={i * 80}>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>{b.icon}</div>
                    <h4 className={styles.benefitTitle}>{b.title}</h4>
                    <p className={styles.benefitDesc}>{b.desc}</p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.sectionDivider} style={{ marginBottom: "5rem" }}>
          <h2 className={styles.sectionTitle}>Why It Matters</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {impactStats.map((stat, i) => (
              <div key={i} className={styles.stat}>
                <div style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>{stat.icon}</div>
                <div className={styles.statValue}>{stat.value}</div>
                <p className={styles.statLabel}>{stat.label}</p>
                <p className={styles.statUnit}>{stat.unit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className={styles.sectionDivider}>
          <h2 className={styles.sectionTitle}>Success Stories</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {successStories.map((story, i) => (
              <div key={i} className={styles.testimonial}>
                <div className={styles.testimonialIcon}>{story.icon}</div>
                <p className={styles.testimonialText}>"{story.story}"</p>
                <div className={styles.testimonialFooter}>
                  <h4 className={styles.testimonialName}>{story.name}</h4>
                  <p className={styles.testimonialRole}>{story.role}</p>
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
