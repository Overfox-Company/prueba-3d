/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/car.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Car(props) {
  const { nodes, materials } = useGLTF('/car.glb')
  return (
    <group {...props} dispose={null}>
      {Object.values(nodes).map((node, index) =>
        node.isMesh ? (
          <mesh
            key={index}
            {...node}
            material={node.material}
            castShadow
            receiveShadow
          />
        ) : null
      )}
    </group>
  )
}

useGLTF.preload('/car.glb')
