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
        <SectionText>Hello, I am Vaibhav Varunkar. A Third Year IT Engineering Student, Interested in Web Developement Specially in MERN Stack. Checkout My Work Below And Feel Free To Get In Touch If You Want To Work With Me.</SectionText>
        <Button onClick={() => window.location = "mailto:you@youraddress.com"}>Get In Touch</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;