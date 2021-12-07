import styled from "styled-components";
import { ThemeProvider } from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.header};
    padding: 40px 0;

    &:hover {
        background-color: #ebfbbb;
    }

`;
// @media is to make it responsive to changes in size
export const Navb = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`;

export const Logo = styled.img`
    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 40px;

`;

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: 768px) {
        margin: 40px 0 30px;
`;