import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const AddBlogForm = (props) => {
    const { data, setData, post, processing, errors } = useForm({
        title: null,
        description: null,
        image_file: null,
        category:null,
      })

    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitting")
        post('/addblog');
    }
    return (
        <div className='max-w-4xl ml-12'>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
                <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Blog Information</h3>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Blog Title
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">

                            <input
                            type="text"
                            name="title"
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            autoComplete="title"
                            className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            />
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                {errors.title && <span>{errors.title}</span>}
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
                            defaultValue={''}
                            />
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                {errors.description && <span>{errors.description}</span>}
                            </p>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
                        </div>

                        <div className="">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Category
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-6">
                                <select
                                id="category"
                                name="category"
                                value={data.category}
                                onChange={e => setData('category', e.target.value)}
                                autoComplete="blog-category"
                                className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                >
                                    {
                                        props.categories.map((categorie) => 
                                            <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>

                        
                        <div className="sm:col-span-6">
                        <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                            Blog photo
                        </label>


                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="image_file" type="file" onChange={e => setData('image_file', e.target.files[0])} className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-red-600" id="email-error">
                                {errors.image && <span>{errors.image}</span>}
                            </p>
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

export default AddBlogForm;