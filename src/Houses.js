
import { Scatter } from './Scatter';

import useHouse from './models/House.js';

import { scale_tree, lightPlus50pct } from "./transforms";

export const Houses = (props) => {

  const {geometries, materials} = useHouse();

  return <Scatter
		//    scale={scale_tree}
		//    color={lightPlus50pct}
		   position={props.position}
		   material={materials}
		   geometry={props.geometry}
		   childGeometry={geometries}
		   density={50}>
		 </Scatter>

};
