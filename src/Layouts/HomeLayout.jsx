
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import LeatesNews from '../components/LeatesNews';
import LeftSide from '../components/LeftSide';
import Navbar from '../components/Navbar';
import RightSide from '../components/RightSide';

const HomeLayout = () => {
    return (
        <div className=' font-poppins container mx-auto'>
            <header>
                <Header></Header>
            </header>
            <section>
                <LeatesNews></LeatesNews>
            </section>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className=' py-5 grid md:grid-cols-12 gap-3'>
                <aside className=' col-span-3'>
                   <LeftSide></LeftSide>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightSide></RightSide>
                </aside>

            </main>
        </div>
    );
};

export default HomeLayout;