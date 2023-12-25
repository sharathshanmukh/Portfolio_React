import html from "../assets/html.png"
import css from "../assets/css.png"
import graph from "../assets/graphql.png"
import js from "../assets/javascript.png"
import nextjs from "../assets/nextjs.png"
import tw from "../assets/tailwind.png"
import ri from "../assets/react.png"
const Experience = () => {
    const techs=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:js,
            title:"JS",
            style:"shadow-yellow-500"
        },
        {
            id:4,
            src:ri,
            title:"React",
            style:"shadow-blue-600"
        },
        {
            id:5,
            src:tw,
            title:"tailwind",
            style:"shadow-sky-400"
        },
        {
            id:6,
            src:nextjs,
            title:"Next JS",
            style:"shadow-white"
        },
        {
            id:7,
            src:graph,
            title:"GQL",
            style:"shadow-gray-400"
        }
    ]
  return (
    <div id="Experience" className=" bg-gradient-to-b from-gray-600 to- to-black h-screen w-screen">
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className="text-4xl font-bold border-b-4 inline border-gray-500 p-2"> Experience</p>
                <p className="py-6">These are technologies i have worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">
               {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-50 duration-700 py-2 rounded-lg ${style}`}>
                    <img className=" w-20 mx-auto" src={src} alt="" />
                    <p> {title} </p>
                
                </div>
                    
                )
                )
               }
  
            </div>
        </div>



    </div>
  )
}

export default Experience