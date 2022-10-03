import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container-fluid" >
			<Jumbotron />

			<div className="row">
				<div className="col"> <Card url ="https://picsum.photos/id/3/200/300"/> </div>
				<div className="col"> <Card url ="https://picsum.photos/id/2/200/300"/> </div>
				<div className="col"> <Card url ="https://picsum.photos/id/1/200/300"/> </div>
				<div className="col"> <Card url ="https://picsum.photos/id/4/200/300"/> </div>
			</div>
			</div>
			<Footer/>
		
		</div>
	)
};

export default Home;
