import styled  from 'styled-components'
import Typewriter from 'typewriter-effect'


const HeroSection = styled.div`
width: 100%;
height: 85vw;

`

const Container = styled.h1`



`


const Hero = () =>{
    return(
        <HeroSection>
        
               
            <Typewriter
  options={{
    strings: ['Web developer who cares.'],
    autoStart: true,
    loop: true,
  }}
/>

          
        </HeroSection>
    )
}

export default Hero