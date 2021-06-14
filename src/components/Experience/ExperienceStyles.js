import styled from 'styled-components';

export const Exp = styled.div`
color:black;
margin: 0 0 2rem 2rem;
width:90%;
padding:2rem;
color:white;
box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
text-align: left;
`;

export const Exph2 = styled.h2`
  margin: 1.5rem;
  @media ${props => props.theme.breakpoints.sm}{
   fontWeight: 400 !important;
  }
`;

export const Exph3 = styled.h3`
  margin: 1.5rem;
`;

export const Exph4 = styled.h4`
  margin: 1.5rem;
`;

export const Expp = styled.p`
  margin: 1.5rem;
`;

