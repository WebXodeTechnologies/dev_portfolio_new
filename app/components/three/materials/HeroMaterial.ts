export const HeroMaterial = {
  uniforms: {
    uTime: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(vUv, 0.8, 1.0);
    }
  `,
};
