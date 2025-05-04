import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendHorizonal, MapPin, Phone, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { FaDiscord, FaGithub  } from "react-icons/fa6";
function FloatingShape() {
  const meshRef = React.useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} castShadow receiveShadow>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshPhysicalMaterial
        color="#ff7254"
        roughness={0.25}
        clearcoat={0.3}
        clearcoatRoughness={0.1}
        reflectivity={0.8}
      />
    </mesh>
  );
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: 'Location',
      details: 'Telangana, India',
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: 'Phone',
      details: '+91 7989938520',
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: 'Email',
      details: 'nikhil.madaravena@gmail.com',
    },
    {
      icon: (
        <FaGithub className="w-6 h-6 text-white" />
      ),
      title: 'GitHub',
      details: (
        <a href="https://github.com/nikhil-madaravena" target="_blank" rel="noopener noreferrer" className="hover:underline">
          github.com/nikhil-madaravena
        </a>
      ),
    },
    {
      icon: (
        <FaDiscord className="w-6 h-6 text-white" />
      ),
      title: 'Discord',
      details: 'nyx.enigmatic',
    },
  ];
  

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Get In <span className="text-primary-500">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out and let's discuss how we can work together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div variants={itemVariants} className="h-full">
              <div className="bg-dark-50 dark:bg-dark-800 p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6 ml-8 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 p-3 bg-primary-500 rounded-full mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-primary-500">
                          {info.title}
                        </h4>
                        <p className="text-dark-600 dark:text-dark-300">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <div className="bg-white dark:bg-dark-900 p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-transparent border-2 rounded-lg focus:outline-none focus:ring-2 transition-all peer ${
                          errors.name
                            ? 'border-error-500 focus:border-error-500 focus:ring-error-500/30'
                            : 'border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-primary-500/30'
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-3 -top-2.5 bg-white dark:bg-dark-900 px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${
                          errors.name
                            ? 'text-error-500'
                            : 'text-dark-500 dark:text-dark-400 peer-focus:text-primary-500'
                        }`}
                      >
                        Name
                      </label>
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-error-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-transparent border-2 rounded-lg focus:outline-none focus:ring-2 transition-all peer ${
                          errors.email
                            ? 'border-error-500 focus:border-error-500 focus:ring-error-500/30'
                            : 'border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-primary-500/30'
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-3 -top-2.5 bg-white dark:bg-dark-900 px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${
                          errors.email
                            ? 'text-error-500'
                            : 'text-dark-500 dark:text-dark-400 peer-focus:text-primary-500'
                        }`}
                      >
                        Email
                      </label>
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-error-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border-2 border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 transition-all peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="subject"
                      className="absolute left-3 -top-2.5 bg-white dark:bg-dark-900 px-1 text-sm text-dark-500 dark:text-dark-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500"
                    >
                      Subject (Optional)
                    </label>
                  </div>

                  <div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 bg-transparent border-2 rounded-lg focus:outline-none focus:ring-2 transition-all peer ${
                          errors.message
                            ? 'border-error-500 focus:border-error-500 focus:ring-error-500/30'
                            : 'border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-primary-500/30'
                        }`}
                        placeholder=" "
                      ></textarea>
                      <label
                        htmlFor="message"
                        className={`absolute left-3 -top-2.5 bg-white dark:bg-dark-900 px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${
                          errors.message
                            ? 'text-error-500'
                            : 'text-dark-500 dark:text-dark-400 peer-focus:text-primary-500'
                        }`}
                      >
                        Message
                      </label>
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-500">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full px-6 py-3 flex items-center justify-center gap-2 font-medium rounded-lg shadow-lg ${
                      formStatus === 'success'
                        ? 'bg-success-500 text-white'
                        : formStatus === 'error'
                        ? 'bg-error-500 text-white'
                        : 'bg-primary-500 text-white hover:bg-primary-600'
                    } transition-colors`}
                    whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Message Sent!
                      </>
                    ) : formStatus === 'error' ? (
                      'Failed to Send'
                    ) : (
                      <>
                        <SendHorizonal className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
