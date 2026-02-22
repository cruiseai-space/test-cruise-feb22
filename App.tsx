import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ParticleBackground from './components/ui/ParticleBackground';
import LandingPage from './components/pages/LandingPage';
import CaseStudyPage from './components/pages/CaseStudyPage';
import ProjectsPage from './components/pages/ProjectsPage';
import LabsPage from './components/pages/LabsPage';
import ProtocolPage from './components/pages/ProtocolPage';
import PilotPage from './components/pages/PilotPage';
import Footer from './components/sections/Footer';
import { NAV_ITEMS } from './constants';
import { Menu, X } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-space-950/80 backdrop-blur-md border-slate-800 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold font-mono tracking-tighter text-white flex items-center gap-2 group">
            <div className="w-3 h-3 bg-neon-purple rounded-full group-hover:animate-pulse" />
            Cruise.ai
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              item.href.startsWith('/#') ? (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-xs font-mono text-slate-400 hover:text-neon-cyan transition-colors uppercase tracking-widest"
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.label} 
                  to={item.href}
                  className={`text-xs font-mono transition-colors uppercase tracking-widest ${
                    location.pathname === item.href ? 'text-neon-purple' : 'text-slate-400 hover:text-neon-cyan'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link 
                to="/protocol"
                className="px-4 py-2 text-xs font-mono font-bold bg-white text-black border border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded"
            >
                PROTOCOL_
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-space-900 border-b border-slate-800 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
                {NAV_ITEMS.map((item) => (
                    <Link 
                        key={item.label} 
                        to={item.href}
                        className="text-lg font-mono text-slate-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        )}
      </nav>
  );
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
        <Route path="/architecture" element={<PageWrapper><CaseStudyPage /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
        <Route path="/labs" element={<PageWrapper><LabsPage /></PageWrapper>} />
        <Route path="/protocol" element={<PageWrapper><ProtocolPage /></PageWrapper>} />
        <Route path="/pilot" element={<PageWrapper><PilotPage /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-space-950 text-slate-200 font-sans selection:bg-neon-purple/30 selection:text-white">
        
        {/* Dynamic Background */}
        <ParticleBackground />

        <NavBar />

        <main className="relative z-10">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;