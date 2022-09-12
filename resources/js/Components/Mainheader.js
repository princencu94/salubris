
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars4Icon, SearchIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ApplicationLogo from './ApplicationLogo'

const navigation = {
  categories: [
    {
      id: 'virtual-gym',
      name: 'Virtual Gym',
      featured: [
        {
          name: 'Join a Class',
          href: 'virtual-gym',
          imageSrc: 'images/220244_4.jpg',
          imageAlt: 'Female looking ready to train',
        },
        {
          name: 'Personal Training',
          href: 'virtual-gym',
          imageSrc: 'images/220244_5.jpg',
          imageAlt: '2 Models carrying weights',
        },
        {
          name: 'Challenges & Bootcamps',
          href: 'virtual-gym',
          imageSrc: 'images/220244_6.jpg',
          imageAlt: 'Female looking ready to train',
        },
        {
          name: 'Nutrition Expert',
          href: 'virtual-gym',
          imageSrc: 'images/Nutrition.jpg',
          imageAlt: '2 Models carrying weights',
        },
        
      ],
      sections: [
        {
          id: 'class',
          name: 'Join A Class',
          items: [
            { name: 'Private Group', href: '#' },
            ,
          ],
        },
        {
          id: 'challenges',
          name: 'Challenges & Bootcamps',
          items: [
            { name: '20 Min HIIT', href: '#' },
            { name: '20 Min HIIT', href: '#' },
            { name: '20 Min HIIT', href: '#' },
            { name: '20 Min HIIT', href: '#' },
            { name: '20 Min HIIT', href: '#' },
          ],
        },
        {
          id: 'nutrition',
          name: 'Nutrition Expert',
          items: [
            { name: '20 Min HIIT', href: '#' },
            { name: '20 Min HIIT', href: '#' },
            { name: '20 Min HIIT', href: '#' },
            { name: '20 Min HIIT', href: '#' },
            { name: '20 Min HIIT', href: '#' },

          ],
        },
      ],
    },
    {
      id: 'salubrisrev',
      name: 'Salubris Revolution',
      featured: [
        {
          name: 'Maternal Care',
          href: 'maternal-care',
          imageSrc: 'images/220244_8.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Managed healthcare',
          href: 'managed-healthcare',
          imageSrc: 'images/220244_7.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },

        {
          name: 'Mental health management',
          href: 'mental-health-management',
          imageSrc: 'images/220244_9.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Corporate wellness program',
          href: 'corporate-wellness-program',
          imageSrc: 'images/corporate-banner.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'managedhealthcare',
          name: '',
          items: [
            { name: 'Maternal Care', href: 'maternal-care' },
            { name: 'Managed Healthcare', href: 'managed-healthcare' },
            { name: 'Mental health Management ', href: 'mental-health-management' },
            { name: 'Corporate Employee Wellness Program', href: 'corporate-employee-wellness-program' },
          ],
        },
      ],
    },
  ],
  
  pages: [
    { name: 'Rewards', href: 'rewards' },
    { name: 'Fitness store', href: 'https://store.salubriswellness.com/' },
    { name: 'Blogs', href: 'blogs' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-10">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'text-orange-600 border-orange-600' : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute z-10 inset-0" aria-hidden="true" />
                                {item.name}
                               
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute z-10 inset-0" aria-hidden="true" />
                                {item.name}
                               
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                
                              </p>
                            </div>
                          ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <a href={route('login')} className="-m-2 p-2 block font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href={route('register')} className="-m-2 p-2 block font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars4Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Salubris Wellness</span>
                  <ApplicationLogo/>
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-b-orange-600 green-text'
                                  : 'border-transparent text-black hover:text-gray-800',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-4 gap-4 py-16">
                                    
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                            {item.name} <br/>
                                            
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            
                                          </p>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href={route('login')} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href={route('register')} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>


                
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
