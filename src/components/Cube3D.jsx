import { useRef } from 'react'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls } from "@react-three/drei";



const Cube3D = () => {

  const Cube4D = ({rotacion, escala, cubo}) => {
    const ref = useRef();
    const { nodes, materials } = useGLTF('/assets/hero/cube3D.glb');
    
    useFrame((state) => {
      const t = state.clock.getElapsedTime()
      switch (cubo) {
        case '1':
          ref.current.rotation.set(Math.cos(t/4) /4, Math.sin(t/3) /4, 1 + Math.sin(t/2)/4)
          break;
        case '2':
          ref.current.rotation.set( -Math.cos(t/4) /4, - Math.sin(t/3) /4, 1 + Math.sin(t/2)/4)
          break;
        case '3':
          ref.current.rotation.set( - Math.cos(t/4) /4, Math.sin(t/3) /4, 1 - Math.sin(t/2)/4)
          break;
        case '4':
          ref.current.rotation.set(Math.cos(t/4) /2,  Math.sin(t/3) /4, 1 + Math.sin(t/2)/4)
          break;
      
        default:
          break;
      }
      
    })
    return(
      <group ref={ref} >
        <mesh castShadow geometry={nodes.cubo4D.geometry} material={materials.Metal} position={[0,0,0]} rotation={rotacion} scale={escala}/>    
      </group>
    )
  }
  
  const FollowCameraLight = () => {
    const lightRef = useRef();
    const { camera } = useThree();
    
    useFrame(() => {
      lightRef.current.position.copy(camera.position);
    });
    
    return <directionalLight ref={lightRef} intensity={150}
    castShadow
    penumbra={1} 
    decay={1}
    position={[0,3,0]}
    rotation={[0,5,0]} 
    />;
  }

  return (
    <Canvas
      colormanagement= 'true'
      shadows
      camera={{ position: [0, 8, -5], fov: 50 }}
    >
      <fog attach="fog" args={["white", 0, 40]} />
      {/* <OrbitControls enableZoom={false}/> */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* <FollowCameraLight/> */}
      <directionalLight
        intensity={150}
        castShadow
        penumbra={1} 
        decay={1}
        position={[0,3,0]}
        rotation={[0,5,0]}
      />
      
      <Cube4D cubo={'1'} rotacion={[0,0,0]} escala={[3,3,3]}/>
      <Cube4D cubo={'2'} rotacion={[0,0,0]} escala={[2.2,2.2,2.2]}/>
      <Cube4D cubo={'3'} rotacion={[0,0,0]} escala={[1.6,1.6,1.6]}/>
      <Cube4D cubo={'4'} rotacion={[0,0,0]} escala={[1.1,1.1,1.1]}/>

      
      <mesh rotation={[-Math.PI / 9, 0, 0]} position={[0, -9, 0]} receiveShadow>
        <planeGeometry args={[100, 20]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>

      {/* <Scene /> */}
    </Canvas>
  )
}

export default Cube3D;
