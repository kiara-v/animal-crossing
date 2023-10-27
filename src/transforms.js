import { Euler } from "three";

const tau = Math.PI*2;

export const rotateY360 = (i, pos) => new Euler(0,Math.random()*tau,0);
export const rotateX15Y360 = (i, pos) => new Euler(Math.random()*30*tau/360,Math.random()*tau,0);
export const rotateZ = (i, pos) => new Euler(0,0,tau/2);

export const scale1_3 = (i, pos) => 1+Math.random()*3;
export const scale1_2 = (i, pos) => 1+Math.random()*2;
export const scale_tree = (i, pos) => Math.min(Math.max(Math.random()*0.3, 0.15), 0.25);
export const scale_flower = (i, pos) => Math.max(Math.random()*0.01, 0.005);

export const light25pct = (i, pos, color) => color.offsetHSL(0, 0, (Math.random()-0.5)*.5);
export const lightPlus50pct = (i, pos, color) => color.offsetHSL(0, 0, Math.random()*.5);

export const hue25pct = (i, pos, color) => color.offsetHSL((Math.random()-0.5)*.25, (Math.random()-0.5)*.2, (Math.random()-0.5)*.2);
