import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import FlashMassage from '@/Components/FlashMessage';
import TrialBanner from '@/Components/TrialBanner';



const BillingNotification = ({ trialtime }) => {
    return (
        <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-blue-700">Your Trial is ending {trialtime} </p>
                <p className="mt-3 text-sm md:mt-0 md:ml-6">
                    <Link href="billing" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                        Update your Plan
                    <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </p>
                </div>
            </div>
        </div>
    )
}

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
                 
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className='mb-7 max-w-4xl mx-auto'>
                            {
                                flash.message ?
                                    <FlashMassage message={flash.message} />
                                : null
                            }
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        
                        <div className="p-6 bg-white border-b border-gray-200">Welcome {auth.user.name}
                            {
                                props.profileinfo === null ?
                                    <p>Please fill in your health info on this <Link href="/addhealthinfo">form</Link></p>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
        </>
    );
}
