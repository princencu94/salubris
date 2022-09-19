import React from 'react';
import MainHeader from '@/Components/Mainheader';
import Footer from '@/Components/Footer';
import PageHeader from '@/Components/PageHeader';
import DashboardTest from '@/Components/DashboardTest';

const DashboardSand = () => {
    return (
        <>
        <MainHeader/>
        <PageHeader title="Virtual Gym" image="images/220244_12.jpg"/>

        {/* Alternating Feature Sections */}
        <DashboardTest/>
        <Footer/>
        </>
    )
}

export default DashboardSand;