
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  Code, 
  Database, 
  Layout, 
  GitBranch, 
  Terminal, 
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Globe,
  Cpu
} from 'lucide-react';
import { PasteableImage } from './components/PasteableImage';

// --- CONFIGURATION ---
// Paste your EmailJS IDs here after signing up at https://www.emailjs.com/
const EMAILJS_CONFIG = {
  SERVICE_ID: "YOUR_SERVICE_ID", // Change this
  TEMPLATE_ID: "YOUR_TEMPLATE_ID", // Change this
  PUBLIC_KEY: "YOUR_PUBLIC_KEY" // Change this
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const skills = {
    frontend: ['ReactJS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
    backend: ['Spring Boot', 'Java', 'Python', 'RESTful APIs', 'PostgreSQL'],
    tools: ['Git', 'Docker', 'Linux', 'VS Code', 'Postman']
  };

  const projects = [
    {
      title: "INSA SecureVote",
      desc: "A secure, professional, LAN-based election management system built for INSA. Features 3-step guided voting, QR code ID cards, real-time results, and robust security including CSRF and scrypt hashing.",
      tags: ["Python", "Flask", "PostgreSQL", "JavaScript"],
      github: "https://github.com/Ka3y/election_system",
      image: "/insa-securevote.jpg"
    },
    {
      title: "Digital Student Management",
      desc: "Full-stack system for academic tracking built with Spring Boot and React. Features complex DB relationships and secure role-based access.",
      tags: ["Spring Boot", "PostgreSQL", "React", "JWT"],
      github: "https://github.com/Ka3y/digital-student-management",
      image: "/student-management.jpg"
    },
    {
      title: "Daycare Website",
      desc: "A modern, responsive platform focusing on heavy UI/UX optimization for parents. Integrated scheduling and teacher-parent communication modules.",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/Ka3y/daycare-website",
      image: "/daycare-website.jpg"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              K
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Kalkidan Yishak</span>
          </motion.div>

          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full glass hover:scale-110 transition-transform bg-slate-100 dark:bg-slate-800"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Cpu className="w-3 h-3" /> 4th Year Computer Engineering @ BDU
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Robust</span> Solutions.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
                Senior student passionate about full-stack development. I bridge the gap between elegant React frontends and complex Spring Boot backends.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95">
                  Let's Connect
                </a>
                <div className="flex items-center gap-3 px-2">
                  <a href="https://github.com/Ka3y" target="_blank" className="p-3 glass rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"><Github className="w-6 h-6" /></a>
                  <a href="https://linkedin.com/in/kalkidan-yishak" target="_blank" className="p-3 glass rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"><Linkedin className="w-6 h-6" /></a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 glass rounded-2xl flex items-center justify-center transform rotate-12 z-10">
                  <Code className="text-blue-500 w-10 h-10" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 glass rounded-2xl flex items-center justify-center transform -rotate-12 z-10">
                  <Database className="text-indigo-500 w-10 h-10" />
                </div>
                
                <PasteableImage 
                  rounded="full" 
                  className="w-full h-full shadow-2xl border-4 border-white dark:border-slate-800"
                  placeholderText="Paste Profile Pic"
                  defaultImage="/profile.jpg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-100/50 dark:bg-slate-900/20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Competencies</h2>
              <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Frontend Architecture', icon: Layout, skills: skills.frontend, color: 'text-blue-500' },
                { title: 'Backend Systems', icon: Terminal, skills: skills.backend, color: 'text-emerald-500' },
                { title: 'Developer Tooling', icon: GitBranch, skills: skills.tools, color: 'text-amber-500' }
              ].map((group, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-8 glass rounded-2xl transition-all"
                >
                  <group.icon className={`w-12 h-12 mb-6 ${group.color}`} />
                  <h3 className="text-xl font-bold mb-6">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Projects</h2>
                <p className="text-slate-500 dark:text-slate-400">Engineering practical solutions for real-world problems.</p>
              </div>
              <a href="https://github.com/Ka3y" className="flex items-center gap-2 font-semibold text-blue-500 hover:underline">
                View GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <PasteableImage 
                    aspectRatio="video" 
                    className="mb-6 rounded-2xl" 
                    placeholderText={`Paste ${project.title} Screenshot`}
                    defaultImage={project.image}
                  />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex items-center gap-4">
                    <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:opacity-70">
                      <Github className="w-5 h-5" /> Source Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
          {/* Abstract background blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's build <br/> something great.</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-md">
                I'm currently looking for new opportunities in full-stack engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center">
                    <Mail className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-semibold">Promishena2565@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center">
                    <Globe className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-semibold">Bahir Dar, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-3xl border-white/5">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("EmailJS Integration Ready! Update constants in App.tsx with your credentials to enable.");
                }} 
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Your Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Your Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Subject</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Project Inquiry" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="How can I help you?" required></textarea>
                </div>
                <button className="w-full py-4 bg-white text-midnight rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all active:scale-95">
                  Send Message <MessageSquare className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Kalkidan Yishak. Built with React & Spring Boot Energy.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Ka3y" className="text-slate-500 hover:text-blue-500 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/kalkidan-yishak" className="text-slate-500 hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#home" className="text-slate-500 hover:text-blue-500 transition-colors"><ChevronRight className="w-5 h-5 -rotate-90" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
