import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Simple active link detection on scroll
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 200

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <a href="#home" className="relative group flex items-center gap-1.5 font-bold text-2xl tracking-tight text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
              Mahmoud
            </span>
            <span className="text-cyan-400 text-3xl leading-none">.</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`hover:text-white transition-colors duration-200 py-2 relative block ${
                    activeSection === link.id ? 'text-cyan-400' : ''
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-white/5 hover:bg-cyan-500/10 text-white border border-white/10 hover:border-cyan-500/30 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-inner"
            >
              <span>Hire Me</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 w-full z-40 md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-white/5 shadow-2xl py-6 px-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false)
                      setActiveSection(link.id)
                    }}
                    className={`block py-2 text-lg font-medium border-b border-white/5 hover:text-cyan-400 transition-colors ${
                      activeSection === link.id ? 'text-cyan-400' : 'text-slate-300'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Hire Me</span>
                  <ArrowRight size={16} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar