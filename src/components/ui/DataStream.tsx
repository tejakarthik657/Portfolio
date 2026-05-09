import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export default function DataStream() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            enable: false,
          },
          move: {
            direction: 'top',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 0.5,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: { min: 0.1, max: 0.3 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            }
          },
          shape: {
            type: 'square',
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
