import { useMemo, useState } from "react"
import { PROJECT_DATA } from "./ProjectData"
import styles from '../../styles/Projects.module.css'

export default function Projects() {
    const [filter, setFilter] = useState<'all'|'frontend'|'webgl'|'fullstack'>('all')
    const data = useMemo(() => {
        switch (filter) {
            case 'frontend': return PROJECT_DATA.frontend;
            case 'webgl': return PROJECT_DATA.webgl;
            case 'fullstack': return PROJECT_DATA.fullstack;
            default : return [...PROJECT_DATA.frontend, ...PROJECT_DATA.webgl, ...PROJECT_DATA.fullstack];
        }
    }, [filter])
    


    return (
        <section className={styles.projects}>
            <nav>
                <button>all</button>
                <button>web frontend</button>
                <button>3d & webgl</button>
                <button>fullstack</button>
            </nav>
            <section>
                {data.map(d => <ProjectList data={d} key={d.title} ></ProjectList>)}            
            </section>
        </section>
    )
}


const ProjectList = ({data}: {data: typeof PROJECT_DATA.frontend[0]}) => {
    
    return (
        <div>
            <h4>{data.title}</h4>
{/*             <p>{data.description}</p>
            <ul>
                {data.tech.map((tech, i) => <li key={i}>{tech}</li>)}
            </ul>
            <ul>
                {data.roles.map((role, i) => <li key={i} >{role}</li>)}
            </ul> */}
        </div>
    )

}