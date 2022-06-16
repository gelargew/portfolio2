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