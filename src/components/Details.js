import React from 'react'

export default function Details({hog}) {
  return (
    <div>
        <p>specialty: {hog.specialty}</p>
        {hog.greased ? <p>greased</p> : <p>not greased</p>}
        <p>weight: {hog.weight} LB</p>
        <p>highest medal achieved: {hog['highest medal achieved']}</p>
    </div>
  )
}
