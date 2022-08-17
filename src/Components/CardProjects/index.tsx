import {
    CardBoxDiv,
    CardBoxImageDiv,
    CardBoxTitle,
    CardBoxButtonDiv,
    CardBoxButtonDemo,
    CardBoxButtonDemoLink,
    CardBoxButtonGitHubLink,
    CardBoxButtonGitHub
} from './style'
import { GithubLogo } from 'phosphor-react'

interface CardProjectsProps {
    Title: string
    Description: string
    Image: string
    UrlDemo: string
    UrlGitHub: string
}

export function CardProjects({ Title, Description, Image, UrlDemo, UrlGitHub }: CardProjectsProps) {
    return (
        <>
            <CardBoxDiv>
                <CardBoxImageDiv>
                    <img src={Image} alt="" />
                    <div>
                        <p>{Description}</p>
                    </div>
                </CardBoxImageDiv>
                <CardBoxTitle>
                    <h2>{Title}</h2>
                </CardBoxTitle>
                <CardBoxButtonDiv>
                    <CardBoxButtonDemoLink href={UrlDemo} target="_blank"><CardBoxButtonDemo>Demo</CardBoxButtonDemo></CardBoxButtonDemoLink>
                    <CardBoxButtonGitHubLink href={UrlGitHub} target="_blank"><CardBoxButtonGitHub><GithubLogo size={16} /></CardBoxButtonGitHub></CardBoxButtonGitHubLink>
                </CardBoxButtonDiv>
            </CardBoxDiv>
        </>
    );
}