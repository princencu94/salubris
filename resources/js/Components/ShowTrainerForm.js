import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';

const ShowTrainerForm = ({ trainer }) => {
    const { data, delete: destroy, processing, errors } = useForm({
        name: trainer.name || '',
        email: trainer.email || '',
      });

    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Deleting!!");
        destroy(`/removetrainer/${trainer.id}`);
    }


    return (
        <div className='max-w-4xl ml-12'>
            <form onSubmit={handleSubmit}>
                    <div>
                        <Label forInput="name" value="Name" />

                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            disabled={true}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="email" value="Email" />

                        <Input
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            disabled={true}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-end mt-4">

                        <Button className="ml-4" processing={processing}>
                            Remove Trainer
                        </Button>
                    </div>
                </form>
        </div>
    )
}

export default ShowTrainerForm;