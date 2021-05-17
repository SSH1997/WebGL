import { vertexShaderSource } from "./shaderSource/vertexShader";
import { fragmentShaderSource } from "./shaderSource/fragmentShader";
import {
  createShader,
  createShaderProgram,
  createBuffer,
  initScene,
} from "./createModule";
import { positions, colors, indices } from "@/control/vertexs";

export default () => {
  const canvas = <HTMLCanvasElement>document.getElementById("glCanvas");
  const gl =
    canvas.getContext("webgl") ||
    <WebGLRenderingContext>canvas.getContext("experimental-webgl");

  if (!gl) return;

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);

  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );

  const programInfo = createShaderProgram(gl, vertexShader, fragmentShader);

  const positionBuffer = createBuffer(
    gl,
    gl.ARRAY_BUFFER,
    new Float32Array(positions)
  );

  const colorBuffer = createBuffer(
    gl,
    gl.ARRAY_BUFFER,
    new Float32Array(colors)
  );

  const indexBuffer = createBuffer(
    gl,
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices)
  );

  function render() {
    initScene(gl, programInfo, positionBuffer, colorBuffer, indexBuffer);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
