import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import FlashMassage from '@/Components/FlashMessage';
import TrialBanner from '@/Components/TrialBanner';



export default function Dashboard(props) {
    const { flash, auth } = usePage().props
    return (
        <>
        <TrialBanner trialtime={props.trialending}/>
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 " >
                    <div className='mb-7 max-w-4xl mx-auto'>
                            {
                                flash.message ?
                                    <FlashMassage message={flash.message} />
                                : null
                            }
                    </div>
  
                                {/* Main Content */}

        <main className="-mt-10 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-6xl lg:px-8">
            <h1 className="sr-only">Profile</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                {/* Welcome panel */}
                <section aria-labelledby="profile-overview-title">
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <h2 className="sr-only" id="profile-overview-title">
                      Profile Overview
                    </h2>
                    <div className="bg-white p-6">
                      <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="sm:flex sm:space-x-5">
                          <div className="flex-shrink-0">
                            <img className="mx-auto h-20 w-20 rounded-full" src='images/profile.png' alt="" />
                          </div>
                          <div className="mt-0 text-left sm:mt-0 sm:pt-1 sm:text-left">
                            <p className="text-sm font-medium -mb-0 text-gray-600">Welcome back,</p>
                            <p className="text-xl font-bold -mb-0 text-gray-900 sm:text-2xl">{auth.user.name}</p>
                            <p className="text-sm font-medium text-gray-600">{auth.user.email}</p>
                          </div>
                        </div>
                        <div className="mt-0 flex justify-center sm:mt-0">
                          {
                            props.profileinfo === null ?
                            <a
                            href="addhealthinfo"
                            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                          >
                            Add Profile
                          </a>
                          :
                          <a
                          href="health-info"
                          className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View Profile
                        </a>

                        }
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Recent Activity panel */}
                <section aria-labelledby="quick-links-title">
                    <div className='overflow-hidden rounded-lg bg-white shadow'>
                        <div className='px-4 py-4'>
                        <h2 className="font-semibold text-lg text-gray-900">Currently Live</h2>
                        
                            <ul role="list" className="-ml-0 mt-3 grid gap-x-5 grid-flow-col auto-cols-max w-full overflow-x-auto">
                                {props.user_livestreams.map((livestream) => (
                                    <li key={livestream.id} className="relative">
                                    <div className="group w-60 h-40 block overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                        <img src='images/livestream.jpg' alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                                        <button type="button" className="absolute inset-0 focus:outline-none">
                                        <span className="sr-only">View details for {livestream.title}</span>
                                        </button>
                                    </div>
                                    <p className="pointer-events-none mt-2 block truncate text-base font-medium text-gray-900">{livestream.title}</p>
                                    
                                    <div className="-mt-3 ">
                                      
                                      <Link
                                        href={`join/${livestream.id}`}
                                        className="inline-flex bg-gradient-to-r from-orange-300 to-orange-600 bg-origin-border px-4 py-1 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white hover:from-orange-100 hover:to-orange-700"
                                      >
                                        Join
                                      </Link>
                                    </div>
                                    </li>
                                ))}
                            </ul>
                        
                        </div>
                        </div>
                </section>

                {/* Recent Activity panel */}
                <section aria-labelledby="quick-links-title">
                    <div className='overflow-hidden rounded-lg bg-white shadow'>
                        <div className='px-4 py-4'>
                        <h2 className="font-semibold text-lg text-gray-900">Recent Activity</h2>
                        <ol className="mt-4  -ml-8 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
                            {/* {
                                trainer_schedules.length !== 0 ?
                                trainer_schedules.map((trainer_schedule) => (
                                    <li className="py-1 sm:flex">
                                        <time dateTime="2022-01-19" className="w-28 flex-none">
                                        {trainer_schedule.date}
                                        </time>
                                        <p className="mt-0 flex-auto font-semibold text-gray-900 sm:mt-0">{trainer_schedule.event_name}</p>
                                        <p className="flex-none sm:ml-6">
                                            <time dateTime={trainer_schedule.start_time}>{trainer_schedule.start_time}</time> - <time dateTime="2022-01-13T16:30">4:30 PM</time>
                                        </p>
                                    </li>
                                ))
                                :
                                <p className='text-left text-xl font-semibold text-gray-500'>No Events Scheduled Yet For You!</p>
                            } */}
                        </ol>
                        </div>
                    </div>
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                {/* Announcements */}
                <section aria-labelledby="announcements-title">
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2 className="text-base font-medium text-gray-900" id="announcements-title">
                        Upcoming Livestreams
                      </h2>
                      <div className="mt-0 flow-root">
                            <p>PlaceHolder</p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="livestreams"
                          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Recent Hires */}
                {/* <section aria-labelledby="recent-hires-title">
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2 className="text-base font-medium text-gray-900" id="recent-hires-title">
                        Recent Hires
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul role="list" className="-my-5 divide-y divide-gray-200">
                          {recentHires.map((person) => (
                            <li key={person.handle} className="py-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                  <img className="h-8 w-8 rounded-full" src={person.imageUrl} alt="" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
                                  <p className="truncate text-sm text-gray-500">{'@' + person.handle}</p>
                                </div>
                                <div>
                                  <a
                                    href={person.href}
                                    className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                                  >
                                    View
                                  </a>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section> */}
              </div>
            </div>
          </div>
        </main>

            </div>
        </Authenticated>
        </>
    );
}
