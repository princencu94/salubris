import React from 'react';
import BlogsTable from '@/Components/BlogsTable';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
const ShowBlogs = (props) => {

    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blogs</h2>}
        >
            <Head title="Blogs" />

            <div className="py-12">
                <div>
                    <BlogsTable blogs={props.blogs}/>
                </div>
            </div>
        </Authenticated>
    )
}

export default ShowBlogs;