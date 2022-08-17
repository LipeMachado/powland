import {
    Nav,
    NavLogo,
    NavMenu,
    NavBtnLink
} from "./style"

export function NavBar() {
    return (
        <>
            <Nav>
                <NavLogo>
                    <h1>Powland</h1>
                </NavLogo>
                <NavMenu>
                    <a href="https://github.com/LipeMachado"><NavBtnLink>My Github</NavBtnLink></a>
                </NavMenu>
            </Nav>
        </>
    )
}