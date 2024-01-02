import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main>
          Welcome To <br></br>
          My Personal Portfolio
        </SectionTitle>
        <SectionText>Hello world! I'm Vaibhav Varunkar, a frontend focused full-stack developer on a mission to transform pixels into immersive digital experiences. With a passion for crafting visually stunning and user-centric interfaces, I thrive on the dynamic interplay of design and code. Let's build something extraordinary together!</SectionText>
        <Button onClick={() => window.location = "mailto:vaibhavvarunkar2001@gmail.com"}>Get In Touch</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;