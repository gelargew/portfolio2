import { Plane, shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useMove } from "@use-gesture/react";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from 'three'


const ShaderMat = shaderMaterial(
    { uTime: 0, 
      uTexture: null, 
      uMouse: null, 
      uResolution: new THREE.Vector4(1, 1, 1, 1),
      uDataTexture: null,
      chaos: 0.5
    },
    `
    varying vec2 vUv;
    void main()	{
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
    `
    #ifdef GL_ES
    precision mediump float;
    #endif
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform vec3 uMouse;
    uniform vec4 uResolution;
    uniform sampler2D uDataTexture;
    uniform float chaos;
    varying vec2 vUv;
    
    
    void main() {
      vec2 newUV = (vUv - vec2(0.5))*uResolution.zw + vec2(0.5);
      vec4 color = texture2D(uTexture,newUV);
      vec4 offset = texture2D(uDataTexture,vUv);
      gl_FragColor = vec4(vUv,0.0,1.);
      gl_FragColor = vec4(offset.r,0.,0.,1.);
      gl_FragColor = color;
      gl_FragColor = texture2D(uTexture,newUV - 0.005*offset.rg);
    }`
)

extend({ ShaderMat })


export default function ProjectImage() {
    const {viewport} = useThree()
    const {width, height} = viewport
    const ref = useRef(null!)
    const texture = useTexture('/yonaweekenders.png')
    const aspectRatio = texture.image.height / texture.image.width
    const resolution = new THREE.Vector4(1, 1, 1, 1)
    const mouseV = new THREE.Vector2(0, 0)
    const defaultMouseV = new THREE.Vector2(0, 0)

    const {gridSize, strength, relaxation, pointerSize} = {
        gridSize: 32,
        strength: 0.5,
        relaxation: 0.97,
        pointerSize: 1
    }

    const dataTexture = useMemo(() => {
        const width = 32;
        const height = 32;
        const size = width * height;
        const data = new Float32Array(3 * size);
        const color = new THREE.Color(0xffffff);

        for (let i = 0; i < size; i++) {
        let r = Math.random() * 255
        let r1 = Math.random() * 255 - 125;

        const stride = i * 3;
        
        data[stride] = r;
        data[stride + 1] = r1;
        data[stride + 2] = r;

        }

        // used the buffer to create a DataTexture
        const texture = new THREE.DataTexture(data, width, height, THREE.RGBFormat, THREE.FloatType);
        texture.magFilter = THREE.NearestFilter
        texture.minFilter = THREE.NearestFilter;
        return texture
    }, [])

    useLayoutEffect(() => {
        if (height/width > aspectRatio) {
            resolution.setZ((width/height) * aspectRatio)
            resolution.setW(1)
          }
          else {
            resolution.setZ(1)
            resolution.setW((height/width) / aspectRatio)
          }
          texture.wrapS = THREE.RepeatWrapping
          ref.current.material.uniforms.uTexture.value = texture
          ref.current.material.uniforms.uResolution.value = resolution
          ref.current.material.uniforms.uDataTexture.value = dataTexture;
          ref.current.material.uniforms.uDataTexture.value.needsUpdate = true;      
    }, [viewport.width])

    useFrame((state, delta) => {
        ref.current.material.uniforms.uTime.value += delta
        /*     ref.current.material.uniforms.chaos.value = THREE.MathUtils.damp(
              ref.current.material.uniforms.chaos.value, 0, 0.2, 0.2
            ) */
        
            let gridMouseX = gridSize * (state.mouse.x/2 + 0.5);
            let gridMouseY = gridSize * (state.mouse.y/2 + 0.5);
            let maxDist = gridSize * 0.1;
            let aspect = height / width
        
            let data = dataTexture.image.data
        
            for (let i = 0; i < data.length; i += 3) {
              data[i] *= relaxation
              data[i + 1] *= relaxation
            }
        
            for (let i = 0; i < gridSize; i++) {
              for (let j = 0; j < gridSize; j++) {
                let distance = ((gridMouseX - i) ** 2) / aspect + (gridMouseY - j) ** 2
                let maxDistSq = maxDist ** 2;
        
                if (distance < maxDistSq * pointerSize) {
        
                  let index = 3 * (i + gridSize * j);
        
                  let power = maxDist / Math.sqrt(distance);
                  power = THREE.MathUtils.clamp(power, 1, 10)
                  data[index] += strength * 10 * mouseV.x * power;
                  data[index + 1] -= strength * 10 * mouseV.y * power;
                }
              }
            }
            mouseV.lerp(defaultMouseV, 0.2)
            dataTexture.needsUpdate = true
    })

    const bind = useMove((state) => {
        mouseV.set(
            (state.direction[0] || 1) * Math.sqrt((state.velocity[0]/10)),
            (state.direction[1] || 1) * Math.sqrt((state.velocity[1]/10))        
        )
    })

    return (
        <group position={[0, 0, -200]} >
            <Plane ref={ref} args={[viewport.width, viewport.height]} {...bind}>
                <shaderMat 
                    attach='material'
                    extensions={{derivatives: "#extension GL_OES_standard_derivatives : enable"}}
                    />
            </Plane>
        </group>
    )
}


