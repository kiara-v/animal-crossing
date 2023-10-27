
import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

export default function useTree() {
  const { nodes, materials } = useGLTF('assets/tree.glb')

  return useMemo( () => ({
    geometries: [ nodes.apples.geometry, nodes.bushes.geometry, nodes.leaves.geometry, nodes.trunk.geometry ] ,
    materials: [ materials.apples, materials.bushes, materials.leaves, materials.trunky ],
    }), [nodes, materials]);
}

useGLTF.preload('assets/tree.glb')
