import styled  from 'styled-components'
import Typewriter from 'typewriter-effect'


const HeroSection = styled.div`
width: 100%;
height: 90vh;
background: black;
`

const Container = styled.div`
margin-top: 9rem;
font-size:calc(7rem + 5vw);
color: white;


`


const Hero = () =>{
    return(
        <HeroSection>
            <Container>
               
            <Typewriter
  options={{
    strings: ['Web developer who cares.'],
    autoStart: true,
    loop: true,
  }}
/>

            </Container>
        </HeroSection>
    )
}

export default Hero