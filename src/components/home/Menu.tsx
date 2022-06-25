import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { glitchActive, setCameraProps, sphereDistortFast } from "../../store/ThreeState"
import styles from '../../styles/Home.module.css'

const MENU_LINKS = [
    { title: 'Home', path: '/'},
    { title: 'Projects', path: '/projects'},
    { title: 'Skills', path: '/skills'},
    { title: 'Profile', path: '/profile'}
]

var menuTimeout: NodeJS.Timeout;

export default function Menu() {
    const timer = useRef<NodeJS.Timeout>(null)

    return (
        <nav className={styles.nav}>
            <ul>
                {MENU_LINKS.map(data => <Link key={data.path} route={data.path} text={data.title} />)}
            </ul>
        </nav>
    )
}


interface LinkType {
    route: string,
    text: string,
}

const Link = ({route, text}: LinkType) => {
    const [,distortIsFast] = useAtom(sphereDistortFast)
    const router = useRouter()
    const [, setCamProps] = useAtom(setCameraProps)
    const [, setGlitch] = useAtom(glitchActive)

    const hoverLink = () => {
        distortIsFast(true)
    }
    const unHoverLink = () => {
        distortIsFast(false)
    }

    const changeRoute = () => {
        switch(route) {
            case '/projects':

                setCamProps({position: {x: 0, y: 0, z: 100}})
                setGlitch(true)
                break
            case '/skills':
                setCamProps({position: {x: 0, y: 0, z: 8}})
                setGlitch(false)
                break
            case '/profile':
                setCamProps({position: {x: 0, y: 0, z: 4}, target: { x: 5, y: 0, z: 2}})
                setGlitch(false)
                break
            default:
                setCamProps({position: {x: 0, y: 0, z: 208}})
                setGlitch(false)
        }
        clearTimeout(menuTimeout)
        const el = document.querySelector('main')
        if (el) el.style.opacity = '0'
        menuTimeout = setTimeout(() => {
            router.push(route)
        }, 500)           
    }

    return (
        <li
        onPointerEnter={hoverLink}
        onPointerLeave={unHoverLink}
        onClick={changeRoute}
        >
            {text}
        </li> 
    )
}


