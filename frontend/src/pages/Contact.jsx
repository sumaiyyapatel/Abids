import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useGsapAnimations';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
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
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setLoading(false);
    }, 1500);
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
                  href="https://wa.link/ah95hi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                  data-testid="whatsapp-btn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${styles.formSection} reveal`}>
              <form onSubmit={handleSubmit} className={styles.form} data-testid="contact-form">
                <h2>Send us a Message</h2>
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    data-testid="name-input"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    data-testid="email-input"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    data-testid="phone-input"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                    data-testid="message-textarea"
                  />
                </div>

                <Button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={loading}
                  data-testid="submit-btn"
                >
                  {loading ? 'Sending...' : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
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