import { useAtom } from "jotai"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { setCameraProps, sphereDistortFast } from "../../store/ThreeState"
import styles from '../../styles/Home.module.css'


export default function Menu() {
    const [,distortIsFast] = useAtom(sphereDistortFast)
    const router = useRouter()
    const [a, setCamProps] = useAtom(setCameraProps)

    const hoverLink = () => {
        distortIsFast(true)
    }
    const unHoverLink = () => {
        distortIsFast(false)
    }

    const changeRoute = (route: string) => {
        switch(route) {
            case '/projects':
                setCamProps({position: {x: 0, y: 0, z: 100}})
                break
            case '/skills':
                setCamProps({position: {x: 0, y: 0, z: 150}})
                break
            case '/profile':
                setCamProps({position: {x: 0, y: 0, z: 5}})
                break
            default:
                setCamProps({position: {x: 0, y: 0, z: 208}})
        }
        router.push(route)
        
    }

    useEffect(() => {
        return () => {unHoverLink()}
    }, [])

    return (
        <nav className={styles.nav}>
            <ul>
                <li
                    onPointerEnter={hoverLink}
                    onPointerLeave={unHoverLink}
                    onClick={() => changeRoute('/')}
                >
                    Home
                </li>
                <li
                    onPointerEnter={hoverLink}
                    onPointerLeave={unHoverLink}
                    onClick={() => changeRoute('/projects')}
                >
                    Projects
                </li>
                <li
                    onPointerEnter={hoverLink}
                    onPointerLeave={unHoverLink}
                    onClick={() => changeRoute('/skills')}
                >
                    Skills
                </li>                
                <li
                    onPointerEnter={hoverLink}
                    onPointerLeave={unHoverLink}
                    onClick={() => changeRoute('/profile')}
                >
                    Profile
                </li> 
            </ul>
        </nav>
    )
}



