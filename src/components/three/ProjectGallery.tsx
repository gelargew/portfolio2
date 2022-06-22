import { TorusKnot } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ProjectGallery() {


    return (
        <group>
            <TorusKnot args={[3, 3, 3]} position={[0, 0, -200]} />
        </group>
    )
}