import React, { useState } from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FlashMassage = ({message}) => {
    const [showMessage, setShowMessage] = useState(true);

    const handleMessageToggle = () => {
        setShowMessage(!showMessage);
    }
    return (
        <div className={showMessage ? 'block' : 'hidden'}>
            <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">{message}</p>
                    </div>
                    <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                        type="button"
                        onClick={handleMessageToggle}
                        className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                        >
                        <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashMassage;