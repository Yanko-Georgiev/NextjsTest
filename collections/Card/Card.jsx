// The Card to be exported goes here
import {StyledCardContainer, StyledCardTitle, StyledCardParagraph, StyledImageContainer, StyledTextContainer} from "./elements";

export const Card =({ image, title, description, ...props})=>{
    return(
        <StyledCardContainer {...props}>
            <StyledTextContainer>
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledCardParagraph>{description}</StyledCardParagraph>
            </StyledTextContainer>
            <StyledImageContainer>
                <img src={image.src} width={image.width} height={image.height}/>
            </StyledImageContainer>
        </StyledCardContainer>
    )
}