import {
    CardBoxDiv,
    CardBoxImageDiv
} from './style'

interface CardProjectsProps {
    Title: string
    Image: string
}

export function CardProjects({ Title, Image }: CardProjectsProps) {
    return (
        <>
            <CardBoxDiv>
                <CardBoxImageDiv>
                    <img src={Image} alt="" />
                </CardBoxImageDiv>
                <div>
                    {Title}
                </div>
                <div>
                    <button>Butões</button>
                </div>
            </CardBoxDiv>
        </>
    );
}