import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import HealthInfoForm from '@/Components/HealthInfoForm';

const AddHealthInfo = (props) => {

    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Health Info</h2>}
        >
            <Head title="Add Health Info" />

            <div className="py-12">
                <div className=''>
                    <HealthInfoForm/>
                </div>
            </div>
        </Authenticated>
    )
}

export default AddHealthInfo;