import React from 'react'
import Hog from './Hog'
import hogs from "../porkers_data";

export default function Hogs({isGreased,nameSorted,weightSorted}) {


  if(nameSorted){
    console.log('sorted by name')
    let alphaList = hogs.filter((hog)=> isGreased ? hog.greased : true).sort((a,b)=>{
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      if(nameA > nameB){
        return 1
      }else if(nameA < nameB){
        return -1
      }else{
        return 0
      }
    }).map((hog) => <Hog key={hog.name} hog={hog}/>)
    return (
      <div className='ui grid container'>{alphaList}</div>
    )
  }else if(weightSorted){
    console.log('sorted by weight')
    let weightList = hogs.filter((hog)=> isGreased ? hog.greased : true).sort((a,b)=>{
      return a.weight - b.weight

    }).map((hog)=> <Hog key={hog.name} hog={hog}/>)
    return (
      <div className='ui grid container'>{weightList}</div> 
    )
  }else{
    console.log('not sorted')
    let filteredList = hogs.filter((hog)=> isGreased ? hog.greased : true).map((hog) => <Hog key={hog.name} hog={hog}/>)
    return (
      <div className='ui grid container'>{filteredList}</div>
    )
  }

}
