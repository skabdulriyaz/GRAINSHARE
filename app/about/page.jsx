import React from "react";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";
import styles from "./About.module.css";

const values = [
  {
    icon: "🌍",
    title: "Sustainability",
    desc: "Reducing food waste and environmental impact is core to our mission.",
  },
  {
    icon: "❤️",
    title: "Community",
    desc: "Building stronger communities through food security and connection.",
  },
  {
    icon: "🤝",
    title: "Transparency",
    desc: "Open data and honest impact tracking build trust with all users.",
  },
  {
    icon: "📈",
    title: "Scale",
    desc: "Growing the platform to reach millions and prevent massive waste.",
  },
];

const team = [
  {
    name: "Riyaz",
    role: "TEAM LEAD",
    icon: "👨‍💼",
  },
  {
    name: "Srikanth",
    role: "CO-TEAM LEAD",
    icon: "👩‍💼",
  },
  {
    name: "Charan",
    role: "CO-TEAM LEAD",
    icon: "👨‍💻",
  },
];

const milestones = [
  { year: "2023", event: "GrainShare Founded", icon: "🚀" },
  { year: "2024", event: "1M kg Food Saved", icon: "📦" },
  { year: "2024", event: "50,000+ Users", icon: "👥" },
  { year: "2025", event: "Expanding Globally", icon: "🌐" },
];

export default function About() {

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        {/* Hero */}
        <ScrollAnimator className={styles.heroSection}>
          <div style={{ textAlign: "center" }}>
            <h1 className={styles.heroTitle}>
              About GrainShare
            </h1>
            <p className={styles.heroSubtitle}>
              We're on a mission to eliminate food waste while strengthening community food security.
            </p>
          </div>
        </ScrollAnimator>

        {/* Mission */}
        <section style={{ marginBottom: "6rem", display: "grid", gap: "3rem", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          <ScrollAnimator>
            <div>
              <h2 className={styles.sectionTitle} style={{ marginBottom: "1.5rem" }}>Our Mission</h2>
              <p style={{ fontSize: "1.125rem", color: "#999", marginBottom: "1rem", lineHeight: 1.6 }}>
                Every year, billions of kilos of perfectly good food end up in landfills while millions go hungry. This isn't just a resource problem—it's a social justice issue.
              </p>
              <p style={{ fontSize: "1.125rem", color: "#999", lineHeight: 1.6 }}>
                GrainShare connects food donors with recipient organizations to bridge this gap. We're building a transparent, efficient platform that turns surplus into support.
              </p>
            </div>
          </ScrollAnimator>

          <ScrollAnimator delay={150}>
            <div className={styles.missionCard}>
              <div className={styles.missionStats}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>1.3B</div>
                  <p className={styles.statLabel}>tonnes wasted annually</p>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>828M</div>
                  <p className={styles.statLabel}>people facing hunger</p>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>3.3Gt</div>
                  <p className={styles.statLabel}>CO₂ from food waste</p>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </section>

        {/* Values */}
        <section className={styles.sectionDivider} style={{ marginBottom: "6rem" }}>
          <ScrollAnimator style={{ marginBottom: "3rem" }}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
          </ScrollAnimator>
          <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {values.map((value, i) => (
              <ScrollAnimator key={i} delay={i * 80}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3 className={styles.cardTitle}>{value.title}</h3>
                  <p className={styles.cardDescription}>{value.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.sectionDivider} style={{ marginBottom: "6rem" }}>
          <ScrollAnimator style={{ marginBottom: "3rem" }}>
            <h2 className={styles.sectionTitle}>Our Journey</h2>
          </ScrollAnimator>
          <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {milestones.map((milestone, i) => (
              <ScrollAnimator key={i} delay={i * 100}>
                <div className={styles.milestoneCard}>
                  <div className={styles.milestoneIcon}>{milestone.icon}</div>
                  <div className={styles.milestoneYear}>{milestone.year}</div>
                  <p className={styles.cardDescription}>{milestone.event}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className={styles.sectionDivider}>
          <ScrollAnimator style={{ marginBottom: "3rem" }}>
            <h2 className={styles.sectionTitle}>Our Team</h2>
          </ScrollAnimator>
          <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {team.map((member, i) => (
              <ScrollAnimator key={i} delay={i * 80}>
                <div className={styles.teamCard}>
                  <div className={styles.teamIcon}>{member.icon}</div>
                  <h3 className={styles.cardTitle} style={{ marginTop: "1rem" }}>{member.name}</h3>
                  <p className={styles.cardRole}>{member.role}</p>
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
