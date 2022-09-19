import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';

const EditHealthInfoForm = ({ healthinfo}) => {

    const [step, setStep] = useState(1);
    
    const nextStep = () => {
        setStep(step + 1);
        
    }

    const backStep = () => {
        setStep(step - 1);
        
    }

 
    const { data, put, setData, processing, errors } = useForm({
        
        title:healthinfo.title,
        gender: healthinfo.gender,
        dateofbirth: healthinfo.date_of_birth,
        firstname: healthinfo.first_name,
        surname: healthinfo.surname,
        address: healthinfo.address,
        mobile: healthinfo.mobile,
        email: healthinfo.email,
        emergencycontact: healthinfo.emergency_contact,
        phone: healthinfo.phone,
        heartdisease: "",
        cardiovascularcondition: "",
        dizziness: "",
        blackouts: "",
        fainting: "",
        asthma: "",
        bloodpressure: "",
        arthritis: "",
        diabetes: "",
        epilepsy: "", 
        gout: "", 
        familyhxofheartdisease: "",
        infectiousdiseases:"",
        otherconditions: "",
        knees: "",
        lowerback: "",
        shoulders: "",
        hipspelvis:"",
        flexibility: "",
        otherinjuries: "",
        injuries: "",
        pregnant: healthinfo.pregnant,
        areaofattention:healthinfo.area_of_attention,
        maingoal:healthinfo.main_goal,
        personaltrainer:healthinfo.personal_trainer,
        motivation:healthinfo.motivation, 
      });

      
    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/edithealthinfo/${healthinfo.user_id}` );
        setStep(3);
    }

    const handleDelete = () => {
        alert("Deleting!!");
    }

    console.log(errors);
    return (
        <div className='max-w-4xl ml-12'>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
               
                    <div>

                            <div className={step === 1 ? `mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 transition delay-700 duration-300 ease-in`: `hidden`}> 
                                <div className="sm:col-span-3">
                                
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title:(Mr/Mrs/Miss/Ms)
                                </label>
                                <div className="mt-1 ">
                                    <select
                                    id="title"
                                    name="title"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    autoComplete="title"
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option>Mr</option>
                                        <option>Mrs</option>
                                        <option>Miss</option>
                                        <option>Ms</option>
                                    </select>
                                </div>
                                </div>

                                <div className="sm:col-span-3">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                    Gender
                                </label>
                                <div className="mt-1 ">
                                    <select
                                    id="gender"
                                    name="gender"
                                    value={data.gender}
                                    onChange={e => setData('gender', e.target.value)}
                                    autoComplete="gender"
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                </div>
                                <div className="sm:col-span-3">
                                <label htmlFor="dateofbirth" className="block text-sm font-medium text-gray-700">
                                    Date of birth
                                </label>
                                <div className="mt-1">
                                    <input
                                    type="date"
                                    name="dateofbirth"
                                    id="dateofbirth"
                                    value={data.dateofbirth}
                                    onChange={e => setData('dateofbirth', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                </div>
                                <div className="sm:col-span-3">
                                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                                    Surname
                                </label>
                                <div className="mt-1">
                                    <input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    value={data.surname}
                                    onChange={e => setData('surname', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                </div>
                                <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First Name
                                </label>
                                <div className="mt-1">
                                    <input
                                    type="text"
                                    name="firstname"
                                    id="first-name"
                                    value={data.firstname}
                                    onChange={e => setData('firstname', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                </div>
                                <div className="sm:col-span-3">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                    Address
                                </label>
                                <div className="mt-1">
                                    <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={data.address}
                                    onChange={e => setData('address', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                </div>
                                <div className="sm:col-span-3">
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                    Mobile
                                </label>
                                <div className="mt-1">
                                    <input
                                    type="text"
                                    name="mobile"
                                    id="mobile"
                                    value={data.mobile}
                                    onChange={e => setData('mobile', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                </div>
                                <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                </div>
                                <div className="sm:col-span-3">
                                <label htmlFor="emergency-contact" className="block text-sm font-medium text-gray-700">
                                    Emergency Contact
                                </label>
                                <div className="mt-1">
                                    <input
                                    type="text"
                                    name="emergencycontact"
                                    id="emergency-contact"
                                    value={data.emergencycontact}
                                    onChange={e => setData('emergencycontact', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                </div>
                                <div className="sm:col-span-3">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone
                                </label>
                                <div className="mt-1">
                                    <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={data.phone}
                                    onChange={e => setData('phone', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                </div>
                            </div>
                        <div className={step === 2 ? 'block transition delay-700 duration-300 ease-in' : 'hidden'}>
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Medical Questionnaire</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Have you ever or do you have any of the following?
                            </p>
                            <p className="mt-1 max-w-2xl text-sm text-red-500">
                                Please reselect your options 
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                            
                            <fieldset className="space-y-5">
                                <legend className="sr-only">Medical Questionnaire</legend>
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                    <input
                                        id="heart-disease"
                                        aria-describedby="Heart-disease-description"
                                        name="heartdisease"
                                        value="Heart Disease"
                                        onChange={e => setData('heartdisease', e.target.value)}
                                        type="checkbox"
                                        className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                    />
                                    </div>
                                    <div className="ml-3 text-sm">
                                    <label htmlFor="Heart Disease" className="font-medium text-gray-700">
                                        Heart Disease
                                    </label>
                                    <span id="heart-disease-description" className="text-gray-500">
                                        <span className="sr-only">Heart Disease </span>
                                    </span>
                                    </div>
                                </div>
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                    <input
                                        id="cardiovascular-condition"
                                        aria-describedby="cardiovascular-condition-description"
                                        name="cardiovascularcondition"
                                        value="Cardiovascular Condition"
                                        onChange={e => setData('cardiovascularcondition', e.target.value)}
                                        type="checkbox"
                                        className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                    />
                                    </div>
                                    <div className="ml-3 text-sm">
                                    <label htmlFor="cardiovascular-condition" className="font-medium text-gray-700">
                                        Cardiovascular Condition
                                    </label>
                                    <span id="cardiovascular-condition-description" className="text-gray-500">
                                        <span className="sr-only">Cardiovascular Condition</span>
                                    </span>
                                    </div>
                                </div>
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                    <input
                                        id="dizziness"
                                        aria-describedby="dizziness-description"
                                        name="dizziness"
                                        value="Dizziness"
                                        onChange={e => setData('dizziness', e.target.value)}
                                        type="checkbox"
                                        className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                    />
                                    </div>
                                    <div className="ml-3 text-sm">
                                    <label htmlFor="dizziness" className="font-medium text-gray-700">
                                        Dizziness
                                    </label>
                                    <span id="dizziness-description" className="text-gray-500">
                                        <span className="sr-only">Dizziness </span>
                                    </span>
                                    </div>
                                </div>
                                </fieldset>
                            </div>

                            <div className="sm:col-span-3">
                                <fieldset className="space-y-5">
                                <legend className="sr-only">Medical Questionnaire</legend>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="blackouts"
                                            aria-describedby="blackouts-description"
                                            name="blackouts"
                                            value="Blackouts"
                                            onChange={e => setData('blackouts', e.target.value)}
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="blackouts" className="font-medium text-gray-700">
                                            Blackouts
                                        </label>
                                        <span id="blackouts-description" className="text-gray-500">
                                            <span className="sr-only">Blackouts </span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="fainting"
                                            aria-describedby="fainting-description"
                                            name="fainting"
                                            value="Fainting"
                                            onChange={e => setData('fainting', e.target.value)}
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="fainting" className="font-medium text-gray-700">
                                            Fainting
                                        </label>
                                        <span id="fainting-description" className="text-gray-500">
                                            <span className="sr-only">Fainting </span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="asthma"
                                            aria-describedby="Asthma-description"
                                            name="asthma"
                                            value="Asthma"
                                            onChange={e => setData('asthma', e.target.value)} 
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="asthma" className="font-medium text-gray-700">
                                            Asthma
                                        </label>
                                        <span id="asthma-description" className="text-gray-500">
                                            <span className="sr-only">Asthma</span>
                                        </span>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            
                            <div className="sm:col-span-3">
                                <fieldset className="space-y-5">
                                    <legend className="sr-only">Medical Questionnaire</legend>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="blood-pressure"
                                            aria-describedby="blood-pressure-description"
                                            name="bloodpressure"
                                            value="Blood Pressure"
                                            onChange={e => setData('bloodpressure', e.target.value)}
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="blood-pressure" className="font-medium text-gray-700">
                                            High/Low Blood Pressure
                                        </label>
                                        <span id="blood-pressure-description" className="text-gray-500">
                                            <span className="sr-only">blood-pressure </span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="arthritis"
                                            aria-describedby="arthritis-description"
                                            name="arthritis"
                                            value="Arthritis"
                                            onChange={e => setData('arthritis', e.target.value)}
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="arthritis" className="font-medium text-gray-700">
                                            Arthritis
                                        </label>
                                        <span id="arthritis-description" className="text-gray-500">
                                            <span className="sr-only">Arthritis </span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="diabetes"
                                            aria-describedby="diabetes-description"
                                            name="diabetes"
                                            value="Diabetes"
                                            onChange={e => setData('diabetes', e.target.value)}
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="diabetes" className="font-medium text-gray-700">
                                            Diabetes
                                        </label>
                                        <span id="diabetes-description" className="text-gray-500">
                                            <span className="sr-only">Diabetes</span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="infectious-diseases"
                                            aria-describedby="infectious-diseases-description"
                                            name="infectiousdiseases"
                                            value="Infectious Diseases"
                                            onChange={e => setData('infectiousdiseases', e.target.value)} 
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="infectious-diseases" className="font-medium text-gray-700">
                                            Infectious diseases
                                        </label>
                                        <span id="infectious-diseases-description" className="text-gray-500">
                                            <span className="sr-only">Infectious diseases</span>
                                        </span>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            
                            <div className="sm:col-span-3">
                                <fieldset className="space-y-5">
                                    <legend className="sr-only">Medical Questionnaire</legend>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="epilepsy"
                                            aria-describedby="epilepsy-description"
                                            value="Epilepsy/Fits"
                                            onChange={e => setData('epilepsy', e.target.value)}
                                            name="epilepsy"
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="epilepsy" className="font-medium text-gray-700">
                                            Epilepsy/Fits
                                        </label>
                                        <span id="epilepsy-description" className="text-gray-500">
                                            <span className="sr-only">Epilepsy/Fits</span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="gout"
                                            aria-describedby="Gout-description"
                                            value="Gout"
                                            onChange={e => setData('gout', e.target.value)}
                                            name="gout"
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="gout" className="font-medium text-gray-700">
                                            Gout
                                        </label>
                                        <span id="gout-description" className="text-gray-500">
                                            <span className="sr-only">Gout </span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="family-hx-of-heart-disease"
                                            aria-describedby="family-hx-of-heart-disease-description"
                                            name="family-hx-of-heart-disease"
                                            value="Family Hx of Heart Disease"
                                            onChange={e => setData('familyhxofheartdisease', e.target.value)}
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="family-hx-of-heart-disease" className="font-medium text-gray-700">
                                            Family Hx of Heart Disease
                                        </label>
                                        <span id="family-hx-of-heart-disease-description" className="text-gray-500">
                                            <span className="sr-only">Family Hx of Heart Disease</span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="other-conditions"
                                            aria-describedby="other-description"
                                            value="Other Conditions"
                                            onChange={e => setData('otherconditions', e.target.value)}
                                            name="other"
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="other" className="font-medium text-gray-700">
                                            Other
                                        </label>
                                        <span id="other-description" className="text-gray-500">
                                            <span className="sr-only">Other</span>
                                        </span>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            
                            <div className="sm:col-span-3">
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Do you have any problems/injuries in the follow areas?
                                </p>
                                <fieldset className="space-y-5">
                                    <legend className="sr-only">Medical Questionnaire</legend>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="knees"
                                            aria-describedby="Knees-description"
                                            value="Knees"
                                            onChange={e => setData('knees', e.target.value)}
                                            name="knees"
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="knees" className="font-medium text-gray-700">
                                            Knees
                                        </label>
                                        <span id="knees-description" className="text-gray-500">
                                            <span className="sr-only">Knees</span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="lower-back"
                                            aria-describedby="lower-back-description"
                                            value="Lower Back"
                                            onChange={e => setData('lowerback', e.target.value)}
                                            name="lowerback"
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="lower-back" className="font-medium text-gray-700">
                                            Lower Back
                                        </label>
                                        <span id="lower-back-description" className="text-gray-500">
                                            <span className="sr-only">Lower Back </span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="neck-shoulders"
                                            aria-describedby="neck-shoulders-description"
                                            name="neckshoulders"
                                            value="Neck Shoulders"
                                            onChange={e => setData('shoulders', e.target.value)}
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="neck-shoulders" className="font-medium text-gray-700">
                                                Neck/Shoulders
                                        </label>
                                        <span id="neck-shoulders-description" className="text-gray-500">
                                            <span className="sr-only">Neck/Shoulders</span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="hips-pelvis"
                                            aria-describedby="hips-pelvis-description"
                                            value="Hips Pelvis"
                                            onChange={e => setData('hipspelvis', e.target.value)}
                                            name="hipspelvis"
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="hips-pelvis" className="font-medium text-gray-700">
                                            Hips Pelvis
                                        </label>
                                        <span id="hips-pelvis-description" className="text-gray-500">
                                            <span className="sr-only">Hips Pelvis</span>
                                        </span>
                                        </div>
                                    </div>

                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="flexiblity"
                                            aria-describedby="flexiblity-description"
                                            name="flexiblity"
                                            value="Flexibility"
                                            onChange={e => setData('flexibility', e.target.value)}
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="flexiblity" className="font-medium text-gray-700">
                                            Flexibility
                                        </label>
                                        <span id="flexiblity-description" className="text-gray-500">
                                            <span className="sr-only">Flexibility</span>
                                        </span>
                                        </div>
                                    </div>

                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                        <input
                                            id="otherinjuries"
                                            aria-describedby="other-description"
                                            value="Other Injuries"
                                            onChange={e => setData('otherinjuries', e.target.value)}
                                            name="otherinjuries"
                                            type="checkbox"
                                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="other" className="font-medium text-gray-700">
                                            Other
                                        </label>
                                        <span id="other-description" className="text-gray-500">
                                            <span className="sr-only">Other</span>
                                        </span>
                                        </div>
                                    </div>
                                </fieldset>
                            </div> 

                            <div className="sm:col-span-3">
                                
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                    Are you Pregnant?
                                </label>
                                <div className="mt-1 ">
                                    <select
                                    id="pregnant"
                                    name="pregnant"
                                    value={data.pregnant}
                                    onChange={e => setData('pregnant', e.target.value)}
                                    autoComplete="title"
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            
                            </div> 
                            </div>
                        </div>
                       
                        <div className={ step === 3 ? "mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 transition delay-700 duration-300 ease-in" : 'hidden'}>
                            <div className="sm:col-span-3">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Fitness Segment</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Biometrics
                                </p>
                            </div>

                            <div className="sm:col-span-3"></div>

                            <div className="sm:col-span-3">
                            <label htmlFor="area-of-attention" className="block text-sm font-medium text-gray-700">
                                Which areas need the most attention:
                                </label>
                                <div className="mt-1 ">
                                    <select
                                    id="areaofattention"
                                    name="areaofattention"
                                    value={data.areaofattention}
                                    onChange={e => setData('areaofattention', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option>Back</option>
                                        <option>Arms</option>
                                        <option>Butt</option>
                                        <option>Chest</option>
                                        <option>Belly Legs</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                            <label htmlFor="main-goal" className="block text-sm font-medium text-gray-700">
                                What’s your main goal
                            </label>
                                <div className="mt-1 ">
                                    <select
                                    id="maingoal"
                                    name="maingoal"
                                    value={data.maingoal}
                                    onChange={e => setData('maingoal', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option>Lose Weight</option>
                                        <option>Gain Weight</option>
                                        <option>Keep fit</option>
                                        <option>Postpartum Recovery</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                            <label htmlFor="personal-trainer" className="block text-sm font-medium text-gray-700">
                                Do you need a personal trainer?
                            </label>
                                <div className="mt-1 ">
                                    <select
                                    id="personaltrainer"
                                    name="personaltrainer"
                                    value={data.personaltrainer}
                                    onChange={e => setData('personaltrainer', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                                What motivates you to exercise
                            </label>
                                <div className="mt-1 ">
                                    <select
                                    id="motivation"
                                    name="motivation"
                                    value={data.motivation}
                                    onChange={e => setData('motivation', e.target.value)}
                                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option>lmproving Health</option>
                                        <option>Relive stress</option>
                                        <option>Gain confidence</option>
                                        <option>Get firm and toned</option>
                                        <option>Boost Energy</option>
                                        <option>Gain Healthy Habits</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                            
                
                </div>

                <div className={ step === 3 ? 'hidden' : "block pt-5"}>
                    <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={backStep}
                        className={ step === 1 ? 'hidden' : "green-bg py-2 px-4 border  rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"}
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        onClick={nextStep}
                        
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white green-bg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Next
                    </button>
                    </div>
                </div>

                <div className={ step !== 3 ? 'hidden' : "block pt-5"}>
                    <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={backStep}
                        className="green-bg py-2 px-4 border  rounded-md shadow-sm text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        onClick={nextStep}
                        disabled={processing}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-700 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Submit
                    </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditHealthInfoForm;