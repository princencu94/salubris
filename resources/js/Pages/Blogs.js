import React from 'react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';

    
export default function Blogs(props) {
    return (
        <>
        <MainHeader/>
            {/* Page Main content start */}
            
            <div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">

                    <div className="relative max-w-6xl mx-auto">
                        <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Wellness Topics</h2>
                        </div>
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {props.categories.map((categorie) => (
                            <div key={categorie.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={`images/${categorie.image_path}`} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                
                                <a href={categorie.id} className="block mt-2">
                                    <p className="text-xl font-semibold text-gray-900">{categorie.name}</p>
                                    <p className="mt-3 text-base text-gray-500">{categorie.description}</p>
                                </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <p className="text-sm font-medium green-text">
                                        <a href={categorie.id} className="hover:underline">
                                        Go to Topic
                                        </a>
                                    </p>
                                    
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                    
            {/* Page Maint content end */}
        <Footer/>
        </>
    )
}
