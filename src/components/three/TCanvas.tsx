import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import TheSphere from "./TheSphere/TheSphere";
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette } from '@react-three/postprocessing'
import styles from '../../styles/Canvas.module.css'
import { useRouter } from "next/router";

export default function TCanvas() {

    return (
        <div className={styles.container}>
            <Canvas
                camera={{ position: [0, 0, 4], near: 0.01 }}
                gl={{
                    powerPreference: 'high-performance',
                    alpha: false,
                    antialias: false,
                    stencil: false,
                    depth: false
                }}
            >
                <color attach='background' args={['#050505']} />
                <fog color='#161616' attach='fog' near={8} far={30} />
                <pointLight position={[4, 5, 0]} intensity={0} />
                <OrbitControls />
                <Suspense fallback={<Html center>Loading.</Html>}>
                    <TheSphere />
                </Suspense>
                <EffectComposer multisampling={0} disableNormalPass>
                    <DepthOfField
                        focusDistance={0}
                        focalLength={0.02}
                        bokehScale={2}
                        height={480}
                    />
                    <Bloom
                        luminanceThreshold={0}
                        luminanceSmoothing={0.9}
                        height={300}
                        opacity={3}
                    />
                    <Noise opacity={0.025} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    <Glitch
                        active={false} // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                        ratio={0.2} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                      />
                </EffectComposer>

            </Canvas>
            <Listens />
        </div>
    )
}


const Listens = () => {
    const router = useRouter()


    useEffect(() => {
 
    }, [router.pathname])


    return null
}