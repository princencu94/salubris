import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';

const posts = [
    {
      title: 'Nutrition',
      href: '#',
      category: { name: 'Go to Topic', href: '#' },
      description:
        'Healthy eating in real life',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'images/random7.jpg',
    },
    {
      title: 'Mental Well-Being',
      href: '#',
      category: { name: 'Go to Topic', href: '#' },
      description:
        'Resources to care for your mental and emotional well-being',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'images/random6.jpg',
      
    },
    {
      title: 'Fitness',
      href: '#',
      category: { name: 'Go to Topic', href: '#' },
      description:
        'Fitness that fits you',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'images/220244_.jpg',
      
    },
    {
        title: 'Sexual Health',
        href: '#',
        category: { name: 'Go to Topic', href: '#' },
        description:
          'Sexual health for every body',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
          'images/random1.jpg',
        
      },
      {
        title: 'Sleep',
        href: '#',
        category: { name: 'Go to Topic', href: '#' },
        description:
          'Your biggest ally in your pursuit of getting healthier sleep',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
          'images/random3.jpg',
        
      },
      {
        title: 'Womens Wellness',
        href: '#',
        category: { name: 'Go to Topic', href: '#' },
        description:
          'From your hair to down there, we have got your health covered',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
          'images/random4.jpg',
        
      },
      {
        title: 'Parenthood',
        href: '#',
        category: { name: 'Go to Topic', href: '#' },
        description:
          'Take care of you so you can take care of them',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
          'images/random5.jpg',
        
      },
      {
        title: 'Product Reviews',
        href: '#',
        category: { name: 'Go to Topic', href: '#' },
        description:
          'Simplify your search for health products with expert reviews and brand comparisons',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
          'images/random6.jpg',
        
      },
  ]

    
export default function Blogs(props) {
    return (
        <>
        <MainHeader/>
            {/* Page Main content start */}
            
            <div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">

                    <div className="relative max-w-6xl mx-auto">
                        <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Wellness Topics</h2>
                        </div>
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {props.categories.map((categorie) => (
                            <div key={categorie.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={`images/${categorie.image_path}`} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                
                                <a href={categorie.id} className="block mt-2">
                                    <p className="text-xl font-semibold text-gray-900">{categorie.name}</p>
                                    <p className="mt-3 text-base text-gray-500">{categorie.description}</p>
                                </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <p className="text-sm font-medium green-text">
                                        <a href={categorie.id} className="hover:underline">
                                        Go to Topic
                                        </a>
                                    </p>
                                    
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                    
            {/* Page Maint content end */}
        <Footer/>
        </>
    )
}
