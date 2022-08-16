import styled from 'styled-components';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.7rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;

    h1 {
        font-size: 30px;
        color: var(--white-font);
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled.div`
    border-radius: 4px;
    padding: 10px 22px;
    color: var(--white-font);
    outline: none;
    border: 3px solid var(--purple-dark);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: var(--green);
        color: var(--black);
    }
`;