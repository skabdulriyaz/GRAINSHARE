"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import styles from "./DonateFood.module.css";

export default function DonateFood() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    foodItem: "",
    quantity: "",
    unit: "kg",
    pickupDate: "",
    pickupTime: "",
    notes: "",
    location: "",
    contact: "",
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
    console.log("Donation submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black">
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Make a Difference Today</h1>
            <p className={styles.heroSubtitle}>
              Your surplus food can transform lives. Share what you have with those who need it most.
            </p>
          </div>
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Donations Made</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50K+</div>
              <div className={styles.statLabel}>Lives Impacted</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Free to Use</div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className={styles.progressContainer}>
          <div className={`${styles.step} ${formStep >= 1 ? styles.active : ""}`}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepLabel}>Food Details</div>
          </div>
          <div className={styles.progressLine}></div>
          <div className={`${styles.step} ${formStep >= 2 ? styles.active : ""}`}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepLabel}>Timing & Location</div>
          </div>
          <div className={styles.progressLine}></div>
          <div className={`${styles.step} ${formStep >= 3 ? styles.active : ""}`}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepLabel}>Review & Submit</div>
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Step 1: Food Details */}
          {formStep === 1 && (
            <div className={styles.formStep}>
              <h2 className={styles.stepTitle}>Tell us about your donation</h2>
              <p className={styles.stepDescription}>What food items would you like to donate?</p>

              <div className={styles.formGroup}>
                <label className={styles.label}>Food Item Name *</label>
                <input
                  className={styles.input}
                  placeholder="e.g. Fresh Bread, Rice, Vegetables, Canned Goods, etc."
                  type="text"
                  name="foodItem"
                  value={formData.foodItem}
                  onChange={handleChange}
                  required
                />
                <p className={styles.hint}>Be specific about the type and condition of food</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className={styles.formGroup}>
                  <label className={styles.label}>Quantity *</label>
                  <input
                    className={styles.input}
                    placeholder="e.g. 50"
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Unit *</label>
                  <select
                    className={styles.input}
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    required
                  >
                    <option>kg</option>
                    <option>lbs</option>
                    <option>boxes</option>
                    <option>items</option>
                    <option>liters</option>
                    <option>pieces</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Additional Details</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Expiry date, ingredients, allergen info, storage instructions, etc."
                  rows="3"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {/* Step 2: Timing & Location */}
          {formStep === 2 && (
            <div className={styles.formStep}>
              <h2 className={styles.stepTitle}>When and where can we pick it up?</h2>
              <p className={styles.stepDescription}>Help us arrange the logistics</p>

              <div className={styles.formGroup}>
                <label className={styles.label}>Your Location / Address *</label>
                <input
                  className={styles.input}
                  placeholder="e.g. 123 Main Street, City, State"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Contact Number *</label>
                <input
                  className={styles.input}
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className={styles.formGroup}>
                  <label className={styles.label}>Pickup Date *</label>
                  <input
                    className={styles.input}
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Preferred Time *</label>
                  <input
                    className={styles.input}
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {formStep === 3 && (
            <div className={styles.formStep}>
              <h2 className={styles.stepTitle}>Review Your Donation</h2>
              <p className={styles.stepDescription}>Please verify all details are correct</p>

              <div className={styles.reviewBox}>
                <div className={styles.reviewSection}>
                  <h3 className={styles.reviewTitle}>Food Details</h3>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Item:</span>
                    <span className={styles.reviewValue}>{formData.foodItem || "Not specified"}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Quantity:</span>
                    <span className={styles.reviewValue}>
                      {formData.quantity} {formData.unit}
                    </span>
                  </div>
                  {formData.notes && (
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Details:</span>
                      <span className={styles.reviewValue}>{formData.notes}</span>
                    </div>
                  )}
                </div>

                <div className={styles.reviewSection}>
                  <h3 className={styles.reviewTitle}>Pickup Information</h3>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Location:</span>
                    <span className={styles.reviewValue}>{formData.location || "Not specified"}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Date & Time:</span>
                    <span className={styles.reviewValue}>
                      {formData.pickupDate} at {formData.pickupTime || "Not specified"}
                    </span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Contact:</span>
                    <span className={styles.reviewValue}>{formData.contact || "Not specified"}</span>
                  </div>
                </div>
              </div>

              <div className={styles.commitmentBox}>
                <p className={styles.commitmentText}>
                  ✓ By submitting, you commit to making this food available for pickup at the specified time and location.
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
                Submit Donation
              </button>
            )}
          </div>
        </form>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h3 className={styles.benefitsTitle}>Why Donate with GrainShare?</h3>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🚚</div>
              <h4 className={styles.benefitCardTitle}>Easy Logistics</h4>
              <p className={styles.benefitCardText}>We handle coordination with recipients</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🤝</div>
              <h4 className={styles.benefitCardTitle}>Direct Impact</h4>
              <p className={styles.benefitCardText}>See how your donation helps communities</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>♻️</div>
              <h4 className={styles.benefitCardTitle}>Zero Waste</h4>
              <p className={styles.benefitCardText}>Prevent food from going to landfills</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>✅</div>
              <h4 className={styles.benefitCardTitle}>Safe & Verified</h4>
              <p className={styles.benefitCardText}>All donations are quality checked</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
