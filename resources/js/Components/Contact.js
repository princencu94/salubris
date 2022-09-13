import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useForm } from '@inertiajs/inertia-react';


const ContactForm = ({ sethidden }) => {
    const [open, setOpen] = useState(sethidden)

    const handleClose = () => {
        setOpen(!open)
    }

    const { data, setData, post, processing, errors } = useForm({
        name: null,
        appointment: null,
        email: null,
        phone:null,
        message:null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitting")
        post('/sendmail');
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div className="px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                                <Dialog.Title className="text-lg font-medium text-gray-900">Contact Us</Dialog.Title>
                                <div className="ml-3 flex h-7 items-center">
                                <button
                                    type="button"
                                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    onClick={handleClose}
                                >
                                    <span className="sr-only">Close panel</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            {/* Replace with your content */}
                            <div className="mx-auto max-w-lg lg:max-w-none">
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                                <div>
                                    <label htmlFor="full-name" className="sr-only">
                                    Full name
                                    </label>
                                    <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    id="full-name"
                                    autoComplete="name"
                                    className="block w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                    placeholder="Full name"
                                    />
                                    <p className="mt-2 text-sm text-red-600" id="email-error">
                                        {errors.name && <span>{errors.name}</span>}
                                    </p>
                                </div>
                                <div>
                                <label htmlFor="appointment-type" className="sr-only">
                                    Appointment
                                </label>
                                <select
                                    id="appointment"
                                    name="appointment"
                                    value={data.appointment}
                                    onChange={e => setData('appointment', e.target.value)}    
                                    className="block w-full rounded-md border-gray-500 py-2  px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 "
                                    defaultValue="Maternal Care"
                                >
                                    <option>Maternal Care</option>
                                    <option>Managed Healthcare</option>
                                    <option>MentalHealth Management</option>
                                    <option>Corporate Wellness Program</option>
                                </select>
                                    <p className="mt-2 text-sm text-red-600" id="email-error">
                                        {errors.appointment && <span>{errors.appointment}</span>}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                    Email
                                    </label>
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                    placeholder="Email"
                                    />
                                    <p className="mt-2 text-sm text-red-600" id="email-error">
                                        {errors.email && <span>{errors.email}</span>}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">
                                    Phone
                                    </label>
                                    <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={data.phone}
                                    onChange={e => setData('phone', e.target.value)}
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                    placeholder="Phone"
                                    />
                                    <p className="mt-2 text-sm text-red-600" id="email-error">
                                        {errors.phone && <span>{errors.phone}</span>}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">
                                    Message
                                    </label>
                                    <textarea
                                    id="message"
                                    name="message"
                                    value={data.message}
                                    onChange={e => setData('message', e.target.value)}
                                    rows={4}
                                    className="block w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                    placeholder="Message"
                                    
                                    />
                                    <p className="mt-2 text-sm text-red-600" id="email-error">
                                        {errors.message && <span>{errors.message}</span>}
                                    </p>
                                </div>
                                <div>
                                    <button
                                    disabled={processing}
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-orange-300 to-orange-600 bg-origin-border  py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    >
                                    Submit
                                    </button>
                                </div>
                                </form>
                            </div>
                            {/* /End replace */}
                            </div>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ContactForm;