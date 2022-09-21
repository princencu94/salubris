import React from 'react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';
import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
    {
      name: 'Wellness spa',
    },
    {
      name: 'Gym membership',
    },
    {
      name: 'Road recovery',
    },
    {
      name: 'Flights',
    },
    {
      name: 'Car rental',
    },
    {
      name: 'Courier services',
    },
    {
      name: 'Healthy eats',
    },
  ]

export default function Rewards(props) {
    return (
        <>
        <MainHeader/>
            <PageHeader title="Rewards" image="images/rewards-banner.jpg"/>

            {/* Page Main content start */}

            <div className="relative pt-16 pb-16 overflow-hidden">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
                    <div className="relative">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                            <div>
                            <div className="mt-6">
                            <p className="mt-4 text-lg text-gray-500">
                              Get rewarded for living a healthy lifestyle. Earn points redeemable as discounts at our various valued
                              partners by participating in Salúbris activities, events and accomplish set wellness targets.
                              Discounts include but not limited to:
                            </p>

                                <ul role="list" className='text-gray-500'>

                                {features.map((feature) => (
                                    <li key={feature.name}>{feature.name}</li>
                                  ))}
                                </ul>

                
  
                                
                            </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="images/rewards-inner.jpg"
                                alt="Inbox user interface"
                            />
                            </div>
                        </div>
                        </div>
                    </div> 
            </div>
          
            {/* Page Maint content end */}
        <Footer/>
        </>
    )
}
