import { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import BillingPlansTable from '@/Components/BillingPlansTable';

const BillingPlans = (props) => {
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Billing Plans</h2>}
        >
            <Head title="Billing Plans" />

            <div className="max-w-5xl mx-auto">
                <BillingPlansTable plans={props.plans}/>
            </div>
        </Authenticated>
        
    )}

export default BillingPlans;
