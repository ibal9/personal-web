
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "particles";
import particlesConfig from "./particles-config";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
    />
  );
};

export default ParticlesBackground;
