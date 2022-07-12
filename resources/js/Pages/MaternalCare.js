import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';
import SalubrisRev from '@/Components/SalubrisRev';
    
export default function MaternalCare(props) {
    return (
        <>
        <MainHeader/>
            <PageHeader title="Maternal Care" image="images/banner5.jpeg"/>

            {/* Page Main content start */}
            <div className="relative bg-white pt-10 mb-16 overflow-hidden sm:pt-24 lg:pt-10">
                <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                    <div>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Antenatal class
                    </p>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-black">
                    The health of women during pregnancy, childbirth, and the postpartum period. It encompasses the health care dimensions of family planning, preconception, prenatal, and postnatal care to ensure a positive and fulfilling experience
                    </p>
                    </div>
                    <div className="">
                    {/* Maternal care table start */}
                    <div className="px-4 sm:px-6 lg:px-8 mt-6 ">
                        <div className="mt-8 flex flex-col mb-6">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                    <tr className="divide-x divide-gray-200">
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-black sm:pl-6">
                                        Module
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-black">
                                        Coverage
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                
                                        <tr className="divide-x divide-gray-200">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-black sm:pl-6">
                                                1
                                            </td>
                                            <td className="text-left p-4 text-sm text-black">
                                                Body changes and challenges during pregnancy <br/>
                                                Healthy living and nutrition.<br/>
                                                Physical activity and exercise for mother.

                                            </td>
                                        </tr>

                                        <tr className="divide-x divide-gray-200">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-black sm:pl-6">
                                                2
                                            </td>
                                            <td className=" text-left whitespace-nowrap p-4 text-sm text-black">
                                                    Labour and delivery <br/>
                                                    Birthing plan 
                                            </td>
                                        </tr>

                                        <tr className="divide-x divide-gray-200">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-black sm:pl-6">
                                                3
                                            </td>
                                            <td className="text-left whitespace-nowrap p-4 text-sm text-black">
                                                Postnatal care 
                                            </td>
                                        </tr>

                                        <tr className="divide-x divide-gray-200">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-black sm:pl-6">
                                                4
                                            </td>
                                            <td className="text-left whitespace-nowrap p-4 text-sm text-black">
                                                Crying <br/>
                                                Colic   <br/>
                                                Postpartum depression
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div> 
                            </div>
                        </div>
                    </div>
                    {/* Maternal care table end */}

                    
                    </div>
                </div>
            </div>
            {/* Page Maint content end */}
            {/* CTA start */}
            <div className="green-bg border-b-2 border-black">
                        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            <span className="block">Maternal Blogs</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-black">
                                We have amazing blogs for you to catch up on
                            </p>
                            <a
                            href="#"
                            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-indigo-50 sm:w-auto"
                            >
                            Read Blogs
                            </a>
                        </div>
                    </div>
            {/* CTA end */}
        <Footer/>
        </>
    )
}
