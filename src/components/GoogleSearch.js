import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/Header.css"

const Header = () => {
  return (
    <div class="Search">
      <form action="https://www.google.com/search" method="get"  class="search-bar" traget="_blank">
          <input className='Search-input' type="text" placeholder="search any thing" name="q" />
          <button type="submit">  <i class="fas fa-search"></i></button>
      </form>
</div>
  )
}

export default Header