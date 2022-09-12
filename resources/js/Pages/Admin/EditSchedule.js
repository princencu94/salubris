import React from 'react';
import EditScheduledEvent from '@/Components/EditScheduledEvent';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
const Schedule = (props) => {
    const { flash } = usePage().props
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Schedule</h2>}
        >
            <Head title="Edit Schedule" />

            <div className="py-12">
                <div className='mb-7 max-w-4xl mx-auto'>
                            {
                                flash.message ?
                                    <FlashMassage message={flash.message} />
                                : null
                            }
                </div>
                <div >
                    <EditScheduledEvent {...props} />
                </div>
            </div>
        </Authenticated>
    )
}

export default Schedule;