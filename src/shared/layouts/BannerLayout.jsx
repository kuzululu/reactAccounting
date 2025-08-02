import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const BannerLayout = () =>{
 return(
  <>
     <div className='d-md-none d-lg-none d-block sticky-top'>
      <Navbar />
      </div> 
     <Banner />
    <div className='d-md-block d-lg-block d-none sticky-top'>
      <Navbar />
    </div>
     <Outlet />
     <Footer />
    </>
 )
}

export default BannerLayout