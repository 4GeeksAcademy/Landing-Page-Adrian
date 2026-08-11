import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const cards = [
	{ image: "https://static.vecteezy.com/system/resources/previews/018/807/909/non_2x/psychedelic-groovy-white-cat-in-sunglasses-cool-space-trip-vector.jpg", title: "Card #1", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum faucibus mattis id ligula, non nisi nibh sem lacus facilisi class montes vehicula mi curae. Risus luctus hendrerit senectus, orci laoreet." },
	{ image: "https://static.vecteezy.com/system/resources/previews/018/807/909/non_2x/psychedelic-groovy-white-cat-in-sunglasses-cool-space-trip-vector.jpg", title: "Card #2", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum faucibus mattis id ligula, non nisi nibh sem lacus facilisi class montes vehicula mi curae. Risus luctus hendrerit senectus, orci laoreet." },
	{ image: "https://static.vecteezy.com/system/resources/previews/018/807/909/non_2x/psychedelic-groovy-white-cat-in-sunglasses-cool-space-trip-vector.jpg", title: "Card #3", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum faucibus mattis id ligula, non nisi nibh sem lacus facilisi class montes vehicula mi curae. Risus luctus hendrerit senectus, orci laoreet." },
	{ image: "https://static.vecteezy.com/system/resources/previews/018/807/909/non_2x/psychedelic-groovy-white-cat-in-sunglasses-cool-space-trip-vector.jpg", title: "Card #4", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum faucibus mattis id ligula, non nisi nibh sem lacus facilisi class montes vehicula mi curae. Risus luctus hendrerit senectus, orci laoreet." }
];

const Home = () => {

	return (
		<>
			<Navbar />
			<div className="d-flex flex-column min-vh-100 mx-5">
				<Jumbotron />
				<div className="container">
					<div className="row">
					{cards.map((card, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
							<Card
								image={card.image} 
								title={card.title} 
								description={card.description} 
							/>
						</div>
					))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;