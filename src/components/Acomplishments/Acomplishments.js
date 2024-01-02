import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "6+", text: 'Top Notch Industry Project Experience' },
  { number: "2 Awards", text: '1) Best Team Member 2) MVP@Webknot', },
  { number: "2", text: 'Projects handled as team lead.', },
  { number: "1 million+", text: 'Lines Of Code Written', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle main>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
