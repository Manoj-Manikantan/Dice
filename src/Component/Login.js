import React, { Component } from 'react'
import styled from 'styled-components'
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";


export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            fieldIsEmpty: false,
            errorMessage: ''
        }
    }
    componentDidMount() {
        var nameInput =  document.getElementById("nameInput")
        var nameLabel = document.getElementById("nameLabel")
        var passwordInput = document.getElementById("passwordInput")
        var passwordLabel = document.getElementById("passwordLabel")
        nameInput.addEventListener("focus", () => {
            nameLabel.style.transform = "translate(0px,-15px)"
            nameLabel.style.fontSize = "15px"

        })

        nameInput.addEventListener("blur", () => {
            if (document.getElementById("nameInput").value === "") {
                nameLabel.style.transform = "translate(0px,0px)"
                nameLabel.style.fontSize = "20px"
            }

        })
        passwordInput.addEventListener("focus", () => {
            passwordLabel.style.transform = "translate(0px,-11px)"
            passwordLabel.style.fontSize = "15px"
        })

        passwordInput.addEventListener("blur", () => {
            if (passwordInput.value === "") {
                passwordLabel.style.transform = "translate(0px,0px)"
                passwordLabel.style.fontSize = "20px"
            }
        })
    }

    submitHandler = e =>{
        e.preventDefault()
        var nameInput =  document.getElementById("nameInput")
        var nameLabel = document.getElementById("nameLabel")
        var passwordInput = document.getElementById("passwordInput")
        var passwordLabel = document.getElementById("passwordLabel")
        console.log("Here")
        console.log(document.getElementById("nameInput"))
        if(nameInput.value==="") {
            nameLabel.classList.add("error")
            nameInput.classList.add("error")
        this.setState({
            fieldIsEmpty: true,
            errorMessage: 'Please enter an email address'
        })
    }else if(document.getElementById("passwordInput").value===""){
        nameInput.classList.remove("error")
        nameLabel.classList.remove("error")
        passwordInput.classList.add("error")
        passwordLabel.classList.add("error")
        this.setState({
            fieldIsEmpty: true,
            errorMessage: 'Please enter password'
        })
    }else{
        nameInput.classList.remove("error")
        nameLabel.classList.remove("error")
        passwordInput.classList.remove("error")
        passwordLabel.classList.remove("error")
        this.setState({
            fieldIsEmpty: false,
        })
    }
    }
    render() {
        return (
            <Container-fluid>
                <NavbarPage />
                <OuterContainer>
                    <InnerContainer>
                          {/* <Image src={Logo} alt="Logo Image" /> */}
                    <Heading>Welcome Back</Heading>
                    <Form onSubmit={this.submitHandler}>
                        <FormContainer>
                            <Label id="nameLabel">Email</Label>
                            <Input id="nameInput" type="text" />
                            <Label id="passwordLabel">Password</Label>
                            <Input id="passwordInput" type="password" />
        {this.state.fieldIsEmpty && <ErrorLabel>{this.state.errorMessage}</ErrorLabel>} 
                            <Button type="submit">Sign In</Button>
                        </FormContainer>
                    </Form>
                    </InnerContainer>
                </OuterContainer>
                <Footer />
            </Container-fluid>
        )
    }
}
export default Login
const OuterContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    place-items:center;
    height: calc(100vh - 17vh);
    @media (min-width:740px){
        height: calc(100vh - 21vh);
    }
`;
const InnerContainer = styled.div` display:grid; grid-template-columns:100%; row-gap: 10vh;text-align:center;`;
const Image = styled.img`width: 340px; height:auto;`;
const Button = styled.button`

    background-color: #743c97;
    color:white;
    padding:10px 10px;
    font-size:20px;
    border: 1px solid transparent;
    outline:none;
    &:hover{
        color:#743c97;
        background-color:white;
        border:1px solid #743c97;
    }
`;
const Heading = styled.h1`
font-size: 2.4rem;
line-height: 1.33333;
font-weight: 600;
color: rgba(0,0,0,0.9);
color:#743c97;
margin:0;
padding:0;
`;
const FormContainer = styled.div`
display:grid;
grid-template-columns:100%;
grid-row-gap:10px;
position:relative;
`;
const Form = styled.form``;
const Label = styled.label`
    position:absolute;
    font-size:20px;
    padding-left:5px;
    transition: all 200ms ease-in;
    &:nth-of-type(1){
        top:13px;
        &.error{
            color:red;
        }
    }
    &:nth-of-type(2){
        top:65px;
        &.error{
            color:red;
        }
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
transition: all 200ms ease-in;
&:nth-of-type(1){
    &.error{
        border-bottom:1px solid red;
    }
}
&:nth-of-type(2){
    &.error{
        border-bottom:1px solid red;
    }
}
`;
const ErrorLabel = styled.label`
color:red;
`;
