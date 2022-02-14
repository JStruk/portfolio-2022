import React from 'react'
import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'
import navbarIcons from '../assets/navbarIcons.json'

const LeftNav = tw.div`bg-emerald-400 opacity-90 z-10 pt-4 min-h-screen`
const NavBarLink = tw.span`text-center text-sm font-semibold text-slate-100 rounded-lg`
const NavContainer = tw.nav`justify-center md:block sm:px-4 pb-4 md:pb-0 md:overflow-y-auto`
const IconLinkContainer = tw.div`sm:px-2 hover:bg-emerald-600 rounded-2xl`
const LogoContainer = tw.div`h-16 w-16 flex mx-auto mb-2`

type IconLinkProps = {
    label: string
    location: string
}

const IconLink = ({label, location}: IconLinkProps): JSX.Element => {
    type NavBarIconsEntry = { path: string, viewBox: string }

    // @ts-ignore
    const {path, viewBox}: NavBarIconsEntry = navbarIcons[label]

    return (
        <IconLinkContainer>
            <Link to={location} className="flex flex-col justify-center items-center py-4">
                <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox={`${viewBox}`}>
                    <path d={`${path}`}/>
                </svg>
                <NavBarLink>{label}</NavBarLink>
            </Link>
        </IconLinkContainer>
    )
}

const LeftNavBar = (): JSX.Element => {
    return (
        <LeftNav>
            <NavContainer>
                <LogoContainer>
                    <img src="/images/logo.png" alt="Justin Struk Logo"/>
                </LogoContainer>
                <IconLink label="Home" location="/"/>
                <IconLink label="About" location="/about"/>
                <IconLink label="Projects" location="/projects"/>
                <IconLink label="Resume" location="/resume"/>
                <IconLink label="Contact" location="/contact"/>
            </NavContainer>
        </LeftNav>
    )
}

export default React.memo(LeftNavBar)