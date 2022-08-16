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
                    <NavBtnLink>My Github</NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    )
}