import React from 'react'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SectionDivider } from '../../styles/GlobalComponents';
import { Exp, Exph2, Exph3, Exph4, Expp } from './ExperienceStyles';
// import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
const exp = [
    {
        id: "1",
        title: "Full stack web developer intern (MERN)",
        company: "Creatosaurus - stories matter!",
        date: "March 2021 - September 2021",
        desc: ["Improved overall UX of clients Website.", "Assisted Senior Developers in managing day to day work and built some features for companies own product.", "Built frontend for clients website using React.js"],
    },
    {
        id: "2",
        title: "Full stack web developer intern (MERN)",
        company: "Webknot Technologies Pvt Ltd",
        date: "November 2021 - Present",
        desc: ["Worked in a team to improve overall look and functionality of clients projects.", "Worked on multiple projects with latest technologies like ReactJS, NodeJs/express, Redux."],
    }
]
const Experience = () => {
    return (
        <Section nopadding >
            <SectionDivider></SectionDivider>
            <SectionTitle main>Experience</SectionTitle>
            <Exp className="exp">
                {exp.map((ex, i) => (
                    <div key={i}>
                        <Exph2><span style={{ fontWeight: 500, fontSize: "2.5rem" }}>Role -</span> {ex.title}</Exph2>
                        <Exph3>Organization / Company Name - {ex.company}</Exph3>
                        <Expp><span style={{ fontWeight: 500, fontSize: "1.7rem" }}>Description -</span>
                            {ex.desc.map((sen, index) => (
                                <Expp>{index + 1}.  {sen}</Expp>
                            ))}
                        </Expp>
                        <Exph4>{ex.date}</Exph4>
                    </div>
                ))}
            </Exp>
        </Section>
    )
}

export default Experience
