import React from 'react'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SectionDivider } from '../../styles/GlobalComponents';
import { Exp, Exph2, Exph3, Exph4, Expp, Hr } from './ExperienceStyles';
// import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
const exp = [
    
        {
            id: "1",
            title: "SDE-1 (Full-Time) ",
            company: "Webknot Technologies Pvt Ltd",
            date: "June 2021 - Present",
            desc: "I played a pivotal role in spearheading the development and maintenance of dynamic web applications, where my focus on translating design concepts into responsive and highly functional interfaces using React.js and Next.js significantly elevated the user experience. Collaborating closely with top-notch UX/UI designers, I not only implemented but also optimized features to ensure a seamless and visually stunning interface. My active engagement in rigorous code reviews, debugging, and performance optimization efforts contributed substantially to the overall quality and efficiency of the products. Notably, I showcased leadership skills by guiding and leading a team of three interns through successful project executions, demonstrating my commitment to fostering a collaborative and high-impact development environment.",
        },
        {
            id: "2",
            title: "Product Engineer (Staff Augmentation) ",
            company: "Aditya Birla Group Pvt Ltd",
            date: "June 2022 - June 2023",
            desc: "As an onsite Product Engineer at ABG, I played a pivotal role in orchestrating the development of cutting-edge analytical applications and crafting bespoke dashboards for key businesses within the Aditya Birla Group, including Ultratech, Hindalco, and Fashion. In seamless collaboration with senior developers and managers, I meticulously tailored these solutions to precisely align with stakeholder requirements, demonstrating a strategic approach that not only optimized decision-making processes but also yielded significant cost savings. Through this concerted effort, Me and my team contributed to an impressive $60 Millions yearly in overall savings across diverse businesses within the Aditya Birla Group, showcasing the impactful convergence of technological innovation and business acumen.",
        },
        {
        id: "3",
        title: "MERN Stack Developer (Internship)",
        company: "Creatosaurus Pvt Ltd",
        date: "March 2021 - June 2021",
        desc: "As a MERN Stack Developer Intern at Creatosaurus, I played a pivotal role in the end-to-end development of dynamic web applications. My responsibilities included designing and implementing MongoDB databases for efficient data management, developing RESTful APIs using Express.js, and crafting responsive user interfaces with React.js. I contributed to the implementation of robust server-side logic using Node.js, collaborated closely with cross-functional teams to troubleshoot issues, and actively participated in Agile development methodologies. Additionally, I ensured codebase integrity through version control using Git and played a key role in the deployment process to staging and production environments. My commitment to continuous learning allowed me to stay current with industry trends and integrate emerging technologies into project workflows, enhancing overall project efficiency and success.",
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
                        <Exph2>{ex.company}</Exph2>
                        <Exph3>{ex.title}</Exph3>
                        <Expp>
                            {ex.desc}
                        </Expp>
                        <Exph4>{ex.date}</Exph4>
                        {
                            i !== exp.length - 1 &&
                            <Hr></Hr>
                        }
                    </div>
                ))}
            </Exp>
        </Section>
    )
}

export default Experience
