import React from 'react'
import tw from 'tailwind-styled-components'
import { particlesConfig } from '../config/aboutParticlesConfig'
import Particles from "react-tsparticles";
import { Link } from 'react-router-dom'

const AboutContainer = tw.div`flex flex-col justify-center md:px-12 p-4 min-h-screen`
const HeaderTextContainer = tw.div`pb-4`
const HeaderText = tw.span`text-6xl text-slate-400 p-2 font-bold text-center md:text-left`
const ParagraphWrapper = tw.div`text-slate-400 text-justify p-2`
const HighlightedText = tw.span`text-emerald-500`
const LinkText = tw.span`text-blue-400 hover:text-blue-300`
const ProjectsTextContainer = tw.div`pt-4`
const ProjectsText = tw.span`text-3xl text-slate-400 p-2`

type LinkProps = {
    location: string
    label: string
}
const OutLink = ({ location, label }: LinkProps): JSX.Element => {
    return (
        <LinkText>
            <a href={location} target="_blank" rel="noreferrer">
                {label + " "}
            </a>
        </LinkText>
    )
}

const About = (): JSX.Element => {
    return (
        <>
            <AboutContainer>
                <HeaderTextContainer>
                    <HeaderText>About Me</HeaderText>
                </HeaderTextContainer>
                <ParagraphWrapper><HighlightedText>Hey, I'm Justin.</HighlightedText></ParagraphWrapper>
                <ParagraphWrapper>If you know me irl, you know I'm a nerd at heart, but I'm also big into sports,
                    fitness, gaming, and cars.</ParagraphWrapper>
                <ParagraphWrapper>I'm currently a <HighlightedText>Software Developer</HighlightedText> at an
                    awesome
                    company: <OutLink location="https://www.vehikl.com" label="Vehikl." />
                    We are a software consultancy company with a focus on growth and caring. This leads to constant
                    opportunities to learn
                    and practice new technologies in my day-to-day, while also understanding, improving,
                    and advancing codebases of all sizes.</ParagraphWrapper>
                <ParagraphWrapper>If you want to check out how we work at Vehikl, we host public <OutLink
                    location="https://growth.vehikl.com" label="Growth Sessions" /> daily
                    that anyone can join!</ParagraphWrapper>
                <ParagraphWrapper>Besides work, I enjoy many sports such as hockey and golf. I do my best to stay in
                    shape so you'll see me at the gym ~4 times a week (well, maybe less...). I also like to consider
                    myself a gamer, keeping myself busy with games like Valorant, Apex Legends, League (*sigh*), and
                    sim
                    racing games.</ParagraphWrapper>
                <ParagraphWrapper>I like to think I have a pretty cool car. My 2014 Genesis Coupe has been my baby
                    for a few years now, and if you're into cars you can check it out on my ig, <OutLink
                        location="https://www.instagram.com/bk2.juddy/" label="@bk2.juddy" />
                </ParagraphWrapper>

                <ParagraphWrapper>
                    If it isn't clear from this website, I don't spend much time in the design space. I'm always
                    open to learning,
                    but usually leave that work to the designers, and spend most of my time at work writing back-end
                    javascript code.
                </ParagraphWrapper>
                <ProjectsTextContainer>
                    <ProjectsText>Check out some of my work <Link
                        to='/projects'><LinkText>here</LinkText></Link></ProjectsText>
                </ProjectsTextContainer>
            </AboutContainer>
            <Particles options={particlesConfig} />
        </>
    )
}

export default React.memo(About)