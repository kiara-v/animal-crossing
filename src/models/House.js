
import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

export default function useHouse() {
  const { nodes, materials } = useGLTF('assets/house.glb');

  console.log(nodes);
  return useMemo( () => ({
    geometries: [ nodes.door.geometry, nodes.wall.geometry ] ,
    materials: [ materials.door, materials.wall ],
    }), [nodes, materials]);
}

useGLTF.preload('assets/house.glb')