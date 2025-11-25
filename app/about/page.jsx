import React from "react";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";
import styles from "./About.module.css";

export default function About() {
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
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Food systems innovator with 10+ years in sustainability.",
      icon: "👨‍💼",
    },
    {
      name: "Maria Garcia",
      role: "Head of Operations",
      bio: "Logistics expert focused on efficient food distribution.",
      icon: "👩‍💼",
    },
    {
      name: "James Chen",
      role: "Lead Developer",
      bio: "Tech architect building the infrastructure for scale.",
      icon: "👨‍💻",
    },
    {
      name: "Sarah Williams",
      role: "Community Lead",
      bio: "Passionate about connecting donors and recipients.",
      icon: "👩‍🤝‍👨",
    },
  ];

  const milestones = [
    { year: "2023", event: "GrainShare Founded", icon: "🚀" },
    { year: "2024", event: "1M kg Food Saved", icon: "📦" },
    { year: "2024", event: "50,000+ Users", icon: "👥" },
    { year: "2025", event: "Expanding Globally", icon: "🌐" },
  ];

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black">
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <ScrollAnimator className="mb-24">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-6 dark:text-white light:text-black tracking-tight">
              About GrainShare
            </h1>
            <p className="text-2xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto">
              We're on a mission to eliminate food waste while strengthening community food security.
            </p>
          </div>
        </ScrollAnimator>

        {/* Mission */}
        <section className="mb-24 grid gap-12 lg:grid-cols-2 items-center">
          <ScrollAnimator>
            <div>
              <h2 className="text-4xl font-black dark:text-white light:text-black mb-6 tracking-tight">Our Mission</h2>
              <p className="text-lg text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4 leading-relaxed">
                Every year, billions of kilos of perfectly good food end up in landfills while millions go hungry. This isn't just a resource problem—it's a social justice issue.
              </p>
              <p className="text-lg text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                GrainShare connects food donors with recipient organizations to bridge this gap. We're building a transparent, efficient platform that turns surplus into support.
              </p>
            </div>
          </ScrollAnimator>

          <ScrollAnimator delay={150}>
            <div className={styles.missionCard}>
              <div className={styles.missionStats}>
                <div className={styles.stat}>
                  <div className="text-4xl font-black text-cyan-400 dark:text-cyan-400 light:text-cyan-600">1.3B</div>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mt-2">tonnes wasted annually</p>
                </div>
                <div className={styles.stat}>
                  <div className="text-4xl font-black text-cyan-400 dark:text-cyan-400 light:text-cyan-600">828M</div>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mt-2">people facing hunger</p>
                </div>
                <div className={styles.stat}>
                  <div className="text-4xl font-black text-cyan-400 dark:text-cyan-400 light:text-cyan-600">3.3Gt</div>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mt-2">CO₂ from food waste</p>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </section>

        {/* Values */}
        <section className="mb-24 pt-12 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300">
          <ScrollAnimator className="mb-12">
            <h2 className="text-4xl font-black dark:text-white light:text-black tracking-tight">Our Values</h2>
          </ScrollAnimator>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <ScrollAnimator key={i} delay={i * 80}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3 className="font-bold dark:text-white light:text-black mb-3 text-lg">{value.title}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24 pt-12 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300">
          <ScrollAnimator className="mb-12">
            <h2 className="text-4xl font-black dark:text-white light:text-black tracking-tight">Our Journey</h2>
          </ScrollAnimator>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, i) => (
              <ScrollAnimator key={i} delay={i * 100}>
                <div className={styles.milestoneCard}>
                  <div className={styles.milestoneIcon}>{milestone.icon}</div>
                  <div className={styles.milestoneYear}>{milestone.year}</div>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">{milestone.event}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="pt-12 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300">
          <ScrollAnimator className="mb-12">
            <h2 className="text-4xl font-black dark:text-white light:text-black tracking-tight">Our Team</h2>
          </ScrollAnimator>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <ScrollAnimator key={i} delay={i * 80}>
                <div className={styles.teamCard}>
                  <div className={styles.teamIcon}>{member.icon}</div>
                  <h3 className="font-bold dark:text-white light:text-black mt-4">{member.name}</h3>
                  <p className="text-sm text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-semibold mt-1">{member.role}</p>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mt-3 leading-relaxed">{member.bio}</p>
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
