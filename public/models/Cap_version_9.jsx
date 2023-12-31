/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 cap_version_9.gltf --transform -M -j
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/cap_version_9-transformed.glb");
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
            roughness={0.1}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
            position={[0, 0, 1]}
          >
            <RenderTexture attach='map'>
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
            roughness={0.1}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
            position={[0, 0, 1]}
          >
            <RenderTexture attach='map'>
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
                rotation={rotation}
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
                  roughness={1}
                  attach='material'
                  metalness={0.1}
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

useGLTF.preload("/cap_version_9-transformed.glb");
