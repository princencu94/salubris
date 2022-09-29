import React from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function CheckMember(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        memberid: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('checkmember'));
    };
     
    console.log(props.user);
    return (
        
        <Guest>
            <Head title="Check Member" />

            <div>
                {
                    props.user !== undefined ?
                    <p >{
                    props.user !== null ? 
                    <Link className='text-green-600' href="/register">Subscription Found! Click Continue</Link>
                    : 
                    <span className='text-red-600'>'No Subscription has been found contact Admin'</span>
                    }
                    </p>
                    :
                    null
                }
            </div>

            <form onSubmit={submit}>
                <div>
                    <Label forInput="memberid" value="Member ID" />

                    <Input
                        type="text"
                        name="memberid"
                        value={data.memberid}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="w-full mt-4">
                    <Button className="" processing={processing}>
                        Check Subscription
                    </Button>
                </div>
            </form>
        </Guest>


    );
}
