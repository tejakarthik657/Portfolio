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
    { icon: <Phone className="w-4 h-4" />,  title: 'Phone',     value: '+91 76739 23505' },
    { icon: <Mail className="w-4 h-4" />,   title: 'Email',     value: 'teja.karthik.5505@gmail.com' },
    { icon: <FaGithub className="w-4 h-4" />, title: 'GitHub', value: (
        <a href="https://github.com/tejakarthik657" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          github.com/tejakarthik657
        </a>
      )
    },
    { icon: <FaDiscord className="w-4 h-4" />, title: 'LinkedIn', value: (
        <a href="https://www.linkedin.com/in/karthik-kona-dev/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          linkedin.com/in/karthik-kona-dev
        </a>
      )
    },
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
    `w-full px-4 py-3 bg-[#050505] border rounded-sm text-white placeholder-mono-700 text-sm font-mono tracking-wide focus:outline-none transition-all duration-500 focus:shadow-[inset_0_0_20px_rgba(255,255,255,0.03)] ${
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
                  className={`w-full flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold rounded-sm tracking-wider uppercase transition-all duration-300 relative overflow-hidden group ${
                    formStatus === 'success'
                      ? 'bg-[#050505] border border-green-500/40 text-green-400'
                      : formStatus === 'error'
                      ? 'bg-[#050505] border border-red-500/40 text-red-400'
                      : 'bg-white text-[#080808] hover:bg-mono-200'
                  }`}
                  whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                >
                  {formStatus === 'submitting' ? (
                    <span className="font-mono text-xs tracking-widest uppercase animate-pulse text-mono-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-mono-400 animate-ping rounded-full" />
                      [SYS] Transmitting packets...
                    </span>
                  ) : formStatus === 'success' ? (
                    <span className="font-mono text-xs tracking-widest uppercase text-green-400">
                      [OK] Transmission Successful
                    </span>
                  ) : formStatus === 'error' ? (
                    <span className="font-mono text-xs tracking-widest uppercase text-red-400">
                      [ERR] Transmission Failed
                    </span>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-mono-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <span className="relative z-10 flex items-center gap-3 group-hover:animate-glitch-anim">
                        <SendHorizonal className="h-4 w-4" />
                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Initialize Transmission</span>
                      </span>
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
