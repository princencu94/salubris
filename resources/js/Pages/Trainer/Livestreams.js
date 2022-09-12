import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
import LivestreamsTable from '@/Components/LivestreamsTable';
import FlashMassage from '@/Components/FlashMessage';
const Livestreams = (props) => {
    const { auth, flash } = usePage().props
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Livestreams</h2>}
        >
            <Head title="Livestream" />

            <div className="py-12">
                <div className='mb-7 max-w-4xl mx-auto'>
                                {
                                    flash.message ?
                                        <FlashMassage message={flash.message} />
                                    : null
                                }
                </div>
                <div className='ml-14'>
                    <LivestreamsTable livestreams={props.livestreams} />
                </div>
            </div>
        </Authenticated>
    )
}

export default Livestreams;