import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ReactPlayer from 'react-player'

const JoinBanner = (props) => {
    const { title, about } = props.livestream;
    return (
    <div className="relative bg-indigo-800 -ml-8 -mr-8 -mt-6">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src='images/profile.png'
          alt=""
        />
        <div className="absolute inset-0 bg-orange-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-center text-indigo-100">
            {about}
        </p>
        <div className='flex flex-row justify-center'>
            <button className=" bg-gradient-to-r from-orange-300 to-orange-600 bg-origin-border px-12 py-2 mt-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white hover:from-orange-100 hover:to-orange-700">
                    Start
            </button>
        </div>
      </div>
    </div>
    )
}

const JoinInfo = (props) => {

    const { bio, type } = props.trainer_profile;
    

    return (
        <div className="overflow-hidden bg-white">
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium   text-gray-500">Trainer Bio</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{bio}</dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 ">Trainer Specialty</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 ">{type}</dd>
          </div>
        </dl>
      </div>
    </div>
    )
}



const JoinLivestream = (props) => {
    const { title, about, link } = props.livestream;
    const [open, setOpen] = useState(false);
    

    const openVideo = () => {
        setOpen(true);
    }

    console.log(link);
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Join Livestream</h2>}
        >
            <Head title="Join Livestream" />

            {/* Banner section */}
            <div className="relative bg-indigo-800 -ml-8 -mr-8 -mt-6">
                <div className="absolute inset-0">
                    <img
                    className="h-full w-full object-cover"
                    src='images/profile.png'
                    alt=""
                    />
                    <div className="absolute inset-0 bg-orange-800 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">{title}</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-center text-indigo-100">
                        {about}
                    </p>
                    <div className='flex flex-row justify-center'>
                        <button onClick={openVideo} className="bg-gradient-to-r from-orange-300 to-orange-600 bg-origin-border px-12 py-2 mt-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white hover:from-orange-100 hover:to-orange-700">
                                Start
                        </button>
                    </div>
                </div>
            </div>

            {/* Join Info Section */}
            <div className="max-w-3xl mx-auto">
                <JoinInfo {...props}/>
            </div>

            {/* Video Modal Section */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:h-full sm:max-w-6xl sm:p-6">
                        <ReactPlayer url={link} width="w-full" height="h-full" />
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
            </Transition.Root>
        </Authenticated>
    )
}

export default JoinLivestream;