import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import CustomCursor from './components/ui/CustomCursor';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';

const Hero    = lazy(() => import('./components/sections/Hero'));
const About   = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact  = lazy(() => import('./components/sections/Contact'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen w-full bg-[#080808]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-6 h-6 rounded-sm border border-white/20 animate-pulse" />
      <span className="text-xs font-mono text-mono-600 tracking-widest uppercase">Loading</span>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-[#080808] min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;