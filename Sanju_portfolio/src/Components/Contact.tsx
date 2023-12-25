import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-900 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'> Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form id='contact' className='flex flex-col w-full md:w-3/4' action='https://getform.io/f/e9563257-8a01-4a77-b8d2-269a0dcece2e' method='post'>
                    <input type='name' placeholder='enter your name' className='p2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                    <input type='email' placeholder='enter your email' className='p2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                    <textarea name='message' rows={10} className='bg-transparent rounded-md text-white border'  ></textarea>  
                    <button className='text-white bg-gradient-to-r from bg-cyan-500 to-blue-500 px-6 my-8 mx-auto flex rounded-md hover:scale-125 duration-700'>talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact