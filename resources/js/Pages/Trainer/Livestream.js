import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import AddLivestream from '@/Components/AddLivestreamForm';
const Livestream = (props) => {

    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Livestream</h2>}
        >
            <Head title="Livestream" />

            <div className="py-12">
                <div className='ml-14'>
                    <AddLivestream/>
                </div>
            </div>
        </Authenticated>
    )
}

export default Livestream;