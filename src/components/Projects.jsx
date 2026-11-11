import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend UI' },
    { id: 'systems', label: 'ERP & Systems' },
  ]

  const projects = [
    {
      title: "Interactive E-Commerce Hub",
      description: "A premium responsive e-commerce web application featuring high-fidelity animations, a global Redux cart system, dynamic product filtering, and Stripe API integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      tech: ["React.js", "Tailwind CSS v4", "Redux Toolkit", "Framer Motion"],
      category: "frontend",
      demo: "#",
      github: "#",
    },
    {
      title: "ERPNext Custom Client Portal",
      description: "A tailored customer dashboard serving as a bridge between React and Frappe REST APIs. Features visual workflow tracking, custom PDF report generations, and secure profile management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Frappe API", "Tailwind CSS", "Recharts"],
      category: "systems",
      demo: "#",
      github: "#",
    },
    {
      title: "Enterprise Inventory Dashboard",
      description: "A high-performance responsive admin control panel integrated with MariaDB database tracking real-time ERPNext data metrics, stock forecasts, and supplier communications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Tailwind CSS", "MariaDB", "Python Scripts"],
      category: "systems",
      demo: "#",
      github: "#",
    },
    {
      title: "Portfolio & Creative Lab",
      description: "This portfolio layout built as an interactive showcase, implementing glassmorphism styling, Framer Motion transitions, custom responsive drawers, and SEO benchmarks.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
      category: "frontend",
      demo: "#",
      github: "#",
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0b0f19] text-white px-6 py-24 border-t border-white/5"
    >
      <div className="ambient-glow bg-cyan-500/5 bottom-[10%] right-[20%]" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            My Featured <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto"
          />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-lg">
            A curated selection of my work spanning frontend interfaces, database reports, and custom enterprise tools.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {filterCategories.map((cat) => {
            const isActive = filter === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'text-slate-950 z-10 shadow-md shadow-cyan-500/10'
                    : 'glass-panel text-slate-400 hover:text-white border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid with layout animation */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-400/30 transition-colors duration-300 group flex flex-col h-full shadow-xl shadow-black/10"
              >
                {/* Image Wrap */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Sparkles size={12} className="animate-pulse" />
                    {project.category === 'frontend' ? 'Frontend' : 'Systems'}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed flex grow">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="bg-white/5 border border-white/5 text-slate-300 px-3 py-1 rounded-lg text-xs font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    <a
                      href={project.demo}
                      className="flex-1 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-2.5 rounded-xl text-center text-sm shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.github}
                      className="flex-1 border border-white/10 hover:border-cyan-500/40 text-cyan-400 font-bold py-2.5 rounded-xl text-center text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-1.5"
                    >
                      <FaGithub size={15} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects