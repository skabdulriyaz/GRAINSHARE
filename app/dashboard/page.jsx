import React from "react";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  // Mock user data
  const userStats = {
    foodDonated: 2450,
    kgSaved: 2450,
    co2Prevented: 12.3,
    peopleHelped: 1240,
    donationsCount: 24,
    partnersConnected: 8,
  };

  const recentActivity = [
    { type: "donation", title: "50kg Fresh Vegetables", org: "Community Food Bank", date: "2 hours ago", icon: "🥬" },
    { type: "request", title: "Pasta & Rice Donated", org: "Hope Shelter", date: "5 hours ago", icon: "🍚" },
    { type: "impact", title: "100 People Fed", org: "Local Partnership", date: "1 day ago", icon: "❤️" },
    { type: "donation", title: "30kg Bread Surplus", org: "Street Outreach", date: "2 days ago", icon: "🍞" },
  ];

  const impactMetrics = [
    { label: "Food Saved (kg)", value: "2,450", trend: "+180 this month", icon: "📦" },
    { label: "CO₂ Prevented (tonnes)", value: "12.3", trend: "+2.4 this month", icon: "🌱" },
    { label: "People Helped", value: "1,240", trend: "+340 this month", icon: "👥" },
    { label: "Active Partnerships", value: "8", trend: "+2 this month", icon: "🤝" },
  ];

  const monthlyData = [
    { month: "Sep", donations: 15, kg: 180 },
    { month: "Oct", donations: 18, kg: 220 },
    { month: "Nov", donations: 24, kg: 330 },
  ];

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black">
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <ScrollAnimator className="mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 dark:text-white light:text-black tracking-tight">
              Your Impact Dashboard
            </h1>
            <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl">
              Track your contributions to food waste reduction and community impact in real-time.
            </p>
          </div>
        </ScrollAnimator>

        {/* Key Metrics Grid */}
        <section className="mb-20">
          <ScrollAnimator className="mb-8">
            <h2 className="text-3xl font-black dark:text-white light:text-black tracking-tight">Your Statistics</h2>
          </ScrollAnimator>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, i) => (
              <ScrollAnimator key={i} delay={i * 80}>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>{metric.icon}</div>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 font-semibold">{metric.label}</p>
                  <p className="text-xs text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mt-2">{metric.trend}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </section>

        {/* Chart Section */}
        <section className="mb-20 grid gap-12 lg:grid-cols-3">
          <ScrollAnimator className="lg:col-span-2">
            <div className={styles.chartCard}>
              <h3 className="text-2xl font-bold dark:text-white light:text-black mb-8">Monthly Activity</h3>
              <div className={styles.chartContainer}>
                {monthlyData.map((data, i) => (
                  <div key={i} className={styles.chartBar}>
                    <div className={styles.barWrapper}>
                      <div
                        className={styles.bar}
                        style={{ height: `${(data.donations / 24) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mt-3 font-semibold">{data.month}</p>
                    <p className="text-xs text-cyan-400 dark:text-cyan-400 light:text-cyan-600">{data.donations} donations</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator delay={200}>
            <div className={styles.summaryCard}>
              <h3 className="text-2xl font-bold dark:text-white light:text-black mb-8">Quick Summary</h3>
              <div className={styles.summaryItem}>
                <span className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">Total Donations</span>
                <div className="text-3xl font-bold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mt-2">{userStats.donationsCount}</div>
              </div>
              <div className={styles.summaryItem}>
                <span className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">Food Donated (kg)</span>
                <div className="text-3xl font-bold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mt-2">{userStats.kgSaved}</div>
              </div>
              <div className={styles.summaryItem}>
                <span className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">People Impacted</span>
                <div className="text-3xl font-bold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mt-2">{userStats.peopleHelped}</div>
              </div>
            </div>
          </ScrollAnimator>
        </section>

        {/* Recent Activity */}
        <section className="pt-12 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300">
          <ScrollAnimator className="mb-8">
            <h2 className="text-3xl font-black dark:text-white light:text-black tracking-tight">Recent Activity</h2>
          </ScrollAnimator>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <ScrollAnimator key={i} delay={i * 50}>
                <div className={styles.activityCard}>
                  <div className={styles.activityIcon}>{activity.icon}</div>
                  <div className={styles.activityContent}>
                    <h4 className="font-bold dark:text-white light:text-black">{activity.title}</h4>
                    <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">{activity.org}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-600 whitespace-nowrap">{activity.date}</span>
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
