import {
    CardBoxDiv,
    CardBoxImageDiv,
    CardBoxTitle,
    CardBoxButtonDiv,
    CardBoxButtonDemo,
    CardBoxButtonGitHub
} from './style'
import { GithubLogo } from 'phosphor-react'

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
                <CardBoxTitle>
                    <h2>{Title}</h2>
                </CardBoxTitle>
                <CardBoxButtonDiv>
                    <CardBoxButtonDemo>Demo</CardBoxButtonDemo>
                    <CardBoxButtonGitHub><GithubLogo size={16} /></CardBoxButtonGitHub>
                </CardBoxButtonDiv>
            </CardBoxDiv>
        </>
    );
}