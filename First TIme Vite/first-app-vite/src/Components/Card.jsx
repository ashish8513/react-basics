import React from 'react'
import "./Card.css"
function Card(props) {
  return (
    <div className='card'>
    <img className='card-img' src="https://burst.shopifycdn.com/photos/developer-coding-in-php.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" width={230} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
