import { Helmet } from "react-helmet-async"
import cura from '../assets/images/team/1.jpg'
import denston from '../assets/images/team/4.jpg'
import jeff from '../assets/images/team/2.jpg'

const TeamPage = () =>{
return(
    <>
      <Helmet>
       <title>Accounting | Home</title>
      </Helmet>

<div id="team" className="mt-5">
	<div className="container-fluid">
		<div className="row">
			<h2 className="text text-center">Our TEAM</h2><hr />
			<div className="col-md-4">
				<center><img src={ cura } className="img-fluid w-100 img-thumbnail" /></center>
				<h3>Edwin Cura</h3>
				<h4>Chief Accounting</h4>
			</div>

			<div className="col-md-4">
				<center><img src={ denston } className="img-fluid w-100 img-thumbnail" /></center>
				<h3>Denston Sibal</h3>
				<h4>Accounting Assistant</h4>
			</div>

			<div className="col-md-4">
				<center><img src={ jeff } className="img-fluid w-100 img-thumbnail" /></center>
				<h3>Jeff Ronald G. Gamasan</h3>
				<h4>Technical Assistant</h4>
			</div>
			
		</div> 
	</div> 
</div> 
    </>
)
}

export default TeamPage