import React from 'react';
import Navbar from '../components/Navbar';
import './Services.css'; 
export default function Services() {
    document.title = 'Services';
    const services = [
        {
            title: 'Fast Delivery',
            iconUrl: 'fastShipping.png',
            description: 'Enjoy piping hot pizzas delivered to your doorstep in record time. Our speedy delivery ensures your meal arrives fresh and delicious, every time.'
        },
        {
            title: 'Healthy Food',
            iconUrl: 'healthy.png',
            description: 'Savor the taste of health with our nutritious and delicious pizza options. We use fresh, high-quality ingredients to create meals that are both tasty and good for you.'
        },
        {
            title: 'Quality Services',
            iconUrl: 'services.png',
            description: 'Experience top-notch service from our friendly and professional staff. We are dedicated to making your dining experience exceptional, whether you dine in or take out.'
        }
    ];

    return (
        <>
            <Navbar />
            <div className='h-screen bg-gray-50 text-slate-900'>
                <div className='text-center mb-10'>
                    <h1 className='text-4xl mt-20 font-thin font-mono'>Services</h1>
                    <p className="text-slate-900 mt-2 font-serif">Far far away, behind the word mountains, far from the countries Vokalia and</p>
                    <p className='text-slate-900 font-serif'>Consonantia, there live the blind texts.</p>
                </div>
                <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="text-center service-card">
                            <div className="bg-green-100 p-6 rounded-lg mb-6">
                                <img src={service.iconUrl} alt={service.title} className="mx-auto w-16 rounded-full h-16 object-contain" />
                            </div>
                            <h2 className="text-xl font-semibold">{service.title}</h2>
                            <p className="text-gray-700 mt-4">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
