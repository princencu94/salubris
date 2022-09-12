//import { XMarkIcon } from '@heroicons/react/24/outline';

const TrialBanner = ({trialtime}) => {
    return (
        <div className="relative bg-orange-700">
            <div className="mx-auto max-w-7xl  px-3 sm:px-6 lg:px-8">
                <div className="pr-16 sm:px-16 sm:text-center">
                <p className="font-medium text-white">
                    <span className="md:hidden">Your Trial is ending</span>
                    <span className="hidden md:inline">Your Trial is ending in {trialtime} days</span>
                    <span className="block sm:ml-2 sm:inline-block">
                    <a href="billing" className="font-bold text-white underline">
                        Upgrade to a plan
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                    </span>
                </p>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
                <button
                    type="button"
                    className="flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                >
                    <span className="sr-only">Dismiss</span>
                    
                </button>
                </div>
            </div>
        </div>
    )
}


export default TrialBanner;