import React from 'react';
import AddScheduleEvent from '@/Components/AddScheduleEvent';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
const Schedule = (props) => {
    const { flash } = usePage().props
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Schedule</h2>}
        >
            <Head title="Add Schedule" />

            <div className="py-12">
                <div className='mb-7 max-w-4xl mx-auto'>
                            {
                                flash.message ?
                                    <FlashMassage message={flash.message} />
                                : null
                            }
                </div>
                <div >
                    <AddScheduleEvent trainers={props.trainers} />
                </div>
            </div>
        </Authenticated>
    )
}

export default Schedule;