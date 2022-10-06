import React from 'react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';

    
export default function MaternalCare(props) {
    return (
        <>
        <MainHeader/>
            <PageHeader title="Maternal Care" image="images/meternal-banner.jpg"/>

            {/* Page Main content start */}
            <div className="relative pt-16 pb-16 overflow-hidden">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
                    <div className="relative">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                            <div>
                            <div className="mt-6">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                    Basics
                                </h2>
                                <ul role="list">
                                    <li>Prenatal and Post Natal Classes</li>
                                    <li>24HR professional advice line</li>
                                    <li>Home massage services </li>
                                    <li>Salubris mother forum</li>
                                    <li>Care package </li>
                                </ul> 
                            </div>
                            <div className="mt-6">
                            <a
                                href="check-member"
                                className="inline-flex bg-gradient-to-r from-orange-300 to-orange-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-orange-100 hover:to-orange-700"
                            >
                                Chat with a Midwife
                            </a>
                            </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="images/220244_24.jpg"
                                alt="Inbox user interface"
                            />
                            </div>
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
