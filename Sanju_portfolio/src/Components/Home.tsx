import { Link } from 'react-scroll'
import { FaLongArrowAltDown } from "react-icons/fa";
import Tom from "../assets/mypic.jpeg"


const Home = () => {
  return (
<div id='home'className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className="text-3xl font-bold sm:text-5xl text-white">
                     Data  & AI Enthusiast            </h2>
            <p className="text-gray-500 py-2 max-w-md">
            "In God we trust, all others must bring data."             </p>
            <div>
                <Link to="portfolio" smooth duration={500}
                className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
    
                   Portfolio
                   <span className="group-hover:rotate-180 duration-300">
                    <FaLongArrowAltDown size={25} className="ml-1"> </FaLongArrowAltDown>
                   </span>
    
                </Link>
            </div>
        </div>
        <div>
            <img src={Tom} alt="my profile" className='rounded-2xl mx-auto w-10 md:w-2/5'/>
        </div>
    </div>
</div>
  )
}
export default Home