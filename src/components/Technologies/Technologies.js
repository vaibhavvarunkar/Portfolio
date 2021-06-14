import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider>
    </SectionDivider>
    <SectionTitle main>
      Technologies
    </SectionTitle>
    <SectionText>
      I Have Worked With A Range Of Technologies In Web Developement.
      From Front-end To Back-end.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experinece with <br />
            HTML, CSS, JS, Bootstrap <br />
            & React.js and also version control <br></br>
            using Git & Github.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experinece with <br />
            Node, Express and Databases <br></br>
            Like Mysql & MongoDB and also <br></br>
            deployment using Heroku.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Competitive Coding</ListTitle>
          <ListParagraph>
            Experinece with <br />
            Python & OOP and have 5 stars at Hackerrank in python.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
