import { Image, Logo, Navb, StyledHeader } from "./styled/Header.styled";
import { Container } from "./styled/Container.styled";
import LogoSVG from '../images/logo.svg';
import { Button_ } from "./styled/Button.styled";
import { Flex } from "./styled/Flex.styled";
import Image1 from '../images/illustration-grow-together.svg';
import Image2 from '../images/illustration-mockups.svg';


// Flex aligns stuff side by side

export default function Header() {
    return (

        <StyledHeader>
            <Container>
                <Navb>
                    <Logo src={LogoSVG} alt=''></Logo>
                    <Button_>Try it Free</Button_>
                </Navb>
                <Flex>
                    <div>
                        <h1>Build a Commmunity Fans Will Love!</h1>
                        <p>Huddle reimagines the way we build communities. You have a vocice
                            and you are heard! Join us if you enjoy food XD?
                        </p>
                        <Button_ bg='#ff0099' color='#fff'>Get Started for Free</Button_>
                    </div>
                    <Image src={Image2}></Image>
                    
                </Flex>
            </Container>
        </StyledHeader>
    );
};