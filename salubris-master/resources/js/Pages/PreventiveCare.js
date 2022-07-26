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
            <PageHeader title="Preventive Care" image="images/banner1.png"/>

            {/* Page Main content start */}
            <div className="relative bg-white pt-10 mb-16 overflow-hidden sm:pt-24 lg:pt-10">
                <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                    <div>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-black">
                    Regular health care intended to keep you healthy and avoid disease by fighting non-communicable diseases (NCDs) associated with obesity such as hypertension, diabetes, and cancer.  

                    </p>
                    </div>
                    <div className="">
                    {/* Preventative Care start */}

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
