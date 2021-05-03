import { mat4 } from "gl-matrix";

let t = 0.01;

const offset = 0.01;

export const transform = (modelViewMatrix: mat4) => {
  mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);

  mat4.rotate(modelViewMatrix, modelViewMatrix, t, [0, 0, 1]);

  mat4.rotate(modelViewMatrix, modelViewMatrix, t * 0.8, [0, 1, 0]);
  t += offset;
};
