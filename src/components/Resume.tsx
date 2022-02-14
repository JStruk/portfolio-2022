import React from "react";
import Timeline from './Timeline'
import tw from "tailwind-styled-components";

const ResumeContainer = tw.div`flex flex-col justify-center md:px-12 p-4 min-h-screen`
const HeaderTextContainer = tw.div`md:pb-12`
const HeaderText = tw.span`text-6xl text-slate-400 p-2 font-bold text-center md:text-left`

const Resume = (): JSX.Element => {
    return (
        <ResumeContainer>
            <HeaderTextContainer>
                <HeaderText>
                    Resume & Experience
                </HeaderText>
            </HeaderTextContainer>
            <Timeline/>
        </ResumeContainer>
    )
}

export default React.memo(Resume)