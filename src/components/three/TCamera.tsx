import { useFrame, useThree } from "@react-three/fiber"
import { useAtom } from "jotai"
import * as THREE from 'three'
import { cameraPosition, cameraTarget } from "../../store/ThreeState"

export const TCamera = () => {
    const {camera} = useThree()
    const [CameraPos] = useAtom(cameraPosition)
    useFrame(({mouse, clock}, delta) => {
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
        camera.position.z = THREE.MathUtils.damp(camera.position.z, CameraPos.z, 2, delta)
        
        camera.lookAt(0, 0, 0)
    })


    return null
}