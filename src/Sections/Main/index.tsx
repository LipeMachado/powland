import { CardProjects } from '../../Components/CardProjects';
import {
    MainContainer,
    MainBox
} from './style'

import DefaultImage from '../../Assets/Images/powlandImage.jpeg'
import HelloWorld from '../../Assets/Images/challenge-HelloWorld.jpeg'
import AnimatedButton from '../../Assets/Images/challenge-AnimatedButton.jpeg'

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
                    <CardProjects
                        Title="Hello World"
                        Description="Challenge number 2 of the 21 day rocketseat challenge."
                        Image={HelloWorld}
                        UrlGitHub="https://github.com/LipeMachado/customHelloWorld-21DaysOfCode"
                        UrlDemo="https://helloworld-21daysofcode.vercel.app/"
                    />
                    <CardProjects
                        Title="Animated Button"
                        Description="Challenge number 3 of the 21 day rocketseat challenge."
                        Image={AnimatedButton}
                        UrlGitHub="https://github.com/LipeMachado/animatedButton-21DaysOfCode"
                        UrlDemo="https://animatedbutton-21daysofcode.vercel.app/"
                    />
                </MainBox>
            </MainContainer>
        </>
    );
}