import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import CustomCursor from './components/ui/CustomCursor';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen w-full bg-white dark:bg-dark-950">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
            <About />
            <Skills />
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