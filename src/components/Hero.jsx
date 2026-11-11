import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, Sparkles, Terminal, ArrowDown, ExternalLink } from 'lucide-react'
import CV from '../assets/CV.pdf'

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animateReverse: {
      y: [0, 15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-12"
    >
      {/* Ambient background glows */}
      <div className="ambient-glow bg-cyan-500/20 top-25 left-25" />
      <div className="ambient-glow bg-purple-500/20 bottom-25 right-25" />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left: Headline & Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left space-y-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} className="animate-pulse" />
            <span>Open to Work & Freelance</span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-xl md:text-2xl font-medium text-slate-300">
              Hello, I am
            </h3>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
              <span className="bg-linear-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">Mahmoud</span>{' '}
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Nabil</span>
            </h1>
          </motion.div>

          {/* Typing Role */}
          <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-bold text-slate-300 min-h-10 flex items-center">
            <span className="mr-2 text-cyan-500 font-mono">&gt;</span>
            <TypeAnimation
              sequence={[
                'Front-End Developer',
                1500,
                'ERPNext Developer',
                1500,
                
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-white hover:text-cyan-400 transition-colors"
            />
          </motion.div>

          {/* Bio Description */}
          <motion.p variants={itemVariants} className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed">
            I craft clean-coded, fluidly animated interface systems. Specializing in modern web standards, React architectures, and custom enterprise automation systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowDown size={18} className="animate-bounce" />
            </a>

            <a
              href={CV}
              download="Mahmoud_Nabil_CV.pdf"
              className="px-8 py-3.5 glass-panel hover:bg-white/5 border border-white/10 hover:border-cyan-500/40 text-cyan-400 font-bold rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 shadow-inner"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Code Mockup & Floating UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Floating UI Elements for developer aesthetics */}
          
          {/* Back Glowing Circle */}
          <div className="absolute w-72 h-72 bg-linear-to-tr from-cyan-500 to-purple-600 rounded-full blur-[60px] opacity-20 animate-pulse" />

          {/* Interactive Code Window */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="w-full max-w-md glass-panel rounded-2xl overflow-hidden shadow-2xl relative border border-white/10 glow-cyan"
          >
            {/* Window header */}
            <div className="px-4 py-3 bg-slate-950/60 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Terminal size={12} className="text-cyan-400" />
                <span>Developer.jsx</span>
              </div>
              <div className="w-10" />
            </div>

            {/* Window code content */}
            <pre className="p-5 text-sm font-mono overflow-x-auto text-left leading-relaxed">
              <code>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">developer</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-white">{'{'}</span>
                {'\n  '}
                <span className="text-slate-400">name:</span>{' '}
                <span className="text-emerald-300">'Mahmoud Nabil'</span>,
                {'\n  '}
                <span className="text-slate-400">role:</span>{' '}
                <span className="text-emerald-300">'Frontend Engineer'</span>,
                {'\n  '}
                <span className="text-slate-400">stack:</span>{' '}
                <span className="text-cyan-400">['React', 'Tailwind', 'JS']</span>,
                {'\n  '}
                <span className="text-slate-400">systems:</span>{' '}
                <span className="text-purple-400">['ERPNext', 'Frappe']</span>,
                {'\n  '}
                <span className="text-slate-400">loves:</span>{' '}
                <span className="text-rose-400">'Modern UI/UX & Motion'</span>,
                {'\n  '}
                <span className="text-slate-400">motto:</span>{' '}
                <span className="text-emerald-300">
                  'Clean code. Smooth motion.'
                </span>
                {'\n'}
                <span className="text-white">{'}'}</span>
                {'\n\n'}
                <span className="text-purple-400">while</span>{' '}
                <span className="text-white">(</span>
                <span className="text-blue-400">developer</span>
                <span className="text-white">.</span>
                <span className="text-amber-300">isCoding</span>
                <span className="text-white">) {'{'}</span>
                {'\n  '}
                <span className="text-blue-400">developer</span>
                <span className="text-white">.</span>
                <span className="text-cyan-400">animateWorld</span>
                <span className="text-white">();</span>
                {'\n'}
                <span className="text-white">{'}'}</span>
              </code>
            </pre>
          </motion.div>

          {/* Floating badge 1: React tag */}
          <motion.div
            variants={floatingVariants}
            animate="animateReverse"
            className="absolute top-5 right-5 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 border border-cyan-400/30 shadow-lg text-cyan-400 text-xs font-mono font-bold"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span>React.js</span>
          </motion.div>

          {/* Floating badge 2: Frappe/Python */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-3.75 left-5 glass-panel px-4 py-2 rounded-xl flex items-center border border-purple-400/30 shadow-lg text-purple-400 text-xs font-mono font-bold"
          >
            <span className="w-2.5 h-2.5  rounded-full bg-purple-400 animate-pulse" />
            <span>ERPNext & Python</span>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default Hero