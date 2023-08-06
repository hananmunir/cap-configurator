import { useEffect, useRef } from "react";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";

import Ylioppilaslakki from "./Cap_version_9";
import { Suspense } from "react";
import { gsap } from "gsap";
import { useTextStore } from "../Utils/textStore";

const ExperienceYlioppilaslakki = () => {
  const focus = useTextStore((state) => state.focus);
  const modelRef = useRef();
  useEffect(() => {
    if (focus === "back") {
      console.log("back");

      gsap.to(modelRef?.current?.rotation, {
        y: 3.14,
      });
    } else {
      gsap.to(modelRef?.current?.rotation, {
        y: 0,
      });
    }
  }, [focus]);
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
      <Stage intensity={0.6} castShadow={false}>
        <Ylioppilaslakki />
      </Stage>
    </Suspense>
  );
};

export default ExperienceYlioppilaslakki;
