import { CardProjects } from '../../Components/CardProjects';
import {
    MainContainer,
    MainBox
} from './style'

import DefaultImage from '../../Assets/Images/defaultImage.png'

export function Main() {
    return (
        <>
            <MainContainer>
                <MainBox>
                    <CardProjects Title="Powland" Image={DefaultImage} />
                </MainBox>
            </MainContainer>
        </>
    );
}