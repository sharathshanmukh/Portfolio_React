import {Link} from 'react-scroll'
import { IoMdReturnRight } from "react-icons/io";
import Tom from '../assets/mypic.jpeg'


 const ABC = () => {
  return (
    <div id="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='flex flex-col h-screen gap-5 justify-center items-center mx-auto md:flex-row'>
            <div className='flex flex-col  items-center justify-center w-screen h-min md:justify-start md:h-1/2 md:gap-5 '>
                <h2 className='text-white text-3xl font-bold sm:text-6xl'> Data  & AI Enthusiast</h2>
                <p className='text-gray-500 max-w-md'> "In God we trust, all others must bring data."</p>
                <div>
                    <Link to="portfolio" smooth duration={500}
                    className='group text-black w-fit  px-6 py-3 my-2 flex rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <IoMdReturnRight size={30} className="ml-1"></IoMdReturnRight>
                        </span>
                    </Link>
                </div>
                 </div>
            <div className='w-1/2'>
                <img src={Tom} alt="my_profile" className='rounded-2xl mx-auto w-44 md:w-72 '/>

            </div>

        </div>

    </div>
  )
}
export default ABC
