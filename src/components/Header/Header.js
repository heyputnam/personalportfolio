import styled from 'styled-components'


const HeaderContainer = styled.div`
height: 4rem;
background: black;
display: flex;
justify-content: space-between;
align-items: center;

color: var(--black);;
`

const Nav = styled.div`
width: 25rem;
max-width: 40rem;
display: flex;
margin-left: 62%;
justify-content: space-between;
font-size: 2rem;
a{
    text-decoration: none;
    color: var(--white);
    margin-left: 20px;
}

`
const Header = () =>{
    return(
        <HeaderContainer>
           <Nav>
            <a href="#">Home</a>
            <a href="#">Resueme</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
           </Nav>
        </HeaderContainer>
    )
}

export default Header;