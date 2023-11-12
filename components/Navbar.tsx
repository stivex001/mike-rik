import React from 'react'
import Navlinks from './Navlinks'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-[#00683D] w-full py-9 fixed z-10 top-0'>
        <div className='w-5/6 mx-auto flex items-center justify-between text-white'>
            {/* logo */}
            logo
            <Navlinks />
        </div>
    </div>
  )
}

export default Navbar