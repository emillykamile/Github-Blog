import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 100vw;
    max-height: 18.5vh;
    display: flex;
    justify-content: center;
    margin: 3rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors["base-background"]}
`;