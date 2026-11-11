import React from 'react'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-[#080b12] text-slate-400 py-12 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Logo & copyright */}
        <div className="text-center md:text-left">
          <p className="font-bold text-lg text-white">
            Mahmoud <span className="text-cyan-400">Nabil</span>.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            &copy; {currentYear} Mahmoud Nabil. All rights reserved.
          </p>
        </div>

        {/* Middle Side: Quick footer links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Side: Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-white/5 border border-white/10 hover:border-cyan-500/30 rounded-xl text-slate-400 hover:text-cyan-400 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-inner"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  )
}

export default Footer
