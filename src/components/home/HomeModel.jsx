import { Canvas } from '@react-three/fiber';
import Ornament from './Ornament';

export default function HomeModel() {
  return (
    <Canvas
      gl={{
        antialias: 'false',
      }}
      className="w-full h-full"
    >
      {/* <OrbitControls scale={[0.1, 0.1, 0.1]} /> */}
      <ambientLight />
      <Ornament scale={[0.1, 0.1, 0.1]} />
    </Canvas>
  );
}
