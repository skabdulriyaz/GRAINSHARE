"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import styles from "./RequestFood.module.css";

export default function RequestFood() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    orgName: "",
    orgType: "Food Bank",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    itemsNeeded: "",
    quantity: "",
    timeframe: "",
    pickupArrangements: "",
    frequency: "One-time",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const handlePrev = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black">
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Request Food Assistance</h1>
            <p className={styles.heroSubtitle}>
              Connect with donors who want to help. Secure food donations for your organization, community, or cause.
            </p>
          </div>
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Organizations Served</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100K+</div>
              <div className={styles.statLabel}>Meals Provided</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>24h</div>
              <div className={styles.statLabel}>Avg Response Time</div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className={styles.progressContainer}>
          <div className={`${styles.step} ${formStep >= 1 ? styles.active : ""}`}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepLabel}>Organization</div>
          </div>
          <div className={styles.progressLine}></div>
          <div className={`${styles.step} ${formStep >= 2 ? styles.active : ""}`}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepLabel}>Food Needs</div>
          </div>
          <div className={styles.progressLine}></div>
          <div className={`${styles.step} ${formStep >= 3 ? styles.active : ""}`}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepLabel}>Review & Submit</div>
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Step 1: Organization Details */}
          {formStep === 1 && (
            <div className={styles.formStep}>
              <h2 className={styles.stepTitle}>Tell us about your organization</h2>
              <p className={styles.stepDescription}>We want to understand how we can best support you</p>

              <div className={styles.formGroup}>
                <label className={styles.label}>Organization Name *</label>
                <input
                  className={styles.input}
                  placeholder="e.g. Community Food Bank, Local Shelter, etc."
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className={styles.formGroup}>
                  <label className={styles.label}>Organization Type *</label>
                  <select
                    className={styles.input}
                    name="orgType"
                    value={formData.orgType}
                    onChange={handleChange}
                    required
                  >
                    <option>Food Bank</option>
                    <option>Shelter</option>
                    <option>School</option>
                    <option>Community Center</option>
                    <option>Orphanage</option>
                    <option>Hospital/Medical Facility</option>
                    <option>Other NGO</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Request Frequency *</label>
                  <select
                    className={styles.input}
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    required
                  >
                    <option>One-time</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>As needed</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className={styles.formGroup}>
                  <label className={styles.label}>Contact Person Name *</label>
                  <input
                    className={styles.input}
                    placeholder="Full name"
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address *</label>
                  <input
                    className={styles.input}
                    placeholder="email@example.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number *</label>
                <input
                  className={styles.input}
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Organization Address *</label>
                <input
                  className={styles.input}
                  placeholder="Full address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Food Needs */}
          {formStep === 2 && (
            <div className={styles.formStep}>
              <h2 className={styles.stepTitle}>What food items do you need?</h2>
              <p className={styles.stepDescription}>Help donors understand how they can support you</p>

              <div className={styles.formGroup}>
                <label className={styles.label}>Food Items Needed *</label>
                <textarea
                  className={styles.textarea}
                  placeholder="e.g. Rice, Wheat, Vegetables, Canned goods, Milk powder, etc. You can list specific items or dietary preferences."
                  rows="4"
                  name="itemsNeeded"
                  value={formData.itemsNeeded}
                  onChange={handleChange}
                  required
                />
                <p className={styles.hint}>Be as specific as possible to help donors provide what you need</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className={styles.formGroup}>
                  <label className={styles.label}>Estimated Quantity Needed *</label>
                  <input
                    className={styles.input}
                    placeholder="e.g. 100 kg, 500 meals, etc."
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Timeframe *</label>
                  <select
                    className={styles.input}
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    required
                  >
                    <option>Urgent (within days)</option>
                    <option>Within 1-2 weeks</option>
                    <option>Within 1 month</option>
                    <option>Ongoing/Regular supply</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Pickup/Delivery Preferences *</label>
                <textarea
                  className={styles.textarea}
                  placeholder="e.g. We can pick up on weekdays 9 AM - 5 PM, or donors can deliver. Please specify any logistics constraints."
                  rows="3"
                  name="pickupArrangements"
                  value={formData.pickupArrangements}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {formStep === 3 && (
            <div className={styles.formStep}>
              <h2 className={styles.stepTitle}>Review Your Request</h2>
              <p className={styles.stepDescription}>Please verify all information is correct</p>

              <div className={styles.reviewBox}>
                <div className={styles.reviewSection}>
                  <h3 className={styles.reviewTitle}>Organization Details</h3>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Organization:</span>
                    <span className={styles.reviewValue}>{formData.orgName || "Not specified"}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Type:</span>
                    <span className={styles.reviewValue}>{formData.orgType}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Contact:</span>
                    <span className={styles.reviewValue}>
                      {formData.contactName} | {formData.email} | {formData.phone}
                    </span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Address:</span>
                    <span className={styles.reviewValue}>{formData.address || "Not specified"}</span>
                  </div>
                </div>

                <div className={styles.reviewSection}>
                  <h3 className={styles.reviewTitle}>Food Requirements</h3>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Items Needed:</span>
                    <span className={styles.reviewValue}>{formData.itemsNeeded || "Not specified"}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Quantity:</span>
                    <span className={styles.reviewValue}>{formData.quantity || "Not specified"}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Timeframe:</span>
                    <span className={styles.reviewValue}>{formData.timeframe}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Frequency:</span>
                    <span className={styles.reviewValue}>{formData.frequency}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Logistics:</span>
                    <span className={styles.reviewValue}>{formData.pickupArrangements || "Not specified"}</span>
                  </div>
                </div>
              </div>

              <div className={styles.commitmentBox}>
                <p className={styles.commitmentText}>
                  ✓ By submitting this request, you confirm that this organization is legitimate and in genuine need of food assistance.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className={styles.buttonContainer}>
            {formStep > 1 && (
              <button type="button" onClick={handlePrev} className={styles.prevBtn}>
                ← Previous
              </button>
            )}
            {formStep < 3 && (
              <button type="button" onClick={handleNext} className={styles.nextBtn}>
                Next →
              </button>
            )}
            {formStep === 3 && (
              <button type="submit" className={styles.submitBtn}>
                Submit Request
              </button>
            )}
          </div>
        </form>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h3 className={styles.benefitsTitle}>How GrainShare Helps Organizations</h3>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔗</div>
              <h4 className={styles.benefitCardTitle}>Connect with Donors</h4>
              <p className={styles.benefitCardText}>Access a network of generous food donors</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>⚡</div>
              <h4 className={styles.benefitCardTitle}>Quick Response</h4>
              <p className={styles.benefitCardText}>Get matched with donors within 24 hours</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💪</div>
              <h4 className={styles.benefitCardTitle}>Reliable Supply</h4>
              <p className={styles.benefitCardText}>Build consistent food support programs</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📊</div>
              <h4 className={styles.benefitCardTitle}>Track Impact</h4>
              <p className={styles.benefitCardText}>Monitor and measure your distribution impact</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
