import React from 'react'
import tw from 'tailwind-styled-components'

const AboutContainer = tw.div`flex justify-center items-center h-screen overflow-scroll pt-32 p-2`
const TextContainer = tw.div`md:px-12 overflow-scroll`
const ParagraphWrapper = tw.div`text-slate-400 text-justify p-2`
const HighlightedText = tw.span`text-emerald-500`
const LinkText = tw.span`text-blue-400`

type LinkProps = {
    location: string
    label: string
}
const Link = ({location, label}: LinkProps): JSX.Element => {
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
        <AboutContainer>
            <TextContainer>
                <ParagraphWrapper><HighlightedText>Hey, I'm Justin.</HighlightedText></ParagraphWrapper>
                <ParagraphWrapper>If you know me irl, you know I'm a nerd at heart, but I'm also big into sports,
                    fitness, gaming, and cars.</ParagraphWrapper>
                <ParagraphWrapper>I'm currently a <HighlightedText>Software Developer</HighlightedText> at an awesome
                    company: <Link location="https://www.vehikl.com" label="Vehikl" />
                    We are a software consultancy company with a focus on growth, which means opportunities to learn and
                    practice new technologies are constant in my day-to-day, as well as understanding, improving, and
                    advancing codebases of all sizes.</ParagraphWrapper>
                <ParagraphWrapper>If you want to check out how we work at Vehikl, we host public <Link location="https://growth.vehikl.com" label="Growth Session" /> daily
                    that anyone can join!</ParagraphWrapper>
                <ParagraphWrapper>Besides work, I enjoy many sports such as hockey and golf. I do my best to stay in
                    shape so you'll see me at the gym ~4 times a week (well, maybe less...). I also like to consider
                    myself a gamer, keeping myself busy with games like Valorant, Apex Legends, League (*sigh*), and sim
                    racing games.</ParagraphWrapper>
                <ParagraphWrapper>I like to think I have a pretty cool car. My 2014 Genesis Coupe has been my baby
                    for a few years now, and if you're into cars you can check it out on my ig, <Link location="https://www.instagram.com/bk2.juddy/" label="@bk2.juddy" />
                </ParagraphWrapper>
            </TextContainer>
        </AboutContainer>
    )
}

export default React.memo(About)