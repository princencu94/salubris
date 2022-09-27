import React, { useState, useEffect } from 'react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';
import ContactForm from '@/Components/Contact';


import {
    BoltIcon,
    PlusIcon,
    MinusIcon,
  } from '@heroicons/react/24/outline'
  
  const transferFeatures = [


    {
      id: 1,
      name: 'Positive Result',
      description:
        'SALUTEM takes over',
      icon: PlusIcon,
    },
    {
      id: 2,
      name: 'Negative Result',
      description:
        'SALUBRIS keeps you on a preventive path',
      icon: MinusIcon,
    },
    {
      id: 3,
      name: 'Inconclusive Result',
      description:
        'YOU test again',
      icon: BoltIcon,
    },
  ]
export default function ManagedHealthCare(props) {
    
    const [showSlider, setShowSlider] = useState(true)
    const handleSlider = () => {
        setShowSlider(!showSlider);
    }


    console.log("Page " + showSlider);
    return (
        <>
        <MainHeader/>
            <PageHeader title="Managed Healthcare" image="images/managed-banner.jpg"/>

            {/* Page Main content start */}
            <div className="overflow-hidden bg-white py-16 px-2 sm:px-6 lg:px-8 xl:py-16">
                <div className="mx-auto max-w-max lg:max-w-7xl">
                    <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div className="max-w-prose text-base lg:max-w-none">
                        <h2 className="font-semibold leading-6 text-gray-900">Preventative Care</h2>
                    </div>
                    </div>
                    <div className="relative">
                    <svg
                        className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                    >
                        <defs>
                        <pattern
                            id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                    </svg>
                    <svg
                        className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                    >
                        <defs>
                        <pattern
                            id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                    </svg>
                    <div className="relative md:bg-white md:p-6">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                        <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                            <p>
                                Regular health care intended to keep you healthy and avoid disease by fighting non-communicable diseases (NCDs) associated with obesity such as hypertension, diabetes, and cancer.
                            </p>
                            <ol role="list">
                            <li>Flue Vaccines</li>
                            <li>HIV/AIDS tests</li>
                            <li>Covid tests and vaccinations</li>
                            <li>Blood Pressure & glucose tests</li>
                            <li>Immunisations</li>
                            <li>Mammograms</li>
                            <li>Pap smear</li>
                            <li>Prostate screening</li>
                            <li>Annual medical check-ups and BMI Test</li>
                            </ol>
        
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="images/220244_18.jpg"
                                alt="Managed Health Care"
                            />
                            </div>
                        </div>
                        </div>
                        {/* <div className="mt-8 inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                        >
                            Contact sales
                        </a>
                        </div> */}
                    </div>
                    </div>
                </div>
                </div>


           
            {/* Page Maint content end */}
            
                    {/* Preventive Care start CTA */}
                    <div className="bg-white">
                        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Call us Today or</span>
                            <span className="block">Send us a message to get back to you</span>
                            </h2>
                            <div className="mt-8 flex justify-center">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-5 py-3 text-base font-medium text-white hover:bg-orange-700"
                                >
                                    Call Us
                                </a>
                            </div>
                            <div className="ml-3 inline-flex">
                                <button
                                onClick={handleSlider} 
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-100 px-5 py-3 text-base font-medium text-orange-700 hover:bg-orange-200">
                                    Send a Message
                                </button>
        
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* Preventive Care end CTA */}
                    <ContactForm sethidden={showSlider}/>
                    <Footer/>
        </>
    )
}
