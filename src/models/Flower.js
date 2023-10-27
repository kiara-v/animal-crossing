
import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

export default function useFlower() {
  const { nodes, materials } = useGLTF('assets/flower.glb')

  const geometries = useMemo( () => [ nodes.leaves.geometry, nodes.petal.geometry, nodes.stem.geometry ], [ nodes ]);

  const _materials = useMemo( () => [ materials.leafy, materials.petal, materials.stem ], [ materials ] );

  return {
	geometries,
	materials: _materials
  };
}

useGLTF.preload('assets/flower.glb')
