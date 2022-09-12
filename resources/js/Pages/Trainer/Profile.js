import React from 'react';
import ProfileForm from '@/Components/ProfileForm';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
const Profile = (props) => {
    const { auth, flash } = usePage().props
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                        <div className='mb-7 max-w-4xl mx-auto'>
                            {
                                flash.message ?
                                    <FlashMassage message={flash.message} />
                                : null
                            }
                        </div>
                <div className='ml-14'>
                    <ProfileForm {...props}/>
                </div>
            </div>
        </Authenticated>
    )
}

export default Profile;