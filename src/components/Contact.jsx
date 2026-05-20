import React from 'react'

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const Contact = () => {
  return (

    <section
      id="contact"
      className="bg-[#f5f5f5] py-24 px-6"
    >

      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}

        <h2 className="text-5xl font-bold text-red-500 mb-8">
          Get In Touch
        </h2>

        <p className="text-gray-600 text-2xl mb-10">
          Do you have a project I can help you with?
          Let’s talk about it.
        </p>

        {/* ICONS */}

        <div className="flex justify-center gap-8 mb-16">

          {/* EMAIL */}

          <a
            href="mailto:maruthivadlamudi111@gmail.com"
            className="bg-red-50 p-5 rounded-xl text-red-500 text-3xl hover:scale-110 transition duration-300"
          >
            <FaEnvelope />
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/maruthivadlamudi614"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-50 p-5 rounded-xl text-red-500 text-3xl hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/maruthi-vadlamudi1/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-50 p-5 rounded-xl text-red-500 text-3xl hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* CONTACT FORM */}

        <div className="bg-white rounded-[30px] border border-gray-200 p-10 shadow-sm">

          <form className="space-y-8">

            {/* NAME */}

            <div className="text-left">

              <label className="block text-xl font-semibold mb-3">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-xl p-5 text-lg outline-none focus:border-blue-500"
              />

            </div>

            {/* EMAIL */}

            <div className="text-left">

              <label className="block text-xl font-semibold mb-3">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl p-5 text-lg outline-none focus:border-blue-500"
              />

            </div>

            {/* MESSAGE */}

            <div className="text-left">

              <label className="block text-xl font-semibold mb-3">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-xl p-5 text-lg outline-none focus:border-blue-500"
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-xl font-bold py-5 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>

  )
}

export default Contact