import React from 'react';
import ProfileForm from '@/Components/ProfileForm';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
const Profile = (props) => {

    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className='ml-14'>
                    <ProfileForm {...props}/>
                </div>
            </div>
        </Authenticated>
    )
}

export default Profile;