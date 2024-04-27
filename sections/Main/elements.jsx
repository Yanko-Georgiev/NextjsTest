import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    display: flex;
    background-image: url("/img/background.png");
    background-size: contain;
    background-repeat: no-repeat;
    height: 40rem; /* Adjust height as needed */
    padding: 0;
    margin-left: 0;
    margin-right: 0;

    @media (max-width: 1024px) {
        flex-direction: column; /* Stack items vertically on smaller screens */
        align-items: center; /* Center items horizontally */
        height: auto; /* Let the container adjust its height based on content */
    }
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
    margin-top: 5rem;
    margin-bottom: 0;
    text-align: center;

    @media (max-width: 1024px) {
        margin-top: 3rem; /* Adjust margin for smaller screens */
    }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
    margin-top: 0;
    margin-bottom: 5rem;
    text-align: center;

    @media (max-width: 1024px) {
        margin-bottom: 3rem; /* Adjust margin for smaller screens */
    }
`;

export const StyledImageContainer = styled.div`
    max-width: 24rem;
    width: 100%;
    height: 100%;
    margin-left: auto;

    @media (max-width: 1024px) {
        margin: 0 auto 2rem auto; /* Center the image and add space below */
    }
`;

export const StyledCardCollectionContainer = styled.div`
    max-width: 32.03rem;
    max-height: 60rem;
    width: 100%;
    height: 100%;
    margin-right: auto;
    margin-left: 5rem;

    @media (max-width: 1024px) {
        margin: 0 auto; /* Center the card collection */
    }
`;
