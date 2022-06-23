import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { setCameraProps } from "../store/ThreeState"
import Menu from "./home/Menu"

export default function MainLayout(props: JSX.IntrinsicElements['main']) {
    const ref = useRef<HTMLDivElement>(null!)



    return (
        <main {...props}>
            <header>
                <h1>Gelar Rustiawan</h1>
                <p><small>FRONTEND ENGINEER</small></p>
                <Menu />
            </header>
            {props.children}
        </main>
    )
}
