import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';
import SalubrisRev from '@/Components/SalubrisRev';
    
export default function SalubrisRevolution(props) {
    return (
        <>
        <MainHeader/>
        <PageHeader title="Salubris Revolution" image="images/banner5.jpeg"/>
        <SalubrisRev/>
        <Footer/>
        </>
    )
}
