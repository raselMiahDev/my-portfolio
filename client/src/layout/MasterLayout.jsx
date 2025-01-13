import React from 'react';
import Header from './../view/components/common/Header';
import Footer from './../view/components/common/Footer';

const MasterLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;