import styled from "styled-components";

export const CardBoxDiv = styled.div`
    width: 350px;
    height: 350px;
    background-color: var(--blue-card); 
    padding: 1rem 1rem;
    border-radius: 5px;
    border: 2px solid var(--purple-border);
    margin-bottom: 2rem;

    @media screen and (max-width: 500px) {
        width: 220px;
    }
`;

export const CardBoxImageDiv = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    background-color: var(--blue-image-card);
    position: relative;
    
    img {
        width: 90%;
        height: 90%;
    }

    div {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.3s ease-in-out;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        background-color: var(--purple-opacity);

        p {
            padding: 1rem;
        }

        &:hover {
            opacity: 1;
        }
    }
`;

export const CardBoxTitle = styled.div`
    margin-bottom: 3.5rem;
`;

export const CardBoxButtonDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const CardBoxButtonDemo = styled.button`
    border-radius: 4px;
    padding: 10px 22px;
    outline: none;
    color: var(--white-font);
    background-color: transparent;
    border: 3px solid var(--purple-dark);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-right: 15px;

    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: var(--green);
        color: var(--black);
    }
`;

export const CardBoxButtonDemoLink = styled.a`
    text-decoration: none;
`;

export const CardBoxButtonGitHubLink = styled.a`
    text-decoration: none;
`;

export const CardBoxButtonGitHub = styled.button`
    border-radius: 4px;
    padding: 10px 22px;
    outline: none;
    background-color: transparent;
    color: var(--white-font);
    border: 3px solid var(--purple-dark);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: var(--green);
        color: var(--black);
    }
`;