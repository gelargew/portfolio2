import Image from "next/image";
import { useState } from "react";
import { SKILLS_DATA } from "./skillsData";


export default function Skills() {

    return (
        <section>
            <section>
                {SKILLS_DATA.language.map(data => <Card key={data.imgURL} data={data} /> )}
            </section>
            <section>

                {SKILLS_DATA.framework.map(data => <Card key={data.imgURL} data={data} />)}
            </section>
            <section>

                {SKILLS_DATA.tools.map(data => <Card key={data.imgURL} data={data} />)}
            </section>
            <section>

                {SKILLS_DATA.cloud.map(data => <Card key={data.imgURL} data={data} />)}
            </section>
        </section>
    )
}



const Card = ({data} : {data: typeof SKILLS_DATA.language[0]}) => {
    const imgURL = '/icons' + data.imgURL + '.webp'
    const [isHovered, setIsHovered] = useState(false)
    const hoverImage = () => {
        setIsHovered(true)
    }

    const unHoverImage = () => {
        setIsHovered(false)
    }

    return (
        <li onPointerEnter={hoverImage} onPointerLeave={unHoverImage}>
            <Image src={imgURL} width={80} height={80} />
            {isHovered && <p>{data.title}</p>}
            
        </li>
    )
}