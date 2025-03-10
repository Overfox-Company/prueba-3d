/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/workbench.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Worbench(props) {
  const { nodes, materials } = useGLTF('/workbench.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-2.734, -0.492, -2.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Light_Fixture_Base_low.geometry} material={materials['Mat_Light_Fixture.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Light_Fixture_Bulbs_low.geometry} material={materials['Material.015']} castShadow receiveShadow />
        <mesh geometry={nodes.Light_Fixture_Cord_low.geometry} material={materials['Mat_Light_Fixture.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Light_Fixture_Ends_low.geometry} material={materials['Mat_Light_Fixture.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Light_Fixture_Fittings_low.geometry} material={materials['Mat_Light_Fixture.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Light_Fixture_Plate_low.geometry} material={materials['Mat_Light_Fixture.001']} castShadow receiveShadow />
      </group>
      <group position={[-2.734, -0.492, -2.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Pegboard_Frame_low.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low1.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low10.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low11.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low2.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low3.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low4.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low5.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low6.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low7.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low8.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_General_low9.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_Pliers_low.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_Pliers_low1.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_Pliers_low2.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_Pliers_low3.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Hook_Screwdriver_low.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pegboard_Sheet_low.geometry} material={materials['Mat_Pegboard.001']} castShadow receiveShadow />
      </group>
      <group position={[-2.734, -0.492, -2.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Workbench_Group_1_low.geometry} material={materials['Mat_Workbench.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Workbench_Group_2_low.geometry} material={materials['Mat_Workbench.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Workbench_Group_3_low.geometry} material={materials['Mat_Workbench.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Workbench_Group_4_low.geometry} material={materials['Mat_Workbench.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Workbench_Group_5_low.geometry} material={materials['Mat_Workbench.001']} castShadow receiveShadow />
      </group>
      <group position={[-2.734, -0.492, -2.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Vice_Base_low.geometry} material={materials['Mat_Vice.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Vice_Bolts_low.geometry} material={materials['Mat_Vice.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Vice_Handle_low.geometry} material={materials['Mat_Vice.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Vice_Slide_low.geometry} material={materials['Mat_Vice.001']} castShadow receiveShadow />
      </group>
      <group position={[-2.734, -0.492, -2.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Tool_Cabinet_Body_low.geometry} material={materials['Mat_Tool_Cabinet.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Tool_Cabinet_Bolts_low.geometry} material={materials['Mat_Tool_Cabinet.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Tool_Cabinet_Details_low.geometry} material={materials['Mat_Tool_Cabinet.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Tool_Cabinet_Drawers_low.geometry} material={materials['Mat_Tool_Cabinet.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Tool_Cabinet_Handles_low.geometry} material={materials['Mat_Tool_Cabinet.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Tool_Cabinet_Wheel_Back_Lock_low.geometry} material={materials['Mat_Tool_Cabinet.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Tool_Cabinet_Wheel_Back_low.geometry} material={materials['Mat_Tool_Cabinet.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Tool_Cabinet_Wheel_Front_Lock_low.geometry} material={materials['Mat_Tool_Cabinet.001']} />
        <mesh geometry={nodes.Tool_Cabinet_Wheel_Front_low.geometry} material={materials['Mat_Tool_Cabinet.001']} />
      </group>
      <group position={[-2.734, -0.492, -2.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Adjustable_Wrench_L_low001.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Adjustable_Wrench_L_Slide_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Adjustable_Wrench_L_Wheel_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Adjustable_Wrench_S_low001.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Adjustable_Wrench_S_Slide_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Adjustable_Wrench_S_Wheel_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Angled_Pliers_Bolt_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Angled_Pliers_Left_Grip_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Angled_Pliers_Left_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Angled_Pliers_Right_Grip_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Angled_Pliers_Right_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Box_Cutter_Blade_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Box_Cutter_Body_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Box_Cutter_Cap_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Box_Cutter_Lock_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Duct_Tape_low001.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Hammer_Handle_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Hammer_Head_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Hardware_low001.geometry} material={materials['Mat_Tools.001']} position={[22.724, -121.146, 0]} castShadow receiveShadow />
        <mesh geometry={nodes.Measuring_Tape_Body_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Measuring_Tape_Clip_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Measuring_Tape_End_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Measuring_Tape_Lock_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pliers_Handles_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pliers_Jaw_Left_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Pliers_Jaw_Right_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Scissors_Pivot_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Scissors_Blade_Fingers_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Scissors_Grip_Fingers_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Scissors_Blade_Thumb_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Scissors_Grip_Thumb_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_L_Handle_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_L_Shaft_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_L_Handle_low001.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_L_Shaft_low001.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_L_Handle_low002.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_L_Shaft_low002.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_S_Handle_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_S_Shaft_low.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_S_Handle_low001.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_S_Shaft_low001.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_S_Handle_low002.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Screwdriver_S_Shaft_low002.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Wrench_L_low001.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Wrench_M_low001.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
        <mesh geometry={nodes.Wrench_S_low001.geometry} material={materials['Mat_Tools.001']} castShadow receiveShadow />
      </group>
    </group>
  )
}

useGLTF.preload('/workbench.glb')
