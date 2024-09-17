import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0.5, 0, 8], fov: 50 }}>
      <color attach="background" args={["black"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
