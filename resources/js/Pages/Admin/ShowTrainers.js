import React from 'react';
import TrainersTable from '@/Components/TrainersTable';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
const ShowTrainers = (props) => {

    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Trainers</h2>}
        >
            <Head title="Trainers" />

            <div className="py-12 ">
                <div className='px-8'>
                    <TrainersTable trainers={props.trainers}/>
                </div>
            </div>
        </Authenticated>
    )
}

export default ShowTrainers;