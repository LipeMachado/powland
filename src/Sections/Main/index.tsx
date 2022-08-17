import { CardProjects } from '../../Components/CardProjects';
import {
    MainContainer,
    MainBox
} from './style'

import DefaultImage from '../../Assets/Images/powlandImage.jpeg'

export function Main() {
    return (
        <>
            <MainContainer>
                <MainBox>
                    <CardProjects
                        Title="Powland"
                        Description="Powland is a site where there are several challenges made by me."
                        Image={DefaultImage}
                        UrlGitHub="https://github.com/LipeMachado/powland/"
                        UrlDemo="https://powland.vercel.app"
                    />
                </MainBox>
            </MainContainer>
        </>
    );
}