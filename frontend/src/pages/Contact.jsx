import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useGsapAnimations';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/UI/button';
import { Input } from '@/components/UI/input';
import { Textarea } from '@/components/UI/textarea';
import { toast } from 'sonner';
import styles from './Contact.module.css';

const Contact = () => {
  useScrollReveal('.reveal', { y: 60, stagger: 0.12 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const WHATSAPP_NUMBER = '919284511499';

  const productCategories = [
    'Display Counters',
    'Kitchen Equipment',
    'Food Carts',
    'Custom Solution',
    'General Inquiry'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    // Create formatted WhatsApp message
    const messageLines = [
      '*New Inquiry from Website*',
      '',
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
    ];

    if (formData.email) {
      messageLines.push(`*Email:* ${formData.email}`);
    }

    if (formData.productInterest) {
      messageLines.push(`*Interested In:* ${formData.productInterest}`);
    }

    messageLines.push('', '*Message:*', formData.message);

    const whatsappMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    toast.success('Redirecting to WhatsApp...');
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        productInterest: '',
        message: ''
      });
      setErrors({});
    }, 500);
  };

  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'info@abidnagpur.com',
      link: 'mailto:info@abidnagpur.com'
    },
    {
      icon: <MapPin size={28} />,
      title: 'Address',
      value: 'Gandhibagh, Nagpur, Maharashtra 440002',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className={styles.contact} data-testid="contact-page">
      <section className={styles.hero} data-testid="contact-hero">
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className="reveal">Get In Touch</h1>
          <p className="reveal">We're here to help with your refrigeration needs</p>
        </div>
      </section>

      <section className={styles.content} data-testid="contact-content">
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={`${styles.infoSection} reveal`}>
              <h2>Contact Information</h2>
              <p className={styles.infoText}>
                Have a question or need a custom solution? Reach out to us through any of the channels below.
              </p>
              
              <div className={styles.infoCards}>
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className={styles.infoCard}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    data-testid={`contact-info-${index}`}
                  >
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <div className={styles.infoContent}>
                      <div className={styles.infoTitle}>{info.title}</div>
                      <div className={styles.infoValue}>{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className={styles.whatsapp}>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                  data-testid="whatsapp-btn"
                >
                  <MessageCircle size={24} />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${styles.formSection} reveal`}>
              <form onSubmit={handleSubmit} className={styles.form} data-testid="contact-form">
                <h2>Send us a Message</h2>
                <p className={styles.formSubtext}>Fill the form and click send to continue on WhatsApp</p>
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your full name"
                    data-testid="name-input"
                  />
                  {errors.name && (
                    <span className={styles.error}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="10-digit mobile number"
                      data-testid="phone-input"
                    />
                    {errors.phone && (
                      <span className={styles.error}>{errors.phone}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="your@email.com (optional)"
                      data-testid="email-input"
                    />
                    {errors.email && (
                      <span className={styles.error}>{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="productInterest">Interested In</label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select a category (optional)</option>
                    {productCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell us about your requirements..."
                    data-testid="message-textarea"
                  />
                  {errors.message && (
                    <span className={styles.error}>{errors.message}</span>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className={styles.submitBtn}
                  data-testid="submit-btn"
                >
                  <Send size={18} />
                  <span>Send via WhatsApp</span>
                </Button>

                <p className={styles.disclaimer}>
                  By clicking send, you'll be redirected to WhatsApp with your message pre-filled
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.map} data-testid="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.156!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ1LjAiTiA3OcKwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Abid Refrigeration Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;