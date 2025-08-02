import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'

import RootLayout from './shared/layouts/RootLayout'
import DefaultLayout from './shared/layouts/DefaultRootLayout'
import BannerLayout from './shared/layouts/BannerLayout'

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import PortfolioPage from './pages/Portfolio'
import ServicesPage from './pages/Services'
import TeamPage from './pages/Team'
import Page404 from "./pages/Page404"

// logo for tab
import logo from './assets/images/logo/Stahlbeizen Logo header.png'

import AOS from 'aos'
import Messenger from './shared/components/MessengerButton'

function App() {
  
    useEffect(()=>{
         AOS.init({ duration: 1000 })

        //1. remove the link icon in index.html
        //2. Create a new <link rel="icon"> tag dynamically

        const favicon = document.createElement("link")
        favicon.rel = "icon"
        favicon.href = logo
        document.head.appendChild(favicon)

        return () =>{
            document.head.removeChild(favicon)
        }

    },[])


    return (
        <>
          <Messenger />

          <Routes>

            <Route element={<RootLayout />}>

                {/* Home Page - with Banner + Navbar below */}
                <Route element={<BannerLayout />}>
                    <Route path="/" element={<HomePage />} /> 
                </Route>

                {/* All Other Pages - with Navbar on top */}
                <Route element={<DefaultLayout />}>
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/team" element={<TeamPage />} />
                </Route>

            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </>
    )

}

export default App
