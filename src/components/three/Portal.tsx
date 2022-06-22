import { Torus, TorusKnot, useCubeTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'

const getRandomInt = (min=0, max=10) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function Portal() {
    const ref = useRef<THREE.Group>(null!)
    const torusData = Array(40).fill(0).map((v, i) => ({
        positionZ: (i * 5) +10,
        args: [7, 2, 4, getRandomInt(3, 7)],
        rotationSpeed: getRandomInt(-10, 10)*0.00005
    }))
    const envMap = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/TheSphere/'}
    )
    const material = new THREE.MeshStandardMaterial({
        roughness: 0.1,
        metalness: 0.9,
        envMap: envMap,
        color: '#050505'
    })

    useFrame(({clock, mouse}) => {
        ref.current.children.forEach((obj, idx) => {
            obj.rotation.z +=  clock.getElapsedTime()*torusData[idx].rotationSpeed*mouse.x
            if (obj.position.z > 220) obj.position.z = 10
            else obj.position.z += 0.1
        })

    })

    return (
        <group ref={ref}>
            {torusData.map(data => (
                <Torus 
                    key={data.positionZ}
                    position={[0, 0, data.positionZ]} 
                    args={data.args} 
                    onClick={() => console.log(ref.current.children)}
                    material={material}
                >
                    
                </Torus>)
            )}
        </group>
    )
}