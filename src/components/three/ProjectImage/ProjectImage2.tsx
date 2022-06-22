import { Image } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function ProjectImage2() {
    const {viewport} = useThree()
    const ref = useRef(null!)

    return (
        <Image ref={ref} onClick={() =>console.log(ref.current)}  scale={[viewport.width, viewport.height, 1]} position={[0, 0, -200]} url="/yonaweekenders.png" />
    )
}