import React, { Component } from 'react'
import styled from 'styled-components'

export class Footer extends Component {
    render() {
        return (
            <OuterContainer>
                <HorizontalLine />
                <AboutAndContactUsContainer>
                    <Paragraph>About</Paragraph>
                    <Paragraph>People</Paragraph>
                    <Paragraph>Services</Paragraph>
                    <Paragraph>Sample Projects</Paragraph>
                    <Paragraph>Contact</Paragraph>
                </AboutAndContactUsContainer>
                <SocialMediaLinksContainer>
                    <FacebookIcon className="fa fa-facebook-square fa-3x" aria-hidden="true" />
                    <TwitterIcon className="fa fa-twitter-square fa-3x" aria-hidden="true" />
                    <InstagramIcon className="fa fa-instagram fa-3x" aria-hidden="true" />
                </SocialMediaLinksContainer>
                <AllRightsReservedContainer>
                    © 2020 DICE. All Rights Reserved.
                </AllRightsReservedContainer>
            </OuterContainer>
        )
    }
}

export default Footer

const Div = styled.div``;
const AllRightsReservedContainer = styled(Div)`
    margin-top:10px;
    padding-bottom:10px;
`;
const HorizontalLine = styled.hr`
border: 0.5px solid #743c97;
width:70vw;
`;
const OuterContainer = styled(Div)`
    bottom:0;
    display:grid;
    grid-template-columns:100%;
    text-align:center;
    color:#743c97;
`;
const AboutAndContactUsContainer = styled(Div)`
    display:grid;
    grid-template-columns: 100%;
    justify-content:center;
    align-items:center;
    @media (min-width:740px){
        grid-template-columns:repeat(5,10%);
    }
`;
const Paragraph = styled.p``;
const SocialMediaLinksContainer = styled(Div)`
    display:grid;
    grid-template-columns:repeat(3,15%);
    justify-content:center;

    @media (min-width:740px){
        grid-template-columns:repeat(3,8%);
    }
`;
const Icon = styled.i`
    margin-left: 10px;
`;
const FacebookIcon = styled(Icon)`
color:#743c97;
`;
const TwitterIcon = styled(Icon)`
color:#743c97;
`;
const InstagramIcon = styled(Icon)`
color:#743c97;

`;