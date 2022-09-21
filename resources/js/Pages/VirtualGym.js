import React from 'react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';

const VirtualGym = () => {
    return (
        <>
        <MainHeader/>
        <PageHeader title="Virtual Gym" image="images/220244_12.jpg"/>

        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Live stream Group & Individual classes
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Fitness Classes are a great way to get started, make progress on your goals, or change up
                      your routine. Our certified instructors make sure you get motivated, learn proper form and
                      Make Fitness Fun.
                    </p>
                    <div className="mt-6">
                      <a
                        href="login"
                        className="inline-flex bg-gradient-to-r from-orange-300 to-orange-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-orange-100 hover:to-orange-700"
                      >
                        Join us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="images/livestream-inner.jpg"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Bootcamps, challenges
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Result oriented targets, doing a variety of tough, total body moves designed to challenge
                        every aspect of your fitness: strength, endurance, balance, and agility.
                    </p>
                    <div className="mt-6">
                      <a
                        href="login"
                        className="inline-flex bg-gradient-to-r from-orange-300 to-orange-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-orange-100 hover:to-orange-700"
                      >
                        Join us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="images/bootcamp-inner.jpg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
            <div className="relative mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Fitness store
                    </h2>
                    <div className="mt-6">
                      <a
                        href="https://store.salubriswellness.com/"
                        className="inline-flex bg-gradient-to-r from-orange-300 to-orange-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-orange-100 hover:to-orange-700"
                      >
                        Visit Store
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="images/fitness.jpg"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <Footer/>
        </>
    )
}

export default VirtualGym;