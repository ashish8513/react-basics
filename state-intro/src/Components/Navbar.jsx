import React1, { useEffect } from 'react'

const Navbar = ({ color }) => {
    //! Case 1. Run on every Render
  useEffect(() => {
    alert("hey Welcome to my page")
  })
//! Case 2.Run only on first Render
  useEffect(() => {
    alert("Color was Changed")
  })
//! Case 3. Run only when certain value changed
  useEffect(() => {
    alert("first was Changed")
  }, [color])
    // useEffect(() => {
    //     alert("color was changed")
    // }, [color])

    return (
        <div>
            I am a NavBar {color} hehe.
        </div>
    )
}

export default Navbar
