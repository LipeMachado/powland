import styled from "styled-components";

export const CardBoxDiv = styled.div`
    width: 400px;
    height: 350px;
    background-color: var(--blue-card); 
    padding: 1rem 1rem;
    border-radius: 5px;
    border: 2px solid var(--purple-border);
    margin-bottom: 2rem;
`;

export const CardBoxImageDiv = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    background-color: var(--blue-image-card);
    
    img {
        width: 100px;
        height: 100px;
    }
`;