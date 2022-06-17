import { useRef } from "react"

export default function MainLayout(props: JSX.IntrinsicElements['main']) {
    const ref = useRef<HTMLDivElement>(null!)



    return (
        <main {...props}>
            <header>
                <h1>Gelar Rustiawan</h1>
                <p><small>FRONTEND ENGINEER</small></p>
            </header>
            {props.children}
        </main>

    )
}