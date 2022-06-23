import { useMemo, useState } from "react"
import { PROJECT_DATA } from "./ProjectData"
import styles from '../../styles/Projects.module.css'
import Image from "next/image"

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
            <section className={styles.projectList} >
                {data.map(d => <ProjectList data={d} key={d.title} ></ProjectList>)}            
            </section>
        </section>
    )
}

interface DataType {
    title: string;
    description: string;
    tech: string[];
    date: number;
    imgURL?: string;
    roles: string[];
    projectURL: string;
}

interface ProjectListProps {
    data: DataType
}

const ProjectList = ({data}: ProjectListProps) => {
    
    return (
        <>
            {data.imgURL 

            ? 

            <div className={styles.project}>
                <div className={styles.projectDetail}>
                    <h4>{data.title}</h4>
                    <small>{data.date}</small>
                    <p>{data.description}</p>
                    <ul>
                        {data.tech.map((tech, i) => <li key={i}>{tech}</li>)}
                    </ul>
                    <a href={data.projectURL} target='_blank'>visit</a>
                </div>
                <Image width={512} height={500} src={'/projects/'+data.imgURL} />
            </div> 

            :

            <div>
                <h4>{data.title}</h4>
            </div>   

            }    
        </>
    )

}