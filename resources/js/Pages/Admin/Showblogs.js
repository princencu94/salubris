import React from 'react';
import BlogsTable from '@/Components/BlogsTable';
import Authenticated from '@/Layouts/Authenticated';
import FlashMassage from '@/Components/FlashMessage';
import { Head, usePage } from '@inertiajs/inertia-react';
const ShowBlogs = (props) => {
    const { flash } = usePage().props
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blogs</h2>}
        >
            <Head title="Blogs" />

            <div className="py-12 ">
            <div className='mb-7 max-w-4xl mx-auto'>
                            {
                                flash.message ?
                                    <FlashMassage message={flash.message} />
                                : null
                            }
                        </div>
                <div className='px-8'>
                    <BlogsTable blogs={props.blogs}/>
                </div>
            </div>
        </Authenticated>
    )
}

export default ShowBlogs;