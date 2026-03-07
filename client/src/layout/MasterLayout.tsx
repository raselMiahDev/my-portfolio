import Navbar from '../view/components/common/Navbar';
import Footer from '../view/components/common/Footer';
import { ReactNode } from 'react';

const MasterLayout = ({children}: {children: ReactNode}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;