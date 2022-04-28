import React,{useState} from 'react'
import Details from './Details'
 function Hog({hog}) {

    const [isClicked,setIsClicked] = useState(false)

    const handleClick = ()=>{
        setIsClicked((isClicked)=> !isClicked)
    }


  return (
    <div onClick={handleClick} className='ui eight wide column'>
        <h1>{hog.name}</h1>
        <img src={hog.image} alt={hog.name} width='500px' />
        {isClicked ? <Details hog={hog}/> : null}
    </div>
  )
}


export default Hog