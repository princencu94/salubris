import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const AddLivestream = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        link: '',
        description: '',
        start_date: '',
        start_time:'',
      })

    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitting")
        post('/addlivestream');
    }
    return (
        <div className='max-w-4xl '>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
                <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Livestream Information</h3>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">

                            <input
                            type="text"
                            name="title"
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            />
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                {errors.title && <span>{errors.title}</span>}
                            </p>
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                            Link
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">

                            <input
                            type="text"
                            name="link"
                            id="link"
                            value={data.link}
                            onChange={e => setData('link', e.target.value)}
                            className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            />
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                {errors.link && <span>{errors.link}</span>}
                            </p>
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
                            Start Date
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">

                            <input
                            type="date"
                            name="start_date"
                            id="start_date"
                            value={data.start_date}
                            onChange={e => setData('start_date', e.target.value)}
                            className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            />
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                {errors.start_date && <span>{errors.start_date}</span>}
                            </p>
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">
                            Time
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">

                            <input
                            type="text"
                            name="start_time"
                            id="start_time"
                            value={data.start_time}
                            onChange={e => setData('start_time', e.target.value)}
                            className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            />
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                {errors.start_time && <span>{errors.start_time}</span>}
                            </p>
                        </div>
                        </div>

                        <div className="sm:col-span-6">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <div className="mt-1">
                            <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            />
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                {errors.description && <span>{errors.description}</span>}
                            </p>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Write a few sentences about the Livestream.</p>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="pt-5">
                    <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={processing}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white green-bg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Save
                    </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddLivestream;