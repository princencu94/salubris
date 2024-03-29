import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
import FlashMassage from '@/Components/FlashMessage';
import {
    UserGroupIcon,
    UserIcon,
    PlayIcon,
    ClipboardIcon
  } from '@heroicons/react/24/outline';



export default function Dashboard(props) {
    const { flash } = usePage().props
    const { trainers, users, blogs, livestreams } = props;
     
    const cards = [
        { name: 'Trainers', href: '/trainers', icon: UserGroupIcon, amount: trainers },
        { name: 'Live Streams', href: '#', icon: PlayIcon, amount: livestreams },
        { name: 'Blogs', href: '/adminblogs', icon: ClipboardIcon, amount: blogs },
        { name: 'Users', href: '/users', icon: UserIcon, amount: users },
       
    ]
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Overview</h2>}
        >
            <Head title="Overview" />

            <div className="pb-10">
                <div>
                        <div className='mb-7 max-w-4xl mx-auto'>
                            {
                                flash.message ?
                                    <FlashMassage message={flash.message} />
                                : null
                            }
                        </div>
                    <div className="mt-5">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
                            {/* Card */}
                            {cards.map((card) => (
                                <div key={card.name} className="bg-gray-50 overflow-hidden shadow shadow-orange-600 rounded-lg">
                                <div className="p-5">
                                    <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">{card.name}</dt>
                                        <dd>
                                            <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                                        </dd>
                                        </dl>
                                    </div>
                                    </div>
                                </div>
                                <div className="bg-gray-100 px-5 py-3">
                                    <div className="text-sm">
                                    <a href={card.href} className="font-medium text-black hover:text-cyan-900">
                                        View all
                                    </a>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
