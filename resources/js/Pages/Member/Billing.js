import { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

const Billing = (props) => {
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Billing</h2>}
        >
            <Head title="Billing" />

            <div className="max-w-5xl mx-auto">
                <p className={props.plan === null ? 'block' : 'hidden'}>
                    {props.plan === null ? `You currently not on a plan, your trial is ending soon ${props.trial_time} days left` : null }
                    <span>{ props.plan === null ? (<Link className="text-orange-700" href='billing-plans'> Choose a Plan</Link>): null}</span>
                </p>
                
            </div>
        </Authenticated>
        
    )}

export default Billing;
