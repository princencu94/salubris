import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import LivestreamsTable from '@/Components/LivestreamsTable';
const Livestreams = (props) => {

    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Livestreams</h2>}
        >
            <Head title="Livestream" />

            <div className="py-12">
                <div className='ml-14'>
                    <LivestreamsTable livestreams={props.livestreams} />
                </div>
            </div>
        </Authenticated>
    )
}

export default Livestreams;