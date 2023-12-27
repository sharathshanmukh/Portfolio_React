import py from "../assets/python.jpeg"
import sql from "../assets/sql.png"
import tf from "../assets/tf.webp"
import tau from "../assets/tau.jpeg"
import sklearn from "../assets/sklearn.jpeg"
import aws from "../assets/aws.png"
import git from "../assets/github.png"
import reacti from "../assets/react.png"
import tail from "../assets/tailwind.png"
import njs from "../assets/node.png"
import dj from "../assets/django.jpeg"

const Experience = () => {
    const techs=[
        {
            id:1,
            src:py,
            title:"Python",
            style:"shadow-yellow-500"
        },
        {
            id:2,
            src:sql,
            title:"SQL",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:tf,
            title:"TensorFlow",
            style:"shadow-yellow-800"
        },
        {
            id:4,
            src:tau,
            title:"Tableau",
            style:"shadow-red-500"
        },
        {
            id:5,
            src:sklearn,
            title:"Scikit-Learn",
            style:"shadow-orange-500"
        },
        {
            id:6,
            src:aws,
            title:"AWS",
            style:"shadow-blue-500"
        },
        {
            id:7,
            src:git,
            title:"Git",
            style:"shadow-white"
        },
        {
            id:8,
            src:reacti,
            title:"React",
            style:"shadow-blue-500"
        },
        {
            id:9,
            src:tail,
            title:"Tailwind",
            style:"shadow-blue-900"
        },
        {
            id:10,
            src:njs,
            title:"JavaScript",
            style:"shadow-green-900"
        },
        {
            id:11,
            src:dj,
            title:"Django",
            style:"shadow-blue-900"
        },


    ]
  return (
    <div id="experience" className=" bg-gradient-to-b from-gray-800  to-black h-screen w-screen">
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className="  mt-10 py-10">
                <p className="text-4xl font-bold border-b-4 inline border-gray-500 p-2"> Experience</p>
                <p className="py-6">These are technologies i have worked with</p>
            </div>
            <div className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">
               {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-50 duration-700 py-2 rounded-lg ${style}`}>
                    <img className=" w-20 h-20 mx-auto rounded-md" src={src} alt="" />
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