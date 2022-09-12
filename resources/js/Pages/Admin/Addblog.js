import React from 'react';
import AddBlogForm from '@/Components/AddBlogForm';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
const AddBlog = (props) => {
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blogs</h2>}
        >
            <Head title="Blogs" />

            <div className="py-12">
                <div className="">
                    <AddBlogForm {...props}/>
                </div>
            </div>
        </Authenticated>
    )
}

export default AddBlog;