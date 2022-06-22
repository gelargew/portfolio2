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
    }, [unHoverLink])

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
                    <Link href={'/projects'}>Projects</Link>
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
                    <a target={'_blank'} rel={'noreferrer'} href={'https://github.com/gelargew'}>GitHub</a>
                </li>
            </ul>
        </nav>
    )
}




