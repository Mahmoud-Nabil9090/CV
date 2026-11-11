import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MonitorCog, 
  Code2, 
  Settings, 
  Database, 
  Network, 
  Terminal,
  Cpu,
  Layers,
  Globe,
  CheckCircle2
} from 'lucide-react'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend')

  const categories = [
    {
      id: 'frontend',
      label: 'Frontend Core',
      icon: <MonitorCog size={18} />,
      color: 'from-cyan-400 to-blue-500',
      shadow: 'shadow-cyan-500/10',
      borderColor: 'hover:border-cyan-500/30',
      description: 'Building immersive, high-performance, and responsive user interfaces.'
    },
    {
      id: 'systems',
      label: 'Frappe & ERPNext',
      icon: <Settings size={18} />,
      color: 'from-purple-500 to-indigo-600',
      shadow: 'shadow-purple-500/10',
      borderColor: 'hover:border-purple-500/30',
      description: 'Configuring custom workflows, ERP architectures, and backend scripting.'
    },
    {
      id: 'infrastructure',
      label: 'IT & Infrastructure',
      icon: <Network size={18} />,
      color: 'from-blue-500 to-emerald-500',
      shadow: 'shadow-blue-500/10',
      borderColor: 'hover:border-blue-500/30',
      description: 'Managing secure servers, network infrastructure, and data integrity.'
    }
  ]

  const skillsData = {
    frontend: [
      { name: 'React.js Development', level: 'Advanced', icon: <Cpu size={16} /> },
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: <Code2 size={16} /> },
      { name: 'Tailwind CSS v4', level: 'Expert', icon: <Layers size={16} /> },
      { name: 'Responsive Design', level: 'Expert', icon: <Globe size={16} /> },
      { name: 'HTML5 & CSS3 Standard', level: 'Expert', icon: <Terminal size={16} /> },
      { name: 'Bootstrap & UI Libraries', level: 'Intermediate', icon: <Layers size={16} /> },
    ],
    systems: [
      { name: 'ERPNext Customization', level: 'Advanced', icon: <Settings size={16} /> },
      { name: 'Frappe Framework', level: 'Advanced', icon: <Cpu size={16} /> },
      { name: 'Python Programming', level: 'Intermediate', icon: <Code2 size={16} /> },
      { name: 'DocTypes & Workflows', level: 'Advanced', icon: <Layers size={16} /> },
      { name: 'Server & Client Scripting', level: 'Advanced', icon: <Terminal size={16} /> },
      { name: 'MariaDB & SQL Queries', level: 'Advanced', icon: <Settings size={16} /> },
    ],
    infrastructure: [
      { name: 'Network Administration', level: 'Advanced', icon: <Database size={16} /> },
      { name: 'Cisco Switching', level: 'Intermediate', icon: <Network size={16} /> },
      { name: 'Windows Server Admin', level: 'Intermediate', icon: <Terminal size={16} /> },
      { name: 'IT Support & Hardware', level: 'Advanced', icon: <Settings size={16} /> },
      { name: 'Network Troubleshooting', level: 'Advanced', icon: <Network size={16} /> },
      { name: 'Systems Documentation', level: 'Expert', icon: <Layers size={16} /> },
    ]
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  }

  const activeCategory = categories.find(cat => cat.id === activeTab)

  return (
    <section
      id="skills"
      className="relative min-h-screen  text-white px-6 py-24 border-t border-white/5"
    >
      <div className="ambient-glow bg-purple-500/5 top-[30%] left-[20%]" />
      
      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            My <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto"
          />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-lg">
            A comprehensive overview of my expertise, organized by core domains to represent my full versatility.
          </p>
        </div>

        {/* Tab Selection buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive 
                    ? 'text-slate-950 z-10 shadow-lg ' + cat.shadow
                    : 'glass-panel text-slate-400 hover:text-white border-white/5 hover:border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className={`absolute inset-0 bg-linear-to-r ${cat.color} rounded-xl -z-10`}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Category Description */}
        <div className="text-center mb-10 max-w-2xl mx-auto min-h-12.5">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-slate-300 text-lg italic"
            >
              "{activeCategory.description}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillCardVariants}
                whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.15)' }}
                className={`glass-panel p-6 rounded-xl border border-white/5 flex items-center gap-4 transition-all duration-300 group ${activeCategory.borderColor}`}
              >
                {/* Icon Container */}
                <div className={`p-3.5 bg-linear-to-r ${activeCategory.color} rounded-lg text-slate-950 font-bold group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>

                {/* Text Info */}
                <div className="flex-1">
                  <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span className="text-xs font-semibold text-slate-400">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Skills
