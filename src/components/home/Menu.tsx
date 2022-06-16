import { useAtom } from "jotai"
import Link from "next/link"
import { useEffect } from "react"
import { sphereDistortFast } from "../../store/ThreeState"
import styles from '../../styles/Home.module.css'


export default function Menu() {
    const [aaa, distortIsFast] = useAtom(sphereDistortFast)

    const hoverLink = () => {
        distortIsFast(true)
    }
    const unHoverLink = () => {
        distortIsFast(false)
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
                    <Link href={'/works'}>Works</Link>
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




