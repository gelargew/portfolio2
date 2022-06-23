import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import TheSphere from "./TheSphere/TheSphere";
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette } from '@react-three/postprocessing'
import styles from '../../styles/Canvas.module.css'
import { TCamera } from "./TCamera";
import ProjectImage2 from "./ProjectImage/ProjectImage2";
import Portal from "./Portal";

export default function TCanvas() {

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
                <Suspense fallback={<Html center>Loading.</Html>}>
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
                        active={false} // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                        ratio={0.2} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                      />
                </EffectComposer>
                


            </Canvas>
        </div>
    )
}
