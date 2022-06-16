import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';
import SalubrisRev from '@/Components/SalubrisRev';

const people = [
    { men: 'Prostate cancer screening', women: 'Breast(mammogram) & Cervical cancer screening (Pap smear VIAC)', children:'Adolescent reproductive health and counselling'},
    { men: 'Hypertension screening', women: 'Premenstrual syndrome therapy', children:'Alcohol and drug abuse'},
    { men: 'Diabetes screening', women: 'Contraceptive therapy', children:'Autism screening'},
    { men: 'Sexual Dysfunction', women: 'Hormone/diabetes/thyroid', children:'Obesity screening and counselling'},
    { men: 'STI screening & HIV test', women: 'STI screening & HIV test', children:'STI/HIV Screening and behavioural counselling'},
    { men: 'Unhealthy alcohol use screening and counselling', women: 'HPV testing & vaccination', children:'Depression screening'},
    { men: 'Unhealthy drug use screening and counselling', women: 'Menopause management', children:'Covid-19 Vaccination'},
    { men: 'Back and Neck preventive program', women: 'Cardiac disease screening with Electrocardiogram (ECG)', children:'Anxiety screening'},
    { men: 'Covid-19 Vaccination', women: 'Nutrition management', children:''},
    { men: '', women: 'Back and Neck preventive program', children:''},
    { men: '', women: 'Covid-19 Vaccination', children:''},
  ]
  

export default function PreventiveCare(props) {
    return (
        <>
        <MainHeader/>
            <PageHeader title="Preventive Care"/>

            {/* Page Main content start */}
            <div className="relative bg-gray-50 pt-16 mb-16 overflow-hidden sm:pt-24 lg:pt-32">
                <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                    <div>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                        malesuada. Eleifend condimentum id viverra nulla.
                    </p>
                    </div>
                    <div className="">
                    {/* Preventative Care start */}
                    <div className="px-4 sm:px-6 lg:px-8 mt-6 ">
                    <div className="mt-8 flex flex-col mb-6">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr className="divide-x divide-gray-200">
                                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Men
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Women
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Children
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person) => (
                                        <tr key={person.men} className="divide-x divide-gray-200">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                                            {person.men}
                                        </td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.women}</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.children}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                        </div> 
                        </div>
                    </div>
                </div>
                    {/* Preventative Care end */}
                    
                    </div>
                </div>
            </div>
            {/* Page Maint content end */}
            
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
                    {/* Preventive Care end CTA */}
        <Footer/>
        </>
    )
}
