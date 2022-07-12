import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';
import { CheckIcon } from '@heroicons/react/outline';

const features = [
    {
      name: 'Wellness spa',
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
      name: 'Courier',
    },
    {
      name: 'Dry cleaner',
    },
    {
      name: 'Holiday resorts',
    },
    {
      name: 'Swimming academy',
    },
    {
      name: 'Hardware',
    },
    {
      name: 'Wholesales',
    },
  ]

export default function Rewards(props) {
    return (
        <>
        <MainHeader/>
            <PageHeader title="Rewards" image="images/banner2.png"/>

            {/* Page Main content start */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-24 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center pb-6">
                    <p className="mt-4 text-lg text-black">
                    Get rewarded for living a healthy lifestyle. Earn points by participating in Salubris activities and events. Accomplish set wellness targets and challenges and earn more points redeemable at various Salubris Valued Partners. Get discounts, vouchers, hampers, instant prizes and more!

                    </p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative">
                        <dt>
                            <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                            <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                        </dt>
                        
                        </div>
                    ))}
                    </dl>
                </div>
            </div>
            {/* Page Maint content end */}
        <Footer/>
        </>
    )
}
