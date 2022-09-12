import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const EditScheduledEvent = (props) => {
    const { data, setData, put, delete: destroy, processing, errors } = useForm({
        event_name: props.schedule.event_name,
        date: props.schedule.date,
        event_time: props.schedule.event_time,
        trainer:props.schedule.trainer,
      })

    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitting")
        put(`/edit-schedule/${props.schedule.id}`);
    }

    const handleDelete = () => {
        alert("Deleting!!");
        destroy(`/delete-schedule/${props.schedule.id}`);
    }

    return (
        <div className='max-w-4xl ml-12'>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
                <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Event Information</h3>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Event Name
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">

                                <input
                                type="text"
                                name="event_name"
                                id="event_name"
                                value={data.event_name}
                                onChange={e => setData('event_name', e.target.value)}
                                autoComplete="title"
                                className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                />
                                <p className="mt-2 text-sm text-red-600" id="email-error">
                                    {errors.event_name && <span>{errors.event_name}</span>}
                                </p>
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                Date
                            </label>
                            <div className="mt-1">
                                <input
                                type="date"
                                id="date"
                                name="date"
                                value={data.date}
                                onChange={e => setData('date', e.target.value)}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                defaultValue={''}
                                />
                                <p className="mt-2 text-sm text-red-600" id="email-error">
                                    {errors.date && <span>{errors.date}</span>}
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Trainer
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-6">
                                <select
                                id="trainer"
                                name="trainer"
                                value={data.trainer}
                                onChange={e => setData('trainer', e.target.value)}
                                className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                >
                                    {
                                        props.trainers.map((trainer) => (
                                            <option key={trainer.id}>{trainer.name}</option>
                                        ))
                                    }
                                    <option>Keegan Cooke</option>
                                </select>
                            </div>
                        </div>

                        
                        <div className="sm:col-span-6">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Event Time
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">

                                <input
                                type="time"
                                name="event_time"
                                id="event_time"
                                value={data.event_time}
                                onChange={e => setData('event_time', e.target.value)}
                                autoComplete="title"
                                className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                />
                                <p className="mt-2 text-sm text-red-600" id="email-error">
                                    {errors.event_time && <span>{errors.event_time}</span>}
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                    <button
                        onClick={handleDelete}
                        type="button"
                        className="bg-red-600 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                       Delete
                    </button>
                    <button
                        type="submit"
                        
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white green-bg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Edit
                    </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditScheduledEvent;