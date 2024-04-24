import Image from "next/image"
import {StyledContainer,StyledTitle,StyledDescription, StyledImageContainer} from "./elements"


export const Main = ({ background, title, description, cardProps, ...props }) => {
    return (
    <>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledContainer {...props}>
            <StyledImageContainer>
                <Image layout="responsive" src="/img/video.png" height={700} width={500}></Image>
            </StyledImageContainer>
        </StyledContainer>
    </>)
}