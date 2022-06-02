import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useLoader } from "@react-three/fiber";

const Drakkar = (props) => {
  const { scene, animations } = useGLTF("/public/scene.gltf");
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    actions[names].play();
  }, []);

  return <primitive object={scene} {...props} />;
};

export default Drakkar;
