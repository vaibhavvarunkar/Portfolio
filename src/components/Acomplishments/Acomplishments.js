import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "5+", text: 'Personal Projects' },
  { number: 2, text: 'Tech Internship', },
  { number: "5 Stars", text: 'in Python At Hackerrank', },
  { number: "10000+", text: 'Lines Of Code Written', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle main>Personal Acomplishments</SectionTitle>
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
