import { useEffect, useRef } from "react";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";

import Ylioppilaslakki from "./Cap_version_9";
import { Suspense } from "react";
import { gsap } from "gsap";
import { useTextStore } from "../Utils/textStore";

const ExperienceYlioppilaslakki = () => {
  return (
    <Suspense fallback={null}>
      <OrbitControls
        //autoRotate
        enableDamping
        dampingFactor={0.1}
        looka
        //rotateSpeed={0.2}
        //minDistance={2} // Set minimum distance for zooming in
        maxDistance={8} // Set maximum distance for zooming out
      />
      <pointLight position={[10, 10, 10]} />
      <Stage intensity={0.9} castShadow={false}>
        <Ylioppilaslakki />
      </Stage>
    </Suspense>
  );
};

export default ExperienceYlioppilaslakki;
