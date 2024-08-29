import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from '@mui/material/styles';

const BackgroundBg = ({ isDarkMode }) => {
  const theme = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: theme.palette.background.default,
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.8,
                width: 1,
              },
            },
          },
        },
        particles: {
          color: {
            value: theme.palette.primary.main,
          },
          links: {
            color: theme.palette.primary.main,
            distance: 175,
            enable: true,
            opacity: 0.5,
            width: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 },
          },
        },
        detectRetina: true,
      }}
      style={{
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundBg;
