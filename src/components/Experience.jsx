import { Environment, OrbitControls } from "@react-three/drei";
import {Avatar} from "./Avatar";
import { Ghar } from "./home";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Avatar position={[0.3 , -3 , 5]} scale ={2} rotation={[4.8, Math.PI / 90,0]}/>
      <Environment preset="sunset" 
        background
        backgroundBlurriness={0.5}/>
      <Ghar position={[0 , -7 ,3]} scale = {0.1}/>
      
     </>
  );
};

