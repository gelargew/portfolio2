import { Icosahedron, MeshDistortMaterial, ShapeProps, useCubeTexture, useTexture } from "@react-three/drei"
import { IcosahedronBufferGeometryProps, IcosahedronGeometryProps, useFrame, useThree } from "@react-three/fiber"
import { useAtom } from "jotai"
import { useRef, useState } from "react"
import * as THREE from 'three'
import { lerpDistortValue, sphereDistortFast, SphereRotationSpeed } from "../../../store/ThreeState"


const MainSphere = ({ material }: { material: THREE.Material}) => {
    const main  = useRef<THREE.Object3D>(null!)
    const [rotationSpeed] = useAtom(SphereRotationSpeed)

    useFrame(({ clock, mouse}) => {
        main.current.rotation.z = THREE.MathUtils.damp(
            main.current.rotation.z,
            main.current.rotation.z + 0.1,
            0.05,
            1
        )
        main.current.rotation.y = THREE.MathUtils.damp(
            main.current.rotation.y,
            mouse.x * Math.PI,
            0.05,
            1
        )
        main.current.rotation.x = THREE.MathUtils.lerp(
            main.current.rotation.x,
            mouse.y * Math.PI,
            0.05
        )
    })

    return (
        <Icosahedron
            args={[1, 4]}
            ref={main}
            material={material}
            position={[-2, 0, 0]}
        />
    )
}

const Instances = ({ material}: { material: THREE.Material }) => {
    const [sphereRefs] = useState(() => [] as THREE.Object3D[])
    const initialPositions = [
        [-4, 20, -12],
        [-10, 12, -4],
        [-11, -12, -23],
        [-16, -6, -10],
        [12, -2, -3],
        [13, 4, -12],
        [14, -2, -23],
        [8, 10, -20]
      ];

      useFrame(() => {
        sphereRefs.forEach((el) => {
            el.position.y += 0.02
            if (el.position.y > 20) el.position.y = -19
            el.rotation.x += 0.03
            el.rotation.y += 0.03
            el.rotation.z += 0.02
        })
      })

      return (
        <>
            <MainSphere material={material} />
            {initialPositions.map((pos, i) => (
                <Icosahedron
                    args={[1, 4]}
                    position={[pos[0], pos[1], pos[2]]}
                    material={material}
                    key={i}
                    ref={(ref: THREE.Object3D) => (sphereRefs[i] = ref)}
                />
            ))}
        </>
      )
}



export default function TheSphere() {
    const bumpMap = useTexture('/bump.jpg')
    const envMap = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/TheSphere/'}
    )
    const [distortIsFast] = useAtom(sphereDistortFast)
    const [{distortSpeed, distortValue}, lerpDistort] = useAtom(lerpDistortValue)
    const [material, set] = useState()

    useFrame(() => {
        lerpDistort(distortIsFast ? { speed: 8, value: 1.5 } : { speed: 2, value: 0.5 })
    })



    return (
        <>
            <TCamera />
            <MeshDistortMaterial
                ref={set}
                envMap={envMap}
                bumpMap={bumpMap}
                color='#000'
                roughness={0.4}
                metalness={1}
                bumpScale={0.05}
                clearcoat={1}
                clearcoatRoughness={1}
                radius={2}
                distort={distortValue}
                speed={2}
                side={THREE.DoubleSide}
            />
            {material && <Instances material={material} />}
        </>
    )
}


const TCamera = () => {
    const {camera} = useThree()
    useFrame(({mouse}) => {
        camera.position.x = THREE.MathUtils.lerp(
            camera.position.x,
            -mouse.x,
            0.02
        )
        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            mouse.y,
            0.02
        )
        camera.lookAt(0, 0, 0)
    })


    return null
}