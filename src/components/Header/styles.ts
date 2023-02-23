import styled from "styled-components";

// Imagens, background
import BackgroundHeader from "../../assets/img/Cover.png";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18.5rem;
    background: url(${BackgroundHeader}) no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

  img {
    margin-bottom: 5rem;
  }
`;