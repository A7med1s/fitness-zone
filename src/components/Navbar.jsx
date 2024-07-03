import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<>
<header className="bg-red-700 text-white p-4 shadow-lg">
        <div className=" mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">Fitness Zone</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="relative group">
                  Home
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
              <li>
              <Link to="/nutrition" className="relative group">
              Nutrition
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
              <li>
              <Link to="/products" className="relative group">
                  Products
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
              <li>
              <Link to="/articles" className="relative group">
                  Articles
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

</>
  )
}

export default Navbar
