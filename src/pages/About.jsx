import { Helmet } from "react-helmet-async"
import TypingEffect from "../shared/components/TypingEffect"
import image1 from "../assets/images/about/1.jpg"

const AboutPage = () =>{
return(
    <>
     <Helmet>
      <title>Accounting | About</title>
     </Helmet>

     <section id="about" className="mt-5">
        <div className="container-fluid">
          
          <div className="row pt-3">
          
            <div className="col-md-12 col-lg-12">
                <h2 className="position-absolute center-absolute"><TypingEffect /> {/* 👈 Insert here */}</h2>
            </div>
           
          </div>

          <div className="row mt-5">

            <div className="col-md-4 col-lg-4">
                <img src={ image1 } className="w-100 img-fluid" />
            </div>

            <div className="col-md-8 col-lg-8">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
          </div>

        </div>
     </section>
    </>
)
}

export default AboutPage