import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';


export default function CorporateEmployeeWellnessProgram(props) {
    return (
        <>
        <MainHeader/>
            <PageHeader title="Corporate wellness program" image="images/corporate-banner.jpg"/>

            {/* Page Main content start */}
            <div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="images/220244_10.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-orange-300 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-300 via-orange-600 opacity-50" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                Employees are a company’s most valuable asset. So, invest in their well-being and reduce health care costs, achieve a work-life balance, augment productivity, and increase employee retention
              </p>
              <ul role="list">
                <li>Wellness in the workplace.</li>
                <li>Mental health therapy: stress management, retirement, retrenchment, Work life balance.</li>
                <li>Financial education.</li>
                <li>Health screenings and risk assessments.</li>
                <li>Exercise programs and activities.</li>
                <li>Coaching, mentoring, and training services.</li>
                <li>Nutrition education.</li>
                <li>Carenet specialists’ referrals and links.</li>
                <li>Support groups.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
            {/* Page Main content end */}
        
        <Footer/>
        </>
    )
}
