import React, { useState } from 'react';
import { Mail, Phone, CheckCircle2, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/Icons';
import { contactDetails } from '../../data/socialLinks';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto trigger with pre-filled content
    const subject = encodeURIComponent(`[${formData.projectType}] Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Large Rounded Glass Container */}
        <div className="glass-section-container contact-glass-card">
          <div className="contact-two-column-grid">
            {/* Left Column: Narrative & Direct Channels */}
            <div className="contact-left-col">
              <span className="eyebrow-badge">LET'S CONNECT</span>

              <h2 className="contact-headline">
                HAVE A PRODUCT<br />
                <span className="text-accent-highlight">IN MIND?</span>
              </h2>

              <p className="contact-substatement">
                Let's turn the idea into something useful, responsive and production-ready.
              </p>

              {/* Direct Channels List */}
              <div className="contact-channels-wrapper">
                <span className="channels-label">Direct Communication:</span>
                
                <div className="channels-pill-grid">
                  <a href={`mailto:${contactDetails.email}`} className="channel-pill-item">
                    <span className="channel-icon-pill"><Mail size={16} /></span>
                    <div className="channel-meta">
                      <span className="ch-type">Email</span>
                      <strong className="ch-val">{contactDetails.email}</strong>
                    </div>
                  </a>

                  <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="channel-pill-item">
                    <span className="channel-icon-pill"><Phone size={16} /></span>
                    <div className="channel-meta">
                      <span className="ch-type">Phone</span>
                      <strong className="ch-val">{contactDetails.phone}</strong>
                    </div>
                  </a>

                  <a href={contactDetails.linkedinUrl} target="_blank" rel="noopener noreferrer" className="channel-pill-item">
                    <span className="channel-icon-pill"><LinkedinIcon size={16} /></span>
                    <div className="channel-meta">
                      <span className="ch-type">LinkedIn</span>
                      <strong className="ch-val">in/mathankumar2467</strong>
                    </div>
                  </a>

                  <a href={contactDetails.githubUrl} target="_blank" rel="noopener noreferrer" className="channel-pill-item">
                    <span className="channel-icon-pill"><GithubIcon size={16} /></span>
                    <div className="channel-meta">
                      <span className="ch-type">GitHub</span>
                      <strong className="ch-val">MathanKumarMP</strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-right-col">
              <div className="contact-form-glass-card">
                <div className="form-heading-row">
                  <h3 className="form-card-title">Send a Direct Message</h3>
                  <span className="form-status-ping">
                    <span className="ping-dot" />
                    <span>Quick Response</span>
                  </span>
                </div>

                {submitted ? (
                  <div className="form-success-alert">
                    <CheckCircle2 size={24} className="text-green" />
                    <div>
                      <h4 className="success-title">Message Prepared</h4>
                      <p className="success-desc">Your email client has been launched with your project details. Thank you!</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-actual-form">
                    <div className="form-field-group">
                      <label htmlFor="form-name" className="field-label">Name</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        className="field-input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="form-email" className="field-label">Email</label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        className="field-input"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="form-project-type" className="field-label">Project Type</label>
                      <select
                        id="form-project-type"
                        className="field-input field-select"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option value="Web Application">Web Application</option>
                        <option value="Admin Platform / Dashboard">Admin Platform / Dashboard</option>
                        <option value="Boutique Ecommerce">Boutique Ecommerce</option>
                        <option value="Business Website">Business Website</option>
                        <option value="Full-Stack System">Full-Stack System</option>
                        <option value="Other Inquiries">Other Inquiries</option>
                      </select>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="form-message" className="field-label">Message</label>
                      <textarea
                        id="form-message"
                        required
                        rows={4}
                        className="field-input field-textarea"
                        placeholder="Tell me about your product requirements, timelines, or technology needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="form-pill-submit">
                      <span>Send Message →</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
