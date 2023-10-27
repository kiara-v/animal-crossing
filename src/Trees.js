
import { Scatter } from './Scatter';

import useTree from './models/Tree.js';

import { scale_tree, lightPlus50pct } from "./transforms";

export const Trees = (props) => {

  const {geometries, materials} = useTree();

  return <Scatter
		   scale={scale_tree}
		   color={lightPlus50pct}
		   position={props.position}
		   material={materials}
		   geometry={props.geometry}
		   childGeometry={geometries}
		   density={5}>
		 </Scatter>

};
