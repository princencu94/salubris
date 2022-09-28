import React from 'react';
import FlashMassage from '@/Components/FlashMessage';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
import AddSalubrisMemberForm from '@/Components/AddSalubrisMemberForm';
import SalubrisRegisteredTable from '@/Components/SalubrisRegisteredTable';

const SalubrisMemberRegister = (props) => {
    const { flash } = usePage().props
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Salubris Member Register</h2>}
        >
            <Head title="Salubris Member Register" />

            <div className="py-12">
                <div className='mb-7 max-w-4xl mx-auto'>
                            {
                                flash.message ?
                                    <FlashMassage message={flash.message} />
                                : null
                            }
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <AddSalubrisMemberForm/>
                    </div>
                
                    <div>
                        <SalubrisRegisteredTable members={props.members}/>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default SalubrisMemberRegister;