import React from 'react';
import ShowTrainerForm from '@/Components/ShowTrainerForm';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
const ShowTrainer = (props) => {

    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Trainer</h2>}
        >
            <Head title="Trainer" />

            <div className="py-12">
                <div>
                    <ShowTrainerForm trainer={props.trainer}/>
                </div>
            </div>
        </Authenticated>
    )
}

export default ShowTrainer;