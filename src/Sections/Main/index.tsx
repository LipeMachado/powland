import { CardProjects } from '../../Components/CardProjects';
import {
    MainContainer,
    MainBox
} from './style'

import DefaultImage from '../../Assets/Images/powlandImage.jpeg'
import HelloWorld from '../../Assets/Images/challenge-HelloWorld.jpeg'
import AnimatedButton from '../../Assets/Images/challenge-AnimatedButton.jpeg'
import HuddleLandingPage from '../../Assets/Images/challenge-HuddleLandingPage.jpeg'
import LoginPage from '../../Assets/Images/challenge-LoginPage.jpeg'
import NftCard from '../../Assets/Images/challenge-NFTCard.jpeg'
import OrderSummary from '../../Assets/Images/challenge-OrderSummary.jpeg'
import ProfileCard from '../../Assets/Images/challenge-ProfileCard.jpeg'
import QrCode from '../../Assets/Images/challenge-QRCode.jpeg'
import StatsPreview from '../../Assets/Images/challenge-StatsPreview.jpeg'

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
                    <CardProjects
                        Title="Huddle Landing Page"
                        Description="Challenge performed from the FrontendMentor website."
                        Image={HuddleLandingPage}
                        UrlGitHub="https://github.com/LipeMachado/huddleLandingPage-Challenge"
                        UrlDemo="https://huddlelandingpage-challenge.vercel.app/"
                    />
                    <CardProjects
                        Title="Login Page"
                        Description="Challenge performed from the FrontendMentor website."
                        Image={LoginPage}
                        UrlGitHub="https://github.com/LipeMachado/loginPage-Challenge"
                        UrlDemo="https://loginpage-challenge.vercel.app/"
                    />
                    <CardProjects
                        Title="NFT Card"
                        Description="Challenge performed from the FrontendMentor website."
                        Image={NftCard}
                        UrlGitHub="https://github.com/LipeMachado/nftCard-Challenge"
                        UrlDemo="https://nftcard-component-challenge.vercel.app/"
                    />
                    <CardProjects
                        Title="Order Summary Card"
                        Description="Challenge performed from the FrontendMentor website."
                        Image={OrderSummary}
                        UrlGitHub="https://github.com/LipeMachado/orderSummary-Challenge"
                        UrlDemo="https://ordersummary-challenge.vercel.app/"
                    />
                    <CardProjects
                        Title="Profile Card"
                        Description="Challenge performed from the FrontendMentor website."
                        Image={ProfileCard}
                        UrlGitHub="https://github.com/LipeMachado/profileCard-Challenge"
                        UrlDemo="https://profilecard-challenge.vercel.app/"
                    />
                    <CardProjects
                        Title="QR Code Card"
                        Description="Challenge performed from the FrontendMentor website."
                        Image={QrCode}
                        UrlGitHub="https://github.com/LipeMachado/qrCode-Challenge"
                        UrlDemo="https://qrcode-challenge.vercel.app/"
                    />
                    <CardProjects
                        Title="Stats Preview Card"
                        Description="Challenge performed from the FrontendMentor website."
                        Image={StatsPreview}
                        UrlGitHub="https://github.com/LipeMachado/statsPreview-Challenge"
                        UrlDemo="https://statspreview-challenge.vercel.app/"
                    />
                </MainBox>
            </MainContainer>
        </>
    );
}