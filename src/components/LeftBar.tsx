import React from 'react'
import tw from 'tailwind-styled-components'


const LeftBar = (): JSX.Element => {
    const NavBar = tw.div`bg-emerald-500 h-screen w-1/5 max-w-xs`
    return (
        <NavBar>
            <button onClick={() => alert('hello')}>test</button>
        </NavBar>
    )
}

export default React.memo(LeftBar)