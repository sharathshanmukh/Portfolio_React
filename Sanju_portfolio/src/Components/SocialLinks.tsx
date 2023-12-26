import { FaGithub,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                LinkedIN <FaLinkedin size={30}></FaLinkedin>
                </>  
            ),
            href:'https://in.linkedin.com/in/sanjana-chatti-172310173',
            style:'rounded-tr-md',
        },
        {
            id:2,
            child:(
                <>
                Github <FaGithub size={30}></FaGithub>
                </>  
            ),
            href:'https://github.com/sharathshanmukh',
        },
        {
            id:3,
            child:(
                <>
                Mail <HiOutlineMail size={30}></HiOutlineMail>
                </>  
            ),
            href:'mailto:ponugupatisarat2010@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                </>  
            ),
            href:'/Thermofisher-DS.pdf',
            style:'rounded-br-md',
            download:false,
        },
    ]
  return (
    <div className='hidden lg:flex flex-col   top-[30%] fixed '>
        <ul>
            {links.map(({id,child,href,style,download})=>(
                    <li key={id} className=
                    {'flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-100px] hover:rounded-lg duration-500 hover:ml-[-10px]'+ " " + style}>
                        <a href={href} className='flex justify-between items-center w-full text-white ' download={download} target='_blank' rel='noreferrer'>
                            {child}
                        </a>
                    </li>
            ))}


            
 
        </ul>
    </div>
  )
}

export default SocialLinks