import React from 'react'
import Navbar from '../components/Navbar'


export default function Services() {
     document.title='Services'
    const services=[
        {
            title:'Fast Delivery',
            iconUrl:'https://img.icons8.com/color/48/000000/vegetarian-food.png'
        },
        {
            iconUrl:'https://img.icons8.com/doodle/48/000000/pizza.png'
        },
        {
             
        }
    ]

  return (
    <div className='h-screen bg-yellow-100 text-slate-900'>
       <Navbar/>
      <div className='text-center mb-10'>
       <h1 className='text-4xl mt-20 font-thin font-mono'>Services</h1>
       <p className="text-slate-900 mt-2 font-serif">Far far away, behind the word mountains, far from the countries Vokalia and</p>
       <p className='text-slate-900 font-serif'>Consonantia, there live the blind texts.</p>
      </div>
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <div className="bg-yellow-200 p-6 rounded-lg mb-6">
              <img src={service.iconUrl} alt={service.title} className="mx-auto w-16 h-16 object-contain" />
            </div>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-700 mt-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
