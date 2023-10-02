import React from 'react'
import NavBar from './NavBar'
import SearchDock from './SearchDock'

export default function UpperBody() {
  return (
  <>
  <div className="upper-body  h-[70vh] bg-cover bg-center w-[100%] md:w-[100%]">
    <NavBar/>
    <SearchDock/>
  </div>
  </>
  )
}
