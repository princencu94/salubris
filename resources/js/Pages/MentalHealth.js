import React from 'react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';
import ContactForm from '@/Components/Contact';

import {
  InboxIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';


  const transferFeatures = [


    {
      id: 1,
      name: 'Mental health program',
      description:
        'Providing ongoing care and support for someone who is living with a mental illness',
        icon: PuzzlePieceIcon,
    },
    {
      id: 2,
      name: 'Psychologist online',
      description:
        'Diagnosis of mental and behavioral health conditions and prescription medication to help members feel better',
      icon: InboxIcon,
    },
  ]

export default function MentalHealth(props) {
    return (
        <>
        <MainHeader/>
            <PageHeader title="Mental Health Management" image="images/banner4.jpeg"/>

            {/* Page Main content start */}

            <div className="overflow-hidden bg-white py-16 px-2 sm:px-6 lg:px-8 xl:py-16">
                <div className="mx-auto max-w-max lg:max-w-7xl">
                    <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    
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
                                <span className='italic'>“State of well-being in which the individual realizes his or her own abilities, can cope with the normal stresses of life, realize their abilities, can work productively and fruitfully, and is able to make a contribution to his or her community”.</span>  World Health Organization (WHO) 1948
                            </p>
                            <div className="max-w-prose text-base lg:max-w-none pt-2">
                              <h2 className="font-medium leading-none text-gray-900">Counseling Services</h2>
                            </div>
                            <ol role="list">
                            <li>Depression</li>
                            <li>Quiting Smoking</li>
                            <li>Reducing Alcohol use</li>
                            <li>Weight loss programs</li>
                            <li>HIV/AIDS</li>
          
                            </ol>
        
                        </div>
                        <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                            <dl className="mt-10 space-y-10">
                                {transferFeatures.map((item) => (
                                    <div key={item.id} className="relative">
                                    <dt>
                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md green-bg text-white">
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                                    </div>
                                ))}
                            </dl>
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
            {/* CTA start */}
                
            {/* CTA end */}
        <Footer/>
        </>
    )
}
