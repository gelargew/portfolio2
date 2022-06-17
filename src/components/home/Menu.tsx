import { useAtom } from "jotai"
import Link from "next/link"
import { useEffect } from "react"
import { sphereDistortFast } from "../../store/ThreeState"
import styles from '../../styles/Home.module.css'


export default function Menu() {
    const [,distortIsFast] = useAtom(sphereDistortFast)

    const hoverLink = () => {
        distortIsFast(true)
    }
    const unHoverLink = () => {
        distortIsFast(false)
    }

    const changeRoute = (route: string) => {

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
                >
                    <Link href={'/'}>Home</Link>
                </li>
                <li
                    onPointerEnter={hoverLink}
                    onPointerLeave={unHoverLink}
                >
                    <Link href={'/works'}>Projects</Link>
                </li>
                <li
                    onPointerEnter={hoverLink}
                    onPointerLeave={unHoverLink}
                >
                    <Link href={'/skills'}>Skills</Link>
                </li>                <li
                    onPointerEnter={hoverLink}
                    onPointerLeave={unHoverLink}
                >
                    <Link href={'/GitHub'}>GitHub</Link>
                </li>
            </ul>
        </nav>
    )
}



