// Styled elements for the Card go here
import styled from "styled-components";

import { CardContainer, SectionParagraph, SectionSubheading } from "~/components";

export const StyledCardContainer = styled(({height, ...props})=><CardContainer {...props}/>)`  
    background-color: #D3D3D3;
    display: flex;
    flex-direcion: column;
    flex: 1;
    padding: 20px;
`;

export const StyledCardParagraph = styled(({...props})=><SectionParagraph {...props}/>)`
    margin-top: 10px;
    flex: 1;
`;

export const StyledCardTitle = styled(({...props})=><SectionSubheading {...props}/>)`
    margin-bottom:0px;
`;
export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
    flex: 0;
    margin-right: 20px;
    margin-top:auto;
    margin-bottom:auto;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
    flex: 1;
`;
