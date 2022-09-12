import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';


const HealthInfo = (props) => {
    
    const {user_id, title,gender,date_of_birth, first_name, surname, address, mobile, email, emergency_contact, phone, health_insuarance, fund, health_conditions, injuries, pregnant, height, current_weight, goal_weight, body_type, typical_day, energy_levels, last_time_weight, area_most_attention, activities, eating_habits  } = props.profileinfo;
    
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Health Info</h2>}
        >
            <Head title="HealthInfo" />

            <div className="py-12">
                <div className='ml-14 mr-14'>
                    <div className='mb-8'>
                    <Link href={`/edithealthinfo/${user_id}`} className="text-indigo-600 hover:text-indigo-900">
                          Edit
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
                            <dt className="text-sm font-medium text-gray-500">Gender</dt>
                            <dd className="mt-1 text-sm text-gray-900">{gender}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Date of birth</dt>
                            <dd className="mt-1 text-sm text-gray-900">{date_of_birth}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Surname</dt>
                            <dd className="mt-1 text-sm text-gray-900">{surname}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                            <dd className="mt-1 text-sm text-gray-900">{first_name}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-gray-900">{address}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Mobile</dt>
                            <dd className="mt-1 text-sm text-gray-900">{mobile}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900">{email}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Emergency</dt>
                            <dd className="mt-1 text-sm text-gray-900">{emergency_contact}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Phone</dt>
                            <dd className="mt-1 text-sm text-gray-900">{phone}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Private Health Insuarance</dt>
                            <dd className="mt-1 text-sm text-gray-900">{health_insuarance}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Which Fund?</dt>
                            <dd className="mt-1 text-sm text-gray-900">{fund}</dd>
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
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">If so, how many weeks?</dt>
                            <dd className="mt-1 text-sm text-gray-900">N/A</dd>
                        </div>
                        </dl>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Segments</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                    </div>
                    <div className="border-t border-b border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Height(Cms)</dt>
                            <dd className="mt-1 text-sm text-gray-900">{height} </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Current Weight(Kgs)</dt>
                            <dd className="mt-1 text-sm text-gray-900">{current_weight}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Your goal weight</dt>
                            <dd className="mt-1 text-sm text-gray-900">{goal_weight}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Body Type</dt>
                            <dd className="mt-1 text-sm text-gray-900">{body_type}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Typical day</dt>
                            <dd className="mt-1 text-sm text-gray-900">{typical_day}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Energy levels</dt>
                            <dd className="mt-1 text-sm text-gray-900">{energy_levels}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">How physically active are you?</dt>
                            <dd className="mt-1 text-sm text-gray-900">N/A</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Last time on ideal weight?</dt>
                            <dd className="mt-1 text-sm text-gray-900">{last_time_weight}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Which areas need the most attention</dt>
                            <dd className="mt-1 text-sm text-gray-900">{area_most_attention}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">What's your main goal</dt>
                            <dd className="mt-1 text-sm text-gray-900">N/A</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Which activities do you prefer?</dt>
                            <dd className="mt-1 text-sm text-gray-900">{activities.replace(/,+/g, ',').replace(/(^,)|(,$)/g, '')}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Eating Habits</dt>
                            <dd className="mt-1 text-sm text-gray-900">{eating_habits.replace(/,+/g, ',').replace(/(^,)|(,$)/g, '')}</dd>
                        </div>
                        </dl>
                    </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default HealthInfo;