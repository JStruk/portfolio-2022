import React from 'react'
import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'
import navbarIcons from '../assets/navbarIcons.json'

const NavBarLink = tw.span`text-center block text-sm font-semibold text-gray-900 rounded-lg`
const NavContainer = tw.nav`flex-grow md:block sm:px-4 pb-4 md:pb-0 md:overflow-y-auto`

type IconLinkProps = {
    label: string
    location: string
}

const IconLink = ({ label, location }: IconLinkProps): JSX.Element => {
    type NavBarIconsEntry = { path: string, viewBox: string }

    // @ts-ignore
    const { path, viewBox }: NavBarIconsEntry = navbarIcons[label]

    return (
        <div className='sm:px-2 hover:bg-emerald-600 rounded-2xl'>
            <Link to={location} className="flex flex-col justify-center items-center py-4">
                <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox={`${viewBox}`}><path d={`${path}`} /></svg>
                <NavBarLink>{label}</NavBarLink>
            </Link>
        </div>
    )
}


const LeftNavBar = (): JSX.Element => {
    return (
        <div className='bg-emerald-500 h-screen'>
            <div className="pt-4">
                <NavContainer>
                    <IconLink label="Home" location="/" />
                    <IconLink label="About" location="/about" />
                    <IconLink label="Projects" location="/projects" />
                    <IconLink label="Resume" location="/resume" />
                    <IconLink label="Contact" location="/contact" />
                </NavContainer>
            </div>
        </div>
    )
}

export default React.memo(LeftNavBar)