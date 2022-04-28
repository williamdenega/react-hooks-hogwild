import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({
	greased, 
	toggleGreased,
	name, 
	weight,
	toggleName,
	toggleWeight

}) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
				
			</span>
			<button 
			style={{float:'right'}}
				onClick={toggleGreased}
			>
				{greased ? 'unfilter greased Pigs' : 'filter by Greased Pigs'}
			</button>
			<button 
			style={{float:'right'}}
				onClick={toggleName}
			>
				{name ? 'unsort by name' : 'sort by name'}
			</button>
			<button 
			style={{float:'right'}}
				onClick={toggleWeight}
			>
				{weight ? 'unsort by weight' : 'sort by weight'}
			</button>
		</div>
	);
};

export default Nav;
