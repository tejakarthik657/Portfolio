import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';

const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Agency = lazy(() => import('./components/sections/Agency'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Achievements = lazy(() => import('./components/sections/Achievements'));
const Contact = lazy(() => import('./components/sections/Contact'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh] w-full text-zinc-400 font-mono text-xs">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-zinc-400 animate-ping" />
      <span>Loading portfolio...</span>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-[#0d0e12] min-h-screen text-zinc-100 selection:bg-zinc-700 selection:text-white">
        <ScrollProgress />
        <Navbar />

        <main>
          <Suspense fallback={<PageLoader />}>
            <Hero />
            <About />
            <Skills />
            <Agency />
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
