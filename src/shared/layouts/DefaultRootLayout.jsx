import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const DefaultLayout = () =>{
return(
    <>
    <Navbar className='mb-md-5 mb-lg-5 pb-md-5 pb-lg-5 mb-3' />
    <Outlet />
    <Footer />
    </>
)
}

export default DefaultLayout