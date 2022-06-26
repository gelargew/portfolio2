import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { setCameraProps } from "../store/ThreeState"
import Menu from "./home/Menu"

export default function MainLayout(props: JSX.IntrinsicElements['main']) {
    const ref = useRef<HTMLDivElement>(null!)

    const router = useRouter()

    useEffect(() => {
        ref.current.style.opacity = '0'
        setTimeout(() => ref.current.style.opacity = '1', 200)
    }, [router.pathname])

    return (
        <main {...props}>
            <header>
                <h1>Gelar Rustiawan</h1>
                <p><small>FRONTEND ENGINEER</small></p>
                <Menu />
            </header>
            <section ref={ref} id="mainContent" >
                {props.children}
            </section>
        </main>
    )
}
