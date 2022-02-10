import React from 'react'
import tw from "tailwind-styled-components"

const HomeContainer = tw.div`flex-1 h-screen flex flex-col justify-center text-center items-center`

const HeaderText = tw.span`text-6xl text-gray-700 font-bold`
const SubheaderText = tw.span`text-xl text-slate-400`

const Home = (): JSX.Element => {
    return (
        <HomeContainer>
            <HeaderText>Justin Struk</HeaderText>
            <SubheaderText>Software Developer</SubheaderText>
        </HomeContainer>
    )
}

export default React.memo(Home)