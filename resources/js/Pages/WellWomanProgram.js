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
  

export default function WellWomanProgram(props) {
    return (
        <>
        <MainHeader/>
            <PageHeader title="Well woman program" image="images/banner1.png"/>

            {/* Page Main content start */}
            <div className="relative bg-white pt-10 mb-16 overflow-hidden sm:pt-24 lg:pt-10">
                <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                    <div>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-black">
                        With all the responsibilities women have to deal with in their daily lives, they tend to forget to care for themselves hence this comprehensive care program to boost woman's health, vitality and quality of life.
                    </p>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
            {/* Page Main content end */}
        
        <Footer/>
        </>
    )
}
