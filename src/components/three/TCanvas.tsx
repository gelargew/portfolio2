import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import TheSphere from "./TheSphere/TheSphere";
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette } from '@react-three/postprocessing'
import styles from '../../styles/Canvas.module.css'
import { TCamera } from "./TCamera";
import Portal from "./Portal";
import { useAtom } from "jotai";
import { glitchActive } from "../../store/ThreeState";

export default function TCanvas() {
    const [glitch] = useAtom(glitchActive)

    return (
        <div className={styles.container}>
            <Canvas
                camera={{ position: [0, 0, 230], near: 0.01, far: 1000 }}
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
                <OrbitControls />
                <TCamera />


                {/* -----SCENE------ */}
                <Suspense fallback={<Loader />}>
                    <TheSphere />
                    <Portal />
                </Suspense>


                {/* ------POST-PROCESSING------ */}
                <EffectComposer multisampling={0} disableNormalPass>
                    <DepthOfField
                        focusDistance={0}
                        focalLength={0.02}
                        bokehScale={2}
                        height={480}
                    />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    <Glitch
                        delay={[0.7, 7]} // min and max glitch delay
                        active={glitch} // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                        ratio={0.8} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                        duration={[0.6, 1.0]} // min and max glitch duration
                        strength={[0.1, 0.1]} // min and max glitch strength
                      />
                </EffectComposer>
                


            </Canvas>
        </div>
    )
}


const Loader = () => {
    const {progress} = useProgress()

    return (
        <Html center style={{width: '20vw', height: '20px'}} >
            {Math.round(progress)}% loading...
        </Html>
    )
}