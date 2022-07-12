import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import MainHeader from '@/Components/Mainheader';
import CarouselHero from '@/Components/Carousel';
import Footer from '@/Components/Footer';
    
const gymnacity = [
    {
      name: 'Courses',
      imageUrl:
        'images/random1.jpg',
    },
    {
        name: 'Challenges',
        imageUrl:
          'images/random2.jpg',
    },
    {
        name: 'Private Classes',
        imageUrl:
          'images/random3.jpg',
    },
    {
        name: 'Bootcamps',
        imageUrl:
          'images/random4.jpg',
    },
  ]

  const managedcare = [
    {
      name: 'Maternal care',
      imageUrl:
        'images/random5.jpg',
    },
    {
        name: 'Preventive care',
        imageUrl:
          'images/random6.jpg',
    },
    {
        name: 'Well woman program',
        imageUrl:
          'images/random1.jpg',
    },
    {
        name: 'Mental and Behavioural Health',
        imageUrl:
          'images/random8.jpg',
    },
  ]

export default function Welcome(props) {
    return (
        <>
        <MainHeader/>
        <CarouselHero/>
        {/* 1st section  start*/}

        <div className="bg-white from-stone-500">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                <div className="space-y-5 sm:space-y-4 max-w-3xl mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-none">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-center">Salubris Gymnacity</h2>
                    <p className="text-xl text-gray-500 text-center max-w-3xl mx-auto">
                    Join 10+ million members on the top digital fitness platform and stay toned, lose weight, get strong, reduce stress, and reach your goals.
                    </p>
                </div>
                <ul
                    role="list"
                    className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
                >
                    {gymnacity.map((person) => (
                    <li key={person.name}>
                        <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                            <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                        </div>

                        <div className="space-y-2">
                            <div className="text-base leading-6 space-y-1">
                            <h3 className="text-lg font-medium">{person.name}</h3>
                            </div>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
             
            </div>
            
            </div>
    
        {/* 1st section end */}

        {/* 2nd section  start*/}

        <div className="gradient-bg">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                <div className="space-y-5 sm:space-y-4 max-w-3xl mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-none">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-center">Managed Healthcare</h2>
                    <p className="text-xl text-black text-center max-w-3xl mx-auto">
                    Join 10+ million members on the top digital fitness platform and stay toned, lose weight, get strong, reduce stress, and reach your goals.
                    </p>
                </div>
                <ul
                    role="list"
                    className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
                >
                    {managedcare.map((person) => (
                    <li key={person.name}>
                        <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                            <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                        </div>

                        <div className="space-y-2">
                            <div className="text-base leading-6 space-y-1">
                            <h3 className="text-lg font-medium">{person.name}</h3>
                            </div>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
             
            </div>
            
            </div>
    
        {/* 2nd section end */}

        {/* CTA Section start */}
        <div className="relative py-16 bg-gray-100">
            <div className="hidden absolute top-0 inset-x-0 h-1/2  lg:block" aria-hidden="true" />
                <div className="max-w-7xl mx-auto bg-indigo-600 lg:bg-transparent lg:px-8">
                    <div className="lg:grid lg:grid-cols-12">
                    <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                        <div className="absolute inset-x-0 h-1/2  lg:hidden" aria-hidden="true" />
                        <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                        <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                            <img
                            className="object-cover object-center rounded-3xl shadow-2xl"
                            src="images/random3.jpg"
                            alt=""
                            />
                        </div>
                        </div>
                    </div>

                    <div className="relative green-bg lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">

                        <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                        <h2 className="text-3xl font-extrabold text-black" id="join-heading">
                            Partner with us
                        </h2>
                        <p className="text-lg text-black">
                            Whether you’re just starting your fitness journey, exploring something new, or ready for a Hard AF challenge, get motivated with curated training programs that take you for a ride and amp up amazing results.
                        </p>
                        <a
                            className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-black hover:bg-gray-50 sm:inline-block sm:w-auto"
                            href="#"
                        >
                            How it works?
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        {/* CTA Section end */}

        {/* Our partners section start */}
            <div className="">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-black text-center">Our Partners</h2>
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-30" src="images/partner-1.png" alt="Lotus" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-20" src="images/partner-2.png" alt="Marchant Couriers" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-20"
                            src="images/partner-3.png"
                            alt="Timeless Beauty Spa"
                        />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                            <img
                                className="h-20"
                                src="images/partner-4.png"
                                alt="Road Angels"
                            />
                        </div>
                        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                            <img
                                className="h-20"
                                src="images/partner-5.png"
                                alt="Raine Uplift"
                            />
                        </div>
                        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                            <img
                                className="h-20"
                                src="images/partner-6.png"
                                alt="Gymnacity"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* Our partners section end */}
        <Footer/>
        </>
    )
}
