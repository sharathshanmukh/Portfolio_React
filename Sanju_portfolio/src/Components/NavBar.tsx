import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa'

const NavBar = () => {

    const [nav,setNav]=useState(false)
    const links=[
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"experience"
        },
        {
            id:4,
            link:"Portfolio"
        },
        {
            id:5,
            link:"contact"
        },
     
    ]
  return (
    <div  className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-3 '>
        <div>
            <h1 className="text-4xl font-signature  ml-2" >TOM</h1>
        </div>
        <ul className='hidden md:flex '>
            {links.map(({id,link})=><li className='px-3  cursor-pointer capitalize font-extralight text-gray-500 hover:scale-150 duration-150' key={id}>{link}</li>


                )}

        </ul>
        <div onClick={()=>setNav(!nav)} 
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30}/>:<FaBars size={30}/>}
            
        </div>
            {nav &&             <ul className='flex flex-col justify-center items-center absolute
            top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({id,link})=><li className='px-4 py-6  cursor-pointer capitalize font-extralight text-gray-500 hover:scale-150 duration-150 text-4xl' key={id}>{link}</li>


)}

            </ul>}
        

    



    </div>
  )
}

export default NavBar