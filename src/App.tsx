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

const TerminalLoader = () => {
  const [lines, setLines] = React.useState<string[]>([]);
  React.useEffect(() => {
    const bootSequence = [
      '[SYS] Initializing core environment...',
      '[OK] V8 Engine mounted',
      '[SYS] Establishing secure connection...',
      '[OK] WebSocket connected',
      '[SYS] Fetching user topology...',
      '[OK] Data loaded successfully',
      '[SYS] Rendering DOM...'
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#080808] p-6">
      <div className="w-full max-w-md bg-[#050505] border border-white/10 rounded-sm p-6 h-64 overflow-hidden relative shadow-[0_0_30px_rgba(255,255,255,0.02)]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5" />
        <div className="flex flex-col gap-2.5">
          {lines.map((line, idx) => (
            <span key={idx} className={`font-mono text-[11px] tracking-widest uppercase ${line.startsWith('[OK]') ? 'text-green-400/80' : 'text-mono-500'}`}>
              {line}
            </span>
          ))}
          <span className="font-mono text-xs text-white animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-[#080808] min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main>
          <Suspense fallback={<TerminalLoader />}>
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