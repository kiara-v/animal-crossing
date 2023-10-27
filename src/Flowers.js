
import { Scatter } from './Scatter';

import useFlower from './models/Flower.js';

import { rotateZ, scale_flower, light25pct, hue25pct } from "./transforms";

export const Flowers = (props) => {

  const { geometries, materials } = useFlower();

  return <Scatter
		   color={hue25pct}
		   position={props.position}
		   geometry={props.geometry}
		   material={materials}
		   rotate={rotateZ}
		   scale={scale_flower}
		   childGeometry={geometries}
		   density={10}>
		 </Scatter>

};
