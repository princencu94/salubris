import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';


const UserHealthInfo = (props) => {
    
    const {title,gender,date_of_birth, first_name, surname, address, mobile, email, emergency_contact, phone, health_conditions, injuries, pregnant, motivation, main_goal, personal_trainer, area_of_attention  } = props.member;
    
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User Health Info</h2>}
        >
            <Head title="HealthInfo" />

            <div className="py-12">
                <div className='ml-14 mr-14'>
                <div className='mb-8'>
                    <Link href={`/users`} className="green-bg py-2 px-4 border  rounded-md shadow-sm text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                          Back to users
                    </Link>
                    </div>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Member Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                    </div>
                    <div className="border-t border-b border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Title</dt>
                            <dd className="mt-1 text-sm text-gray-900">{title}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                            <dd className="mt-1 text-sm text-gray-900">{first_name} {surname}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Date of birth</dt>
                            <dd className="mt-1 text-sm text-gray-900">{date_of_birth}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900">{email}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Mobile</dt>
                            <dd className="mt-1 text-sm text-gray-900">{mobile}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Emergency Contact</dt>
                            <dd className="mt-1 text-sm text-gray-900">{emergency_contact}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Phone</dt>
                            <dd className="mt-1 text-sm text-gray-900">{phone}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900">{email}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Gender</dt>
                            <dd className="mt-1 text-sm text-gray-900">{gender}</dd>
                        </div>
                        
                        </dl>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Medical Questionnaire</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                    </div>
                    <div className="border-t border-b border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Have you ever or do you have any of the following?</dt>
                            <dd className="mt-1 text-sm text-gray-900">{health_conditions.replace(/,+/g, ',').replace(/(^,)|(,$)/g, '')}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Do you have any problems/injuries in the follow areas?</dt>
                            <dd className="mt-1 text-sm text-gray-900">{injuries.replace(/,+/g, ',').replace(/(^,)|(,$)/g, '')}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Are you pregnant?</dt>
                            <dd className="mt-1 text-sm text-gray-900">{pregnant}</dd>
                        </div>
    
                        </dl>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Fitness Segments</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                    </div>
                    <div className="border-t border-b border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Which areas need the most attention:</dt>
                            <dd className="mt-1 text-sm text-gray-900">{area_of_attention} </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">What’s your main goal</dt>
                            <dd className="mt-1 text-sm text-gray-900">{main_goal}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Do you need a personal trainer</dt>
                            <dd className="mt-1 text-sm text-gray-900">{personal_trainer}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">What motivates you to exercise</dt>
                            <dd className="mt-1 text-sm text-gray-900">{motivation}</dd>
                        </div>
                        
    
                        </dl>
                    </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default UserHealthInfo;