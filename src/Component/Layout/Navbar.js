import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburger from "../../Images/icons8-gradient-line-50.png"
import Logo from '../../Images/logo.jpg'

export class NavbarPage extends Component {

  componentDidMount() {

    document.getElementById("hamburgerIcon").addEventListener("click", () => {
      document.getElementById("list").classList.toggle("active")
      document.body.classList.toggle("bodyScroll");
    })
  }
  render() {
    return (
      <OuterContainer>
        <ImagesContainer>
          <LogoImage src={Logo} alt="logo" />
          <HamburgerImage id="hamburgerIcon" src={Hamburger} alt="hamburgerIcn" />
        </ImagesContainer>
        <List id="list" className="inactive">
          <ListItem>
            About
          </ListItem>
          <ListItem>
            People
          </ListItem>
          <ListItem>
            Services
          </ListItem>
          <ListItem>
            Sample Projects
          </ListItem>
          <ListItem>
            Contact
          </ListItem>
          <ListItem>
            Login
          </ListItem>
        </List>
      </OuterContainer>
    )
  }
}

export default NavbarPage;

const OuterContainer = styled.div`
    display:grid;
    grid-template-columns: 100%;
    @media (min-width:740px){
        grid-template-columns: 40% 60%;
    }
`;
const ImagesContainer = styled.div`
    display:grid;
    grid-template-columns: 65% 10%;
    justify-content: space-around;
    align-items: center;
    @media (min-width:740px){
        #hamburgerIcon{
            display:none;
        }
    }
`;
const Image = styled.img``;
const HamburgerImage = styled(Image)`
`;
const LogoImage = styled(Image)`
    padding: 10px 0;
    width:100px;
    height:50px;
    @media (min-width: 740px){
        width:30%;
        height:auto;
    }
`;
const List = styled.ul`
list-style-type: none;
transition: opacity 300ms ease-in-out;
@media (max-width:739px){
    position:absolute;
    z-index:99;
    margin:0;
    padding:0;
    bottom:0;
    width:100vw;
    height: calc(100vh - 60px);
    display: grid;
    grid-template-columns:100%;
    place-items:center;
    background-color: #743c97;
    color:white;
    font-size: 25px;  
    &.inactive{
        opacity:0; 
    }
    &.active{
        opacity:1;
    }
}
@media (min-width:740px){
    display: grid;
    align-items:center;
    grid-template-columns: repeat(6,auto);  
}
`;
const ListItem = styled.li`
margin:0;
padding:0;
@media (min-width:740px){
    color:#743c97;
    font-size:17px;
    cursor:pointer;
    &:hover{
        color:gray;
    }
}
`;

