import React from 'react';
import AddTrainerForm from '@/Components/AddTrainerForm';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
const AddTrainer = (props) => {
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Trainers</h2>}
        >
            <Head title="Trainers" />

            <div className="py-12">
                <div className="">
                    <AddTrainerForm/>
                </div>
            </div>
        </Authenticated>
    )
}

export default AddTrainer;