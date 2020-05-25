import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from "../Images/logo.jpg"

export class Login extends Component {
    componentDidMount() {
        document.getElementById("nameInput").addEventListener("focus", () => {
            document.getElementById("nameLabel").style.transform = "translate(0px,-15px)"
            document.getElementById("nameLabel").style.fontSize = "15px"

        })

        document.getElementById("nameInput").addEventListener("blur", () => {
            if (document.getElementById("nameInput").value === "") {
                document.getElementById("nameLabel").style.transform = "translate(0px,0px)"
                document.getElementById("nameLabel").style.fontSize = "25px"
            }

        })
        document.getElementById("passwordInput").addEventListener("focus", () => {
            document.getElementById("passwordLabel").style.transform = "translate(0px,-11px)"
            document.getElementById("passwordLabel").style.fontSize = "15px"
        })

        document.getElementById("passwordInput").addEventListener("blur", () => {
            if (document.getElementById("passwordInput").value === "") {
                document.getElementById("passwordLabel").style.transform = "translate(0px,0px)"
                document.getElementById("passwordLabel").style.fontSize = "25px"
            }
        })
    }
    render() {
        return (
            <OuterContainer>
                <img src={Logo} alt="Logo Image" />

                <Heading>Welcome Back</Heading>
                <Form>
                    <InnerContainer>
                        <Label id="nameLabel">Name</Label>
                        <Input id="nameInput" type="text" />
                        <Label id="passwordLabel">Password</Label>
                        <Input id="passwordInput" type="password" />
                        <Button>Sign In</Button>
                    </InnerContainer>
                </Form>
            </OuterContainer>

        )
    }
}
export default Login
const OuterContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    place-items:center;
    height: calc(100vh - 150px);
`;
const Button = styled.button`

    background-color: #743c97;
    color:white;
    padding:10px 10px;
    font-size:20px;
    outline:none;
    &:hover{
        color:#743c97;
        background-color:white;
        border:2px solid #743c97;
    }
`;
const Heading = styled.h1`
font-size: 2.4rem;
line-height: 1.33333;
font-weight: 600;
color: rgba(0,0,0,0.9);
padding: 0 0 4px 0;
color:#743c97;
`;
const InnerContainer = styled.div`
display:grid;
grid-template-columns:100%;
grid-row-gap:10px;
place-itesm:center;
position:relative;
`;
const Form = styled.form``;
const Label = styled.label`
    position:absolute;
    font-size:20px;
    padding-left:5px;
    &:nth-of-type(1){
        top:13px;
    }
    &:nth-of-type(2){
        top:65px;
    }
    transition: all 200ms linear;
    z-index:20;
`;
const Input = styled.input`
padding: 15px 0 0 2px;
font-size:25px;
border:1px solid black;
position:relative;
z-index:1;
border:none;
border-bottom: 1px solid #743c97;
outline:none;
`;
