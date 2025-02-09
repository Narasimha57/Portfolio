import React from 'react'


const Certifications = () => {

  return (
    <div id='Certifications'>
        <div id="Projects" className="flex justify-center items-center mt-5">
        <h1 className="text-yellow-500 font-bold text-4xl md:text-6xl">Certifications</h1>
    </div><br /><br />
    <h3 className='font-bold text-2xl px-2 md:text-4xl md:px-6 md:font-bold'
    >
        1. NPTEL Certificate
    </h3>
    <br /><br />
    <img src="./nptel.jpg" alt="NPTEL"  className='md:px-20 md:py-4 px-4 rounded-2xl'/>
    <br /><br />
    <h3 className='font-bold text-2xl px-2 md:text-4xl md:px-6 md:font-bold'>
        2. Google Developer Certificate</h3><br />
    <img src="./google.png" alt="Google" className='md:px-20 md:py-4 px-4 rounded-2xl ' />
        
    </div>
  )
}

export default Certifications