import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

export default function Ornament(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');
  return (
    <group
      {...props}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.blinn3SG}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.lambert5SG}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.lambert4SG}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.lambert3SG}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.blinn1SG}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.gold}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.blinn4SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');
