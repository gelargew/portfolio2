import Image from "next/image";
import { useMemo, useState } from "react";
import { SKILLS_DATA } from "./skillsData";
import styles from '../../styles/Skills.module.css'
import { useAtom } from "jotai";
import { SkillsFilter } from "../../store/Store";


export default function Skills() {
    const [, setSkillsFilter] = useAtom(SkillsFilter)

    return (
        <section className={styles.skills} >
            <section className={styles.SkillsFilter}>
                <button onClick={() => setSkillsFilter('all')}>All</button>
                <button onClick={() => setSkillsFilter('active')}>Active</button>
            </section>
            <SkillSection title='Programming language' data={SKILLS_DATA.language} />
            <SkillSection title='Framework' data={SKILLS_DATA.framework} />
            <SkillSection title='Development tool' data={SKILLS_DATA.tools} />
            <SkillSection title='Cloud service' data={SKILLS_DATA.cloud} />
        </section>
    )
}

const SkillSection = ({data, title }: { data: typeof SKILLS_DATA.language, title: string }) => {

    return (
        <section>
            <h4>{title}</h4>
            <ul>
                {data.map(skill => <Card key={skill.imgURL} data={skill} />)}
            </ul>
        </section>
    )
}



const Card = ({data} : {data: typeof SKILLS_DATA.language[0]}) => {
    const imgURL = '/icons' + data.imgURL + '.webp'
    const [isHovered, setIsHovered] = useState(false)
    const [skillFilter] = useAtom(SkillsFilter)
    const displayStyle = useMemo(() => {
        if (data.active || skillFilter === 'all') return 'block'
        return 'none'
    }, [skillFilter])

    const hoverImage = () => {
        setIsHovered(true)
    }

    const unHoverImage = () => {
        setIsHovered(false)
    }

    return (
        <li 
            onPointerEnter={hoverImage} 
            onPointerLeave={unHoverImage} 
            style={{ 
                filter: data.active ? 'none' : 'grayscale(100)',
                display: displayStyle
            }}
        >
            <Image src={imgURL} width={60} height={60} />
            <p>{data.title}</p>
            
        </li>
    )
}