import React from 'react'
import Particles from 'react-tsparticles'
import tw from "tailwind-styled-components"
import avatar from '../assets/images/me.png'
import { particlesConfig } from '../config/homeParticalsConfig'

const HomeContainer = tw.div`flex-1 h-screen flex flex-col justify-center text-center items-center overflow-hidden`

const HeaderText = tw.span`text-6xl text-slate-600 font-bold`
const SubheaderText = tw.span`text-xl text-slate-400`
const HeroImage = tw.div`relative w-32 h-32`

const Home = (): JSX.Element => {
    return (
        <HomeContainer>
            <Particles className="fixed w-full" options={particlesConfig}/>
            <HeroImage>
                <img className="rounded-full border border-gray-100 shadow-sm z-10" src={avatar}
                     alt="Justin Struk Avatar"/>
            </HeroImage>
            <HeaderText>Justin Struk</HeaderText>
            <SubheaderText>Software Developer</SubheaderText>
        </HomeContainer>
    )
}

export default React.memo(Home)