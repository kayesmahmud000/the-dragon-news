import logo from  "../assets/logo.png"
import moment from 'moment';
import LeatesNews from "./LeatesNews";
const Header = () => {
    return (
        <div className="">
             <div className='flex flex-col justify-center items-center gap-2 py-5'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <h2 className='text-gray-400 text-xl'>Journalism Without Fear or Favour</h2>
                    <p>{moment().format("dddd, MMMM Do YYYY")}</p>
                </div>
               
        </div>
    );
};

export default Header;