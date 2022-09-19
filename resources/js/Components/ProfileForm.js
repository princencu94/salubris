import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const ProfileForm = (props) => {


    const { data, setData, post, put, processing, errors } = useForm({
        type: props.profile === null ? '' : props.profile.type ,
        bio: props.profile === null ? '' : props.profile.bio  ,
        image: props.profile === null ? '' : props.profile.image ,
        cover_photo: props.profile === null ? '' : props.profile.cover_photo  ,
        email: props.auth.user.email ,
      })

   

    const handleSubmit = (e) => {
        e.preventDefault();
        
            if(props.profile === null) {
                post('/saveprofile');
                alert("Submitting Save");
            } else {
                alert("Submitting Update");
                put(`/updateprofile/${props.auth.user.id}`);
            }
    }

    return (
        <form className="space-y-8 divide-y divide-gray-200 w-2/3" onSubmit={handleSubmit}>
            
            <div className="space-y-8 divide-y divide-gray-200">
                <div>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                    <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful what you share.
                    </p>
                </div>
                

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        salubris
                        </span>
                        <input
                        type="text"
                        name="email"
                        id="email"
                        value={data.email}
                        
                        disabled={true}
                        autoComplete="email"
                        className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                    </div>
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.email && <span>{errors.email}</span>}
                    </p>
                </div>
                    <div className="sm:col-span-3">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Type
                    </label>
                    <div className="mt-1">
                        <select
                        id="type"
                        name="type"
                        value={data.type}
                        onChange={e => setData('type', e.target.value)}
                        autoComplete="type-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                        <option>HIIT Trainer</option>
                        <option>Wellness Instructor</option>
                        <option>Nutrutionist</option>
                        </select>
                    </div>
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.type && <span>{errors.type}</span>}
                    </p>
                    </div>

                    <div className="sm:col-span-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                        Bio
                    </label>
                    <div className="mt-1">
                        <textarea
                        id="bio"
                        name="bio"
                        value={data.bio}
                        onChange={e => setData('bio', e.target.value)}
                        rows={10}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.bio && <span>{errors.bio}</span>}
                    </p>
                    </div>

                    <div className="sm:col-span-6">
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                        Photo
                    </label>
                    <div className="mt-1 flex items-center">
                   
                            <input id="image"  name="image" type="file" onChange={e => setData('image', e.target.files[0])} />
                            
                    </div>
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.image && <span>{errors.image}</span>}
                    </p>
                    </div>

                    <div className="sm:col-span-6">
                    <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                        Cover photo
                    </label>
                    <input id="cover_photo" name="cover_photo" type="file"  onChange={e => setData('cover_photo', e.target.files[0])}/>
                    </div>
                </div>
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.cover_image && <span>{errors.cover_image}</span>}
                    </p>
                </div>

            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={processing}
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white green-bg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Save
                </button>
                </div>
            </div>
        </form>
    )
}


export default ProfileForm;