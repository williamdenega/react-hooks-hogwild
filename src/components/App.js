import React, {useState} from "react";
import Nav from "./Nav";
import Hogs from './Hogs'


function App() {

	const [isGreased,setIsGreased] = useState(false)
	const [sortByWeight, setSortByWeight] = useState(false)
	const [sortByName, setSortByName] = useState(false)

	const toggleGreased = ()=>{
		setIsGreased((isGreased)=> !isGreased)
		
	}
	

	const toggleName = ()=>{
		setSortByName((sortByName)=>!sortByName)
		setSortByWeight((sortByWeight)=> sortByWeight= false)
	}

	const toggleWeight= ()=>{
		setSortByWeight((sortByWeight)=> !sortByWeight)
		setSortByName((sortByName)=> sortByName= false)
	}
	
	// const sortable = Object.fromEntries(
	// 	Object.entries(Hogs).sort(([,a],[,b]) => a-b)
	// );


	return (
		<div className="App">
			<Nav 
			greased={isGreased} 
			toggleGreased={toggleGreased} 
			weight={sortByWeight} name={sortByName} 
			toggleName={toggleName} 
			toggleWeight={toggleWeight}
			/>
			<Hogs  
			isGreased={isGreased}
			nameSorted={sortByName}
			weightSorted={sortByWeight}
			
			/>
		</div>
	);
}

export default App;
