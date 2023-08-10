/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 public/models/cap_version_0.gltf
*/

import { useState, useEffect, useRef } from "react";
import {
  useGLTF,
  Decal,
  Environment,
  RenderTexture,
  PerspectiveCamera,
} from "@react-three/drei";
import { useControls } from "leva";
import { useColorStore } from "../Utils/store";
import { useTextStore } from "../Utils/textStore";

import * as THREE from "three";
import { useThree, useFrame, extend } from "@react-three/fiber";
import { gsap } from "gsap";
import { Text as Troika } from "troika-three-text";
// Register Text as a react-three-fiber element
extend({ Troika });

function Ylioppilaslakki(props) {
  const activeColor = useColorStore((state) => state.activeColor);
  const textFrontLeft = useTextStore((state) => state.textFrontLeft);
  const textFrontRight = useTextStore((state) => state.textFrontRight);
  const textBack = useTextStore((state) => state.textBack);
  const font = useTextStore((state) => state.font);
  const focus = useTextStore((state) => state.focus);
  const modelRef = useRef();
  const { camera, scene, controls } = useThree();
  const [isFromBack, setIsFromBack] = useState(false);

  const [customization, setCustomization] = useState({
    badge: "fi",
    roundRibbonColor: "",
    cordColor: "black",
    embroideryTextFront: { left: "Your Text", right: "Your Text" },
    embroideryTextBack: "Your Text",
    size: "",
    quantity: 1,
    productStorage: "",
  });
  const { nodes, materials } = useGLTF("/models/cap_version_9-transformed.glb");
  const { pos, rotation, size, decalPos, textPos, repeat } = useControls({
    textPos: {
      value: [-30.499999999999986, -5.799999999999999, 0],
      step: 0.1,
    },
    repeat: {
      value: [0.9, 0.33],
      step: 0.01,
      min: 0,
    },
    pos: {
      value: [0, 0, 150],
      step: 0.1,
    },
    decalPos: {
      value: [-0.391, 0.36, -0.46],
      step: 0.1,
    },
    size: { value: 3, step: 0.01 },
    rotation: {
      value: [0, 0, 0],
      step: 0.01,
    },
  });

  const texture = new THREE.TextureLoader().load("/texture.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeat[0], repeat[1]);
  texture.anisotropy = 16;

  useEffect(() => {
    if (focus === "back") {
      gsap.to(camera.rotation, {
        y: 3.14,
        onStart: () => {
          gsap.fromTo(
            camera.position,
            { y: 1.5 },
            {
              z: -2,
              x: 0,
              y: 0,
              duration: 2,
            }
          );
        },
        duration: 2,
      });
      setIsFromBack(true);
    } else if (focus === "frontRight") {
      gsap.to(camera.rotation, {
        y: 0,
        onStart: () => {
          gsap.fromTo(
            camera.position,
            { y: isFromBack ? 1.2 : 0 },
            {
              z: 2,
              x: 1,
              y: 0,
              duration: 2,
            }
          );
        },
        duration: 2,
      });

      setIsFromBack(false);
    } else {
      gsap.to(camera.rotation, {
        y: 0,
        onStart: () => {
          gsap.fromTo(
            camera.position,
            { y: isFromBack ? 1.2 : 0 },
            {
              z: 2,
              x: -1,
              y: 0,
              duration: 2,
            }
          );
        },

        duration: 2,
      });
      setIsFromBack(false);
    }
  }, [focus]);

  return (
    <group {...props} dispose={null}>
      {/* decorative ribbon */}
      <mesh
        geometry={nodes.gold001.geometry}
        material={materials.stribe}
        visible={customization.roundRibbonColor === "gold"}
      />
      <mesh
        geometry={nodes.silver.geometry}
        material={materials["stribe.001"]}
        visible={customization.roundRibbonColor === "silver"}
      />

      {/* cord */}
      <mesh
        geometry={nodes.gold.geometry}
        material={materials["line 1"]}
        visible={customization.cordColor === "gold"}
      />
      <mesh
        geometry={nodes.silver001.geometry}
        material={materials["line 1.001"]}
        visible={customization.cordColor === "silver"}
      />
      <mesh
        geometry={nodes.black.geometry}
        material={materials["line 1.002"]}
        visible={customization.cordColor === "black"}
      />

      <mesh geometry={nodes.sloejfe.geometry} material={materials.sloejfe_m} />
      <mesh
        geometry={nodes.the_top_of_the_cap_.geometry}
        material={materials["outside white"]}
      />
      <mesh
        geometry={nodes.the_middle_part_.geometry}
        material={materials["outside black"]}
      >
        <Decal
          position={[-0.19099999999999948, 0.36, 0.640000000000005]}
          rotation={[0, 0, -3.14]}
          scale={1.8}
        >
          <meshPhysicalMaterial
            roughness={0.9}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
            position={[0, 0, 1]}
          >
            <RenderTexture width={1500} height={1500} attach='map'>
              <PerspectiveCamera
                makeDefault
                manual
                position={[0, 0, 400]}
                rotation={[0, 0, -3.14]}
              />
              <ambientLight intensity={1} />

              <directionalLight intensity={1} position={[0, 0, 1]} />
              <pointLight position={[0, 0, 1]} />
              <Environment preset='city' />
              <troika
                rotation={[0, 0, 0.07]}
                text={textFrontLeft}
                fontSize={15}
                size={1}
                color={activeColor?.hex}
                depthOffset={5}
                anchorX='right'
                font={"/Snellk.woff"}
                position={[15, 11, 0]}
              >
                <meshStandardMaterial
                  roughness={1}
                  metalness={0.1}
                  attach='material'
                  map={texture}
                />
              </troika>
              <troika
                rotation={[0, 0, -0.06]}
                text={textFrontRight}
                fontSize={15}
                size={1}
                color={activeColor?.hex}
                depthOffset={5}
                anchor='center'
                font={"/arial.woff"}
                position={[66.39999999999979, 11, 0]}
              >
                <meshStandardMaterial
                  roughness={1}
                  metalness={0.1}
                  attach='material'
                  map={texture}
                />
              </troika>
            </RenderTexture>
          </meshPhysicalMaterial>
        </Decal>

        <Decal
          position={[-0.391, 0.36, -0.46]}
          rotation={[0, -3.14, -3.14]}
          scale={1.8}
        >
          <meshPhysicalMaterial
            roughness={0.9}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
            position={[0, 0, 1]}
          >
            <RenderTexture width={1500} height={1500} attach='map'>
              <PerspectiveCamera
                makeDefault
                manual
                position={[0, 0, 400]}
                rotation={[0, 0, -3.14]}
              />
              <ambientLight intensity={1} />

              <directionalLight intensity={1} position={[0, 0, 1]} />
              <pointLight position={[0, 0, 1]} />
              <Environment preset='city' />
              <troika
                rotation={[0, 0, 0]}
                text={textBack}
                fontSize={15}
                size={1}
                color={activeColor?.hex}
                depthOffset={5}
                anchorX='center'
                font={"/Snellk.woff"}
                position={[-76.7, -35, 0]}
              >
                <meshStandardMaterial
                  roughness={0.01}
                  attach='material'
                  metalness={0.01}
                  map={texture}
                />
              </troika>
            </RenderTexture>
          </meshPhysicalMaterial>
        </Decal>
      </mesh>
      <mesh
        geometry={nodes.the_fornt_part.geometry}
        material={materials["outide black 1"]}
      />
      <mesh
        geometry={nodes.the_white_inside.geometry}
        material={materials["inside white with fold"]}
      />
      <mesh
        geometry={nodes.the_leather_part.geometry}
        material={materials["inside leather"]}
      />
      <mesh
        geometry={nodes.the_top_inside.geometry}
        material={materials["inside white 1"]}
      />
      <mesh
        geometry={nodes.the_line_in_the_bottom.geometry}
        material={materials["inside black"]}
      />
      <mesh
        geometry={nodes.cap_line_1.geometry}
        material={materials["line 2"]}
      />

      {/* crystal */}
      <group scale={0.071} visible={customization.badge === "crystal"}>
        <mesh
          geometry={nodes.Plane003.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Plane003_1.geometry}
          material={materials["diamond.001"]}
        />
      </group>

      {/* suomi */}
      <mesh
        geometry={nodes.first_002.geometry}
        material={materials["Material.005"]}
        visible={customization.badge === "fi"}
      />

      {/* start */}
      <mesh
        geometry={nodes.Diamond001.geometry}
        material={materials["diamond.001"]}
        visible={customization.badge === "star"}
      />
      <mesh
        geometry={nodes.Diamond001_1.geometry}
        material={materials.gold}
        visible={customization.badge === "star"}
      />
    </group>
  );
}

export default Ylioppilaslakki;

useGLTF.preload("./models/cap_version_9-transformed.glb");
