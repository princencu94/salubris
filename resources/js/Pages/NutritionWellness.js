import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';
import { CheckIcon } from '@heroicons/react/outline';

const features = [
    {
      name: 'Healthy eating habits',
      description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      name: 'Eating habits specific to health conditions',
      description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
    },
    {
      name: 'Weight loss management',
      description: 'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
    },
    {
      name: 'Sleep habits',
      description: 'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
    },
    {
      name: 'Exercise',
      description: 'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
    },
    {
      name: 'Smoking cessation',
      description: 'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
    },
  ]

export default function NutritionWellness(props) {
    return (
        <>
        <MainHeader/>
            <PageHeader title="Nutrition and Wellness"/>

            {/* Page Main content start */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">All-in-one platform</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
                    </p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative">
                        <dt>
                            <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                            <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                        </dt>
                        <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                        </div>
                    ))}
                    </dl>
                </div>
            </div>
            {/* Page Maint content end */}
            {/* CTA start */}
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
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
            {/* CTA end */}
        <Footer/>
        </>
    )
}
