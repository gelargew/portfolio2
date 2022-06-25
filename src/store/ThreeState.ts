import { atom } from "jotai";
import * as THREE from 'three'



export const SphereRotationSpeed = atom(1)
export const distortSpeed = atom(2)
export const distortValue = atom(0.5)

export const sphereDistortFast = atom(false)

export const lerpDistortValue = atom(
    (get) => ({
        distortSpeed: get(distortSpeed),
        distortValue: get(distortValue)
    }),
    (get, set, {value=0.5, speed=2}) => {
        set(
            distortValue, 
            THREE.MathUtils.damp(
                get(distortValue),
                value,
                0.015,
                1
            )
        )
    }
)
export const cameraTarget = atom(new THREE.Vector3(0, 0, 0))
export const cameraPosition = atom(new THREE.Vector3(0, 0, 208))
export const setCameraProps = atom(
    (get) => ({
        target: get(cameraTarget),
        position: get(cameraPosition)
    }),
    (get, set, { position={x:0, y:0, z:5}, target={x:0, y:0, z:0} }) => {
        const cp = get(cameraPosition)
        cp.set(position.x, position.y, position.z)
        set(cameraPosition, cp)
        const ct = get(cameraTarget)
        ct.set(target.x, target.y, target.z)
        set(cameraTarget, ct)
    }
)

export const glitchActive = atom(false)