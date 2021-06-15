import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image}></Img>
          <TitleContent>
            <HeaderThree title>
              {project.title}
            </HeaderThree>
            <Hr></Hr>
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent style={{ marginTop: "1rem" }}><span style={{ fontSize: "25px", marginTop: "1rem", paddingBottom: "5px", color: "lightgreen", borderBottom: "2px solid white" }}>Stack</span></TitleContent>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit}>Visit</ExternalLinks>
            <ExternalLinks href={project.source}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
)

export default Projects;