import styled from "styled-components";
import {SectionContainer,SectionHeading,SectionSubheading} from "~/components"

export const StyledContainer = styled(({height, ...props})=><SectionContainer {...props} />)`
    display: flex;
    align-items: center;
    background-image: url("/img/background.png");
    background-size: contain;
    background-repeat: no-repeat;
    height: 700px; /* Adjust height as needed */
    padding: 20px;
`;

export const StyledTitle = styled((props)=> <SectionHeading {...props}/>)`
    margin-top: 10rem;
    margin-bottom: 0;
    text-align: center;
`;

export const StyledDescription = styled((props)=><SectionSubheading {...props}/>)`
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: center;
`;

export const StyledImageContainer = styled(({...props})=><div{...props}/>)`
    max-width: 32.03rem;
    max-height: 65rem;
    width: 100%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
`;