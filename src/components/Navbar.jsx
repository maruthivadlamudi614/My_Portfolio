import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">

      <div className="max-w-6xl mx-auto flex justify-center gap-16 py-6 font-semibold text-gray-800 text-lg">

        <a
          href="#home"
          className="hover:text-orange-500 transition duration-300"
        >
          Home
        </a>

        <a
          href="#portfolio"
          className="hover:text-orange-500 transition duration-300"
        >
          Portfolio
        </a>

        <a
          href="#skills"
          className="hover:text-orange-500 transition duration-300"
        >
          Skills
        </a>

        <a
          href="#experience"
          className="hover:text-orange-500 transition duration-300"
        >
          Experience
        </a>

        <a
          href="#contact"
          className="hover:text-orange-500 transition duration-300"
        >
          Contact
        </a>

      </div>

    </nav>
  )
}

export default Navbar