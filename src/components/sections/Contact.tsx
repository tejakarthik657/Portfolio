import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendHorizonal, MapPin, Phone, Mail } from 'lucide-react';
import { FaDiscord, FaGithub } from 'react-icons/fa6';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name.trim())  { newErrors.name = 'Name is required'; valid = false; }
    if (!formData.email.trim()) { newErrors.email = 'Email is required'; valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = 'Invalid email format'; valid = false; }
    if (!formData.message.trim()) { newErrors.message = 'Message is required'; valid = false; }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3500);
    }, 1500);
  };

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, title: 'Location',  value: 'Telangana, India' },
    { icon: <Phone className="w-4 h-4" />,  title: 'Phone',     value: '+91 7989938520' },
    { icon: <Mail className="w-4 h-4" />,   title: 'Email',     value: 'nikhil.madaravena@gmail.com' },
    { icon: <FaGithub className="w-4 h-4" />, title: 'GitHub', value: (
        <a href="https://github.com/nikhil-madaravena" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          github.com/nikhil-madaravena
        </a>
      )
    },
    { icon: <FaDiscord className="w-4 h-4" />, title: 'Discord', value: 'nyx.enigmatic' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.15, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 bg-transparent border rounded-sm text-white placeholder-mono-700 text-sm font-sans focus:outline-none transition-all duration-300 ${
      hasError
        ? 'border-red-500/50 focus:border-red-500'
        : 'border-white/10 focus:border-white/40'
    }`;

  return (
    <section id="contact" className="py-28 bg-[#080808] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-mono-600 tracking-widest uppercase">05 / Contact</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tighter leading-tight mb-4">
              Let's
              <span className="text-gradient"> Work Together</span>
            </h2>
            <p className="text-mono-500 max-w-xl leading-relaxed">
              Have a project in mind or just want to say hello? Reach out — I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="glass-card rounded-sm px-5 py-4 flex items-center gap-4 hover:border-white/20 transition-all duration-300">
                  <span className="text-mono-600 shrink-0">{info.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-mono-600 tracking-widest uppercase mb-0.5">{info.title}</p>
                    <p className="text-sm text-mono-300 truncate">{info.value}</p>
                  </div>
                </div>
              ))}

              {/* Availability note */}
              <div className="mt-4 p-5 rounded-sm border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-mono-500 tracking-widest uppercase">Open to work</span>
                </div>
                <p className="text-xs text-mono-600 leading-relaxed">
                  Currently available for freelance projects and full-time roles. Response within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject (Optional)"
                  className={inputClass(false)}
                />

                {/* Message */}
                <div>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={inputClass(!!errors.message)}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold rounded-sm tracking-wider uppercase transition-all duration-300 ${
                    formStatus === 'success'
                      ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                      : formStatus === 'error'
                      ? 'bg-red-500/20 border border-red-500/40 text-red-400'
                      : 'bg-white text-[#080808] hover:bg-mono-200'
                  }`}
                  whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Message Sent!
                    </>
                  ) : formStatus === 'error' ? (
                    'Failed to Send. Try again.'
                  ) : (
                    <>
                      <SendHorizonal className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Contact;
