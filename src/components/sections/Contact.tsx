import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1000);
  };

  const contactDetails = [
    {
      icon: <Mail size={16} className="text-zinc-400" />,
      title: 'Email',
      value: 'teja.karthik.5505@gmail.com',
      href: 'mailto:teja.karthik.5505@gmail.com',
    },
    {
      icon: <Phone size={16} className="text-zinc-400" />,
      title: 'Phone',
      value: '+91 76739 23505',
      href: 'tel:+917673923505',
    },
    {
      icon: <MapPin size={16} className="text-zinc-400" />,
      title: 'Location',
      value: 'Warangal, Telangana, India',
    },
    {
      icon: <FaLinkedin size={16} className="text-zinc-400" />,
      title: 'LinkedIn',
      value: 'karthik-kona',
      href: 'https://www.linkedin.com/in/karthik-kona-dev/',
    },
    {
      icon: <FaGithub size={16} className="text-zinc-400" />,
      title: 'GitHub',
      value: 'tejakarthik657',
      href: 'https://github.com/tejakarthik657',
    },
  ];

  const inputClass = (hasError: boolean) =>
    `w-full px-3.5 py-2.5 bg-[#101115] border rounded-md text-white placeholder-zinc-500 text-sm font-sans focus:outline-none transition-colors ${
      hasError ? 'border-red-500/80' : 'border-zinc-800 focus:border-zinc-500'
    }`;

  return (
    <section id="contact" className="py-24 bg-[#0d0e12] text-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
            <span>06 // Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Interested in backend engineering collaboration, agency project contracts via DevFrames,
            or full-time opportunities? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-lg border border-zinc-800 bg-[#121317]">
              <h3 className="font-sans font-semibold text-base text-white mb-4">
                Direct Contact Information
              </h3>
              <div className="space-y-4">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {detail.title}
                      </span>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-mono text-zinc-300 hover:text-white transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-sm font-mono text-zinc-300">{detail.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevFrames agency note */}
            <div className="p-5 rounded-lg border border-zinc-800 bg-[#121317]">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                Agency Inquiries
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                For custom software engineering, AI application prototypes, or full-stack platform
                development via <strong className="text-white">DevFrames</strong>, mention it in
                your message subject.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-lg border border-zinc-800 bg-[#121317] space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={inputClass(!!errors.name)}
                  />
                  {errors.name && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 block">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 block">{errors.email}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Consultation / Opportunity"
                  className={inputClass(false)}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  className={inputClass(!!errors.message)}
                />
                {errors.message && (
                  <span className="text-[11px] font-mono text-red-400 mt-1 block">{errors.message}</span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-950 font-sans font-semibold text-sm rounded-md hover:bg-zinc-200 transition-colors disabled:opacity-60"
                >
                  {formStatus === 'submitting' ? (
                    <span>Sending...</span>
                  ) : formStatus === 'success' ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-700">
                      <CheckCircle2 size={16} />
                      Message Delivered Successfully
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
