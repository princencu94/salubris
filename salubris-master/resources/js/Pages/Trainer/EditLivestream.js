import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import EditLivestreamForm from '@/Components/EditLivestreamForm';

const EditLivestream = (props) => {

    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">EditLivestream</h2>}
        >
            <Head title="EditLivestream" />

            <div className="py-12">
                <div className='ml-14'>
                    <EditLivestreamForm livestream={props.livestream}/>
                </div>
            </div>
        </Authenticated>
    )
}

export default EditLivestream;