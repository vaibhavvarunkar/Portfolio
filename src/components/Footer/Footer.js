import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+918975106433">+918975106433</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vaibhavvarunkar2001@gmail.com">vaibhavvarunkar2001@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialContainer>
        <CompanyContainer>
          <Slogan>If you can dream it, we can design and code it.</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/vaibhavvarunkar">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/vaibhav-varunkar-146b851b0/">
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/vaibhaavvv_fit/?utm_medium=copy_link">
            <AiFillInstagram size="3rem"></AiFillInstagram>
          </SocialIcons>
        </SocialIconsContainer>
      </SocialContainer>

    </FooterWrapper>
  );
};

export default Footer;
