import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const AddSalubrisMemberForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        memberid: '',
      })

    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitting")
        post('/addsalubrisuser');
    }

    return (
        <div className='max-w-4xl ml-12'>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
            <div className="">
                    
                    <div>
                        <h3 className="text-xl font-semibold leading-6 text-gray-900">Salubris Member Form</h3>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Member ID
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">

                            <input
                            type="text"
                            name="memberid"
                            id="memberid"
                            value={data.memberid}
                            onChange={e => setData('memberid', e.target.value)}
                            className="flex-1 focus:ring-orange-500 focus:border-orange-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            />
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                {errors.memberid && <span>{errors.memberid}</span>}
                            </p>
                        </div>
                        </div>
                    </div>
            </div>

            <div className="pt-5">
                    <button
                        type="submit"
                        disabled={processing}
                        className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white green-bg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Add Member
                    </button>
                    
                </div>
            </form>
        </div>
    )
}

export default AddSalubrisMemberForm;