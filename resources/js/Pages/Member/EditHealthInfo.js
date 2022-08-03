import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import EditHealthInfoForm from '@/Components/EditHealthInfoForm';

const EditHealthInfo = (props) => {

    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Health Info</h2>}
        >
            <Head title="Edit Health Info" />

            <div className="py-12">
                <div className=''>
                    <EditHealthInfoForm healthinfo={props.profileinfo} />
                </div>
            </div>
        </Authenticated>
    )
}

export default EditHealthInfo;