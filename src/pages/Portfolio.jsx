import { Helmet } from "react-helmet-async"
import p1 from '../assets/images/portfolio/1.jpg'
import p2 from '../assets/images/portfolio/2.jpg'
import p3 from '../assets/images/portfolio/3.jpg'
import p4 from '../assets/images/portfolio/4.jpg'
import p5 from '../assets/images/portfolio/5.jpg'
import p6 from '../assets/images/portfolio/6.jpg'

const PortfolioPage = () =>{
return(
    <>
      <Helmet>
       <title>Accounting | Portfolio</title>
      </Helmet>

      <div id="portfolio" className="mt-5">
	<div className="container-fluid">
		<h2 className="text text-center">Portfolio</h2><hr />
		<div className="row">
			
			<div className="col-md-4">
				<img src={p1} className="img-fluid w-100 img-thumbnail" />
			</div>

			<div className="col-md-4">
				<img src={p2} className="img-fluid w-100 img-thumbnail" />
			</div>

			<div className="col-md-4">
				<img src={p3} className="img-fluid w-100 img-thumbnail" />
			</div>

		</div> 

		<div className="row">

			<div className="col-md-4">
				<img src={p4} className="img-fluid w-100 img-thumbnail" />
			</div>

			<div className="col-md-4">
				<img src={p5} className="img-fluid w-100 img-thumbnail" />
			</div>

			<div className="col-md-4">
				<img src={p6} className="img-fluid w-100 img-thumbnail" />
			</div>

		</div>
	
	</div> 

</div>
</>
)
}

export default PortfolioPage