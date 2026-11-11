import React from 'react'
import { motion } from 'framer-motion'
import { User, Code, Award, Calendar } from 'lucide-react'
import logo from "../assets/WhatsApp Image 2026-08-02 at 11.10.14 PM.jpeg"

const About = () => {
  // Reveal animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  }

  const stats = [
    {
      icon: <Award className="text-cyan-400" size={24} />,
      title: "Experience",
      value: "1+ Years",
      desc: "Hands-on Development"
    },
    {
      icon: <Code className="text-purple-400" size={24} />,
      title: "Completed",
      value: "10+ Projects",
      desc: "Web Apps & Scripts"
    },
    {
      icon: <User className="text-blue-400" size={24} />,
      title: "Primary Stack",
      value: "React.js",
      desc: "Tailwind CSS & JS"
    }
  ]

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center text-white px-6 py-24 border-t border-white/5"
    >
      {/* Background glow overlay */}
      <div className="ambient-glow bg-blue-500/10 top-[20%] right-[10%]" />

      <div className="max-w-6xl w-full mx-auto z-10">
        
        {/* Title */}
        <div className="text-center md:text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            About <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto md:mx-0"
          />
        </div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-12 gap-12 items-center"
        >
          
          {/* Left: Avatar with interactive glow */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-80 md:w-88 md:h-96">
              {/* Spinning gradient frame */}
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-700 animate-tilt" />
              
              {/* Inner container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Mahmoud Nabil"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual glass overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-left font-mono text-xs text-cyan-400">
                    <p>&gt; Location: Egypt</p>
                    <p>&gt; Status: Active</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Description & Stats Cards */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-7 space-y-8 text-center md:text-left"
          >
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I am <span className="font-semibold text-white">Mahmoud Nabil</span>, a <span className="text-cyan-400 font-medium">front-end engineer</span> with a passion for designing slick, interactive, and responsive web applications. I bridge the gap between creative visual designs and high-performance clean code.
              </p>
              <p>
                Beyond my core focus in modern web stacks, I possess specialized knowledge in integrating custom business operations workflows through the <span className="text-cyan-400 font-medium">Frappe & ERPNext</span> ecosystem, giving me a broader perspective on enterprise software integration.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                  className="glass-panel p-5 rounded-xl border border-white/5 flex flex-col items-center md:items-start text-center md:text-left gap-3 transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                    <p className="text-sm font-semibold text-slate-400">{stat.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default About