import styled from 'styled-components';

export const Hr = styled.hr`
  width: 90%;
  height: 3px;
  margin: 4rem auto;
  border: 0;
  background: #dcc;
`;

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
  color:#d0bb57;
  @media ${props => props.theme.breakpoints.sm}{
   fontWeight: 400 !important;
  }
`;

export const Exph3 = styled.h4`
  margin: 1.5rem;
`;

export const Exph4 = styled.h4`
  margin: 1.5rem;
`;

export const Expp = styled.p`
  font-size:1.5rem;
  font-weight:300;
  margin: 1.5rem;
`;

