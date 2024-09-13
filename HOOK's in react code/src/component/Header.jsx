// create a component named "header " that takes on props-"title " the component should display a header element with the given title
import React from 'react'


function Header({title}) {
  return (
    <header>
        {title}
    </header>
  )
}

export default Header