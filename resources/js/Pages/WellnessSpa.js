import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';


const files = [
    {
      title: 'Swedish',
      source:
        'images/trainers-1.jpg',
    },
    {
        title: 'Deep Tissue',
        source:
          'images/trainers-2.jpg',
      },
      {
        title: 'Hot stone',
        source:
          'images/trainers-1.jpg',
      },
      {
        title: 'Bamboo',
        source:
          'images/trainers-2.jpg',
      },
      {
        title: 'Prenatal',
        source:
          'images/trainers-1.jpg',
      },
      {
        title: 'Distress Scalp Neck',
        source:
          'images/trainers-2.jpg',
      },
    // More files...
  ]
export default function PreventiveCare(props) {
    return (
        <>
        <MainHeader/>

            {/* Page Main content start */}
                          {/* Hero card */}
                <div className="relative">
    
                    <div className="max-w-full max-h-full mx-auto sm:px-6 lg:px-8">
                    <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                        <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover"
                            src="images/random8.jpg"
                            alt="People working on laptops"
                        />
                        <div className="absolute inset-0 green-bg mix-blend-multiply" />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">Wellness Spa</span>
                        </h1>
                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        
                        </div>
                    </div>
                    </div>
                </div>
            {/* Page Main content end */}
            
            {/* Wellness Spa start */}
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="relative px-4 py-4 sm:px-6 sm:py-24 lg:py-10 lg:px-8">
                            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                amet fugiat veniam occaecat fugiat aliqua.
                            </p> 
                        </div>
                        <ul role="list" className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                            {files.map((file) => (
                                <li key={file.source} className="relative">
                                <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                    <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                                    <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">View details for {file.title}</span>
                                    </button>
                                </div>
                                <p className="mt-2 block text-lg font-medium text-black truncate pointer-events-none">{file.title}</p>
                                </li>
                            ))}
                        </ul>
                        </div>
                    {/* Wellness Spa end */}
                    {/* Preventive Care start CTA */}
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Make an Appointment online</span>
                            <span className="block">OR</span>
                            <span className="block">Call us Today</span>
                            </h2>
                            <div className="mt-8 flex justify-center">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white green-bg hover:bg-indigo-700"
                                >
                                Make Appointment
                                </a>
                            </div>
                            <div className="ml-3 inline-flex">
                                <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                >
                                Make a Call
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* Preventive Care end CTA */}
        <Footer/>
        </>
    )
}
