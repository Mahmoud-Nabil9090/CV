import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errors, setErrors] = useState({})

  const validate = () => {
    let tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = "Name is required"
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid"
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required"
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    
    // Simulate sending email (connected to backend or EmailJS easily)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1800)
  }

  const contactInfo = [
    {
      icon: <Mail className="text-cyan-400" size={20} />,
      label: "Email Me",
      value: "mahmoudlionabel@gmail.com", // Professional placeholder or editable
      href: "mahmoudlionabel@gmail.com"
    },
    {
      icon: <Phone className="text-purple-400" size={20} />,
      label: "Call Me",
      value: "+201011646496", // Placeholder
      href: "tel:+201011646496"
    },
    {
      icon: <MapPin className="text-blue-400" size={20} />,
      label: "Location",
      value: "Cairo, Egypt",
      href: "https://maps.google.com/?q=Cairo,Egypt"
    }
  ]

  const socials = [
    { icon: <FaGithub size={20} />, href: "https://github.com/Mahmoud-Nabil9090", color: "hover:text-white" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/mahmoud-nabil-bb7468166/", color: "hover:text-cyan-400" }
  ]

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-[#0b0f19] text-white px-6 py-24 border-t border-white/5"
    >
      <div className="ambient-glow bg-blue-500/5 top-[10%] left-[10%]" />
      
      <div className="max-w-6xl w-full mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Get In <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto"
          />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-lg">
            Have a project in mind or want to talk frontend/systems? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Info cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Let's discuss something great
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                I'm currently open to new career opportunities, freelance front-end projects, or custom business automation contracts. Let's build something beautiful and efficient.
              </p>
            </div>

            {/* Info items */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel p-5 rounded-xl border border-white/5 flex items-center gap-4 hover:border-cyan-500/20 hover:bg-slate-900/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h5 className="text-xs text-slate-500 uppercase font-semibold tracking-wider">{info.label}</h5>
                    <p className="text-sm font-bold text-slate-200 mt-0.5 group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-4 items-center">
              <span className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Follow me:</span>
              <div className="flex gap-2">
                {socials.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 bg-white/5 rounded-xl border border-white/5 text-slate-400 transition-all duration-300 ${soc.color} hover:border-white/20`}
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-2xl border border-white/5 shadow-2xl relative h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${
                            errors.name ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-cyan-400'
                          } text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/20 placeholder-slate-600 transition-all text-sm`}
                        />
                        {errors.name && (
                          <span className="text-xs text-rose-500 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="yourname@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${
                            errors.email ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-cyan-400'
                          } text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/20 placeholder-slate-600 transition-all text-sm`}
                        />
                        {errors.email && (
                          <span className="text-xs text-rose-500 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300">Subject (Optional)</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project consultation, Job offer..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 focus:border-cyan-400 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/20 placeholder-slate-600 transition-all text-sm"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell me about your project..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${
                          errors.message ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        } text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/20 placeholder-slate-600 transition-all text-sm resize-none`}
                      />
                      {errors.message && (
                        <span className="text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-20 h-20 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                      <p className="text-slate-400 text-sm max-w-sm mx-auto">
                        Thank you for reaching out. I have received your message and will respond as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 font-bold hover:text-white transition-all text-sm cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Contact
