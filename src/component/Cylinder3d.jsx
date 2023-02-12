import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
 
function Cylinder3d(props) {
  
  const ref = useRef();
  
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
 
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "red"}
      />
    </mesh>
  );
}
 
export default Cylinder3d;