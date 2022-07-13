import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
const ShowUsers = (props) => {

    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users"/>

            <div className="py-12">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mt-8 flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th
                                    scope="col"
                                    className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                                    >
                                    Name
                                    </th>
                                    <th
                                    scope="col"
                                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                    Email
                                    </th>
                                    <th
                                    scope="col"
                                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                    Created at
                                    </th>
                                    
                                    <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                                    
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {props.users.map((user) => (
                                    <tr key={user.id}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {user.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.created_at}</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </Authenticated>
    )
}

export default ShowUsers;