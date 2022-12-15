import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Ornament(props) {
  const { nodes, materials } = useGLTF('/ornament/scene.gltf');
  const ornamentRef = useRef();
  useFrame(({ clock }) => {
    ornamentRef.current.position.y = Math.sin(clock.elapsedTime) / 10;
  });
  return (
    <group
      {...props}
      dispose={null}
      ref={ornamentRef}
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
          geometry={nodes.Object_10.geometry}
          material={materials.blinn4SG}
        />
      </group>
    </group>
  );
}

export function Tree(props) {
  const treeRef = useRef();
  const { nodes, materials } = useGLTF('/tree/scene.gltf');

  useFrame(() => {
    treeRef.current.rotation.z += Math.PI * 0.001;
  });

  return (
    <group
      {...props}
      dispose={null}
    >
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        ref={treeRef}
      >
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.model_Material_u1_v1}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.model_Material_u1_v1}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.model_Material_u1_v1}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.model_Material_u1_v1}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.model_Material_u1_v1}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.model_Material_u1_v1}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.model_Material_u1_v1}
        />
      </group>
    </group>
  );
}
